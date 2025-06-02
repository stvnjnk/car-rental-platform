"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Fuel, Settings, Calendar, Users, ChevronLeft, ChevronRight, Zap, Gauge, Briefcase } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "../contexts/language-context"
import CloudinaryImage from "@/components/ui/cloudinary-image"

interface Car {
  name: string
  price: number
  fuel: string
  fuelType: string
  transmission: string
  year: string
  passengers: number
  image: string
  slug?: string
  mainImage?: string
  images?: string[]
  horsepower?: number
  fuelConsumption?: number
  carType?: string
  luggage?: number
  features?: string[]
}

interface CarModalProps {
  car: Car | null
  isOpen: boolean
  onClose: () => void
}

export default function CarModal({ car, isOpen, onClose }: CarModalProps) {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!car) return null

  // Use the car's images array from Cloudinary
  const carImages = car.images || []

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{car.name}</DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <div className="relative h-80 bg-gray-100 rounded-lg overflow-hidden">
                <CloudinaryImage
                  publicId={carImages[currentImageIndex]}
                  alt={`${car.name} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {currentImageIndex + 1} / {carImages.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {carImages.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`flex-shrink-0 w-16 h-12 rounded border-2 overflow-hidden ${
                      currentImageIndex === index ? "border-blue-600" : "border-gray-200"
                    }`}
                  >
                    <CloudinaryImage
                      publicId={image}
                      alt={`${car.name} thumbnail ${index + 1}`}
                      width={64}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Car Details */}
          <div className="space-y-6">
            {/* Price */}
            <div className="text-center lg:text-left">
              <div className="text-4xl font-bold text-blue-600">{car.price}€</div>
              <div className="text-gray-600">{t("fleet.perDay")}</div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{t("modal.specifications")}</h3>

              <div className="grid grid-cols-2 gap-3">
                {/* Engine */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Fuel className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">{t("modal.engine")}</div>
                    <div className="font-medium">
                      {car.fuel}L {t(`fleet.${car.fuelType}`)}
                    </div>
                  </div>
                </div>

                {/* Horsepower */}
                {car.horsepower && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">{t("modal.horsepower")}</div>
                      <div className="font-medium">{car.horsepower} HP</div>
                    </div>
                  </div>
                )}

                {/* Fuel Consumption */}
                {car.fuelConsumption && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Gauge className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">{t("modal.fuelConsumption")}</div>
                      <div className="font-medium">{car.fuelConsumption} km/L</div>
                    </div>
                  </div>
                )}

                {/* Year */}
                {car.year && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">{t("modal.year")}</div>
                      <div className="font-medium">{car.year}</div>
                    </div>
                  </div>
                )}

                {/* Car Type */}
                {car.carType && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Settings className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">{t("modal.carType")}</div>
                      <div className="font-medium">{t(`modal.${car.carType}`)}</div>
                    </div>
                  </div>
                )}

                {/* Transmission */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">{t("modal.transmission")}</div>
                    <div className="font-medium">{t(`fleet.${car.transmission}`)}</div>
                  </div>
                </div>

                {/* Passengers */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="text-sm text-gray-600">{t("modal.passengers")}</div>
                    <div className="font-medium">
                      {car.passengers} {t("fleet.passengers")}
                    </div>
                  </div>
                </div>

                {/* Luggage */}
                {car.luggage && (
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-gray-600">{t("modal.luggage")}</div>
                      <div className="font-medium">
                        {car.luggage} {t("modal.bags")}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{t("modal.features")}</h3>
              <div className="flex flex-wrap gap-2">
                {car.features && car.features.length > 0 ? (
                  car.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))
                ) : (
                  <>
                    <Badge variant="secondary">{t("modal.airConditioning")}</Badge>
                    <Badge variant="secondary">{t("modal.powerSteering")}</Badge>
                    <Badge variant="secondary">{t("modal.electricWindows")}</Badge>
                    <Badge variant="secondary">{t("modal.centralLocking")}</Badge>
                    <Badge variant="secondary">{t("modal.radioCD")}</Badge>
                    <Badge variant="secondary">{t("modal.airbags")}</Badge>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  onClose()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("modal.inquireNow")}
              </Button>
              <Button variant="outline" className="w-full" onClick={onClose}>
                {t("modal.close")}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
