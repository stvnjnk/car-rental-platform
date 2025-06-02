"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Car,
  Clock,
  Shield,
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  Fuel,
  Settings,
  Calendar,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./contexts/language-context"
import LanguageSwitcher from "./components/language-switcher"
import { useState } from "react"
import CarModal from "./components/car-modal"
import LocalImage from "@/components/ui/cloudinary-image"
import WhatsAppWidget from "./components/whatsapp-widget"

export default function HomePage() {
  const { t } = useLanguage()

  const [selectedCar, setSelectedCar] = useState<(typeof cars)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const openCarModal = (car: (typeof cars)[0]) => {
    setSelectedCar(car)
    setIsModalOpen(true)
  }

  const closeCarModal = () => {
    setIsModalOpen(false)
    setSelectedCar(null)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")
    setSubmitStatus(null)

    // Simulate form submission for demo
    setTimeout(() => {
      setSubmitStatus("success")
      setSubmitMessage(t("contact.successMessage"))
      event.currentTarget.reset()
      setIsSubmitting(false)
    }, 1000)
  }

  const cars = [
    {
      name: "Renault Koleos",
      price: 60,
      fuel: "2.0",
      fuelType: "lpg", // 2.0 L LPG (Liquefied Petroleum Gas)
      transmission: "automatic", // X-Tronic CVT Automatic
      year: "2022",
      passengers: 5,
      image: "Renault Koleos SUV",
      slug: "renault-koleos",
      mainImage: "cars/renault-koleos/main",
      images: [
        "cars/renault-koleos/exterior-front",
        "cars/renault-koleos/exterior-side",
        "cars/renault-koleos/exterior-rear",
        "cars/renault-koleos/interior-dashboard",
        "cars/renault-koleos/interior-seats",
      ],
      horsepower: 144,
      fuelConsumption: 13.5, // 7.4 L/100km = 13.5 km/L
      carType: "suv", // Mid-size SUV
      luggage: 5,
      features: [
        "touchscreen multimedia",
        "Apple CarPlay/Android Auto",
        "dual-zone climate control",
        "Bluetooth & USB",
        "front & rear parking sensors",
        "LED headlights",
        "rear view camera",
      ],
    },
    {
      name: "Dacia Duster",
      price: 50,
      fuel: "1.5",
      fuelType: "diesel", // 1.5 L Diesel
      transmission: "manual", // Manual
      year: "2022",
      passengers: 5,
      image: "Dacia Duster SUV",
      slug: "dacia-duster",
      mainImage: "cars/dacia-duster/main",
      images: [
        "cars/dacia-duster/exterior-front",
        "cars/dacia-duster/exterior-side",
        "cars/dacia-duster/exterior-rear",
        "cars/dacia-duster/interior-dashboard",
        "cars/dacia-duster/interior-seats",
      ],
      horsepower: 115,
      fuelConsumption: 18.5, // 5.4 L/100km = 18.5 km/L
      carType: "suv", // SUV
      luggage: 4,
      features: ["air conditioning", "power steering", "electric windows", "central locking", "radio/CD", "airbags"],
    },
    {
      name: "Hyundai Venue",
      price: 45,
      fuel: "1.6",
      fuelType: "gasoline", // 1.6 L Petrol (Gasoline)
      transmission: "automatic", // Automatic
      year: "2022",
      passengers: 5,
      image: "Hyundai Venue crossover",
      slug: "hyundai-venue",
      mainImage: "cars/hyundai-venue/main",
      images: [
        "cars/hyundai-venue/exterior-front",
        "cars/hyundai-venue/exterior-side",
        "cars/hyundai-venue/exterior-rear",
        "cars/hyundai-venue/interior-dashboard",
        "cars/hyundai-venue/interior-seats",
      ],
      horsepower: 121,
      fuelConsumption: 14.3, // 7.0 L/100km = 14.3 km/L
      carType: "crossover", // Crossover SUV
      luggage: 4,
      features: [
        "touchscreen display",
        "Apple CarPlay",
        "air conditioning",
        "power steering",
        "electric windows",
        "central locking",
      ],
    },
    {
      name: "MG ZS",
      price: 45,
      fuel: "1.5",
      fuelType: "gasoline", // 1.5 L Petrol (Gasoline)
      transmission: "manual", // Manual
      year: "2022",
      passengers: 5,
      image: "MG ZS compact SUV",
      slug: "mg-zs",
      mainImage: "cars/mg-zs/main",
      images: [
        "cars/mg-zs/exterior-front",
        "cars/mg-zs/exterior-side",
        "cars/mg-zs/exterior-rear",
        "cars/mg-zs/interior-dashboard",
        "cars/mg-zs/interior-seats",
      ],
      horsepower: 106,
      fuelConsumption: 15.4, // 6.5 L/100km = 15.4 km/L
      carType: "suv", // Compact SUV
      luggage: 4,
      features: [
        "touchscreen infotainment",
        "air conditioning",
        "power steering",
        "electric windows",
        "central locking",
        "airbags",
      ],
    },
    {
      name: "Hyundai Accent",
      price: 35,
      fuel: "1.4",
      fuelType: "gasoline", // 1.4 L Petrol (Gasoline)
      transmission: "automatic", // Automatic
      year: "2022",
      passengers: 5,
      image: "Hyundai Accent sedan",
      slug: "hyundai-accent",
      mainImage: "cars/hyundai-accent/main",
      images: [
        "cars/hyundai-accent/exterior-front",
        "cars/hyundai-accent/exterior-side",
        "cars/hyundai-accent/exterior-rear",
        "cars/hyundai-accent/interior-dashboard",
        "cars/hyundai-accent/interior-seats",
      ],
      horsepower: 100,
      fuelConsumption: 16.1, // 6.2 L/100km = 16.1 km/L
      carType: "sedan", // Sedan
      luggage: 3,
      features: ["air conditioning", "power steering", "electric windows", "central locking", "radio", "airbags"],
    },
    {
      name: "Hyundai i10",
      price: 30,
      fuel: "1.0",
      fuelType: "gasoline", // 1.0 L Petrol (Gasoline)
      transmission: "automatic", // Automatic
      year: "2022",
      passengers: 4,
      image: "Hyundai i10 compact hatchback",
      slug: "hyundai-i10",
      mainImage: "cars/hyundai-i10/main",
      images: [
        "cars/hyundai-i10/exterior-front",
        "cars/hyundai-i10/exterior-side",
        "cars/hyundai-i10/exterior-rear",
        "cars/hyundai-i10/interior-dashboard",
        "cars/hyundai-i10/interior-seats",
      ],
      horsepower: 67,
      fuelConsumption: 20.0, // 5.0 L/100km = 20.0 km/L
      carType: "hatchback", // Hatchback
      luggage: 2,
      features: ["air conditioning", "power steering", "electric windows", "central locking", "radio", "airbags"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/donsql8ze/image/upload/v1748276974/Logo_xtj5cr.svg"
              alt="Car Rental Platform Demo Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-gray-900">Car Rental Platform</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t("nav.whyUs")}
            </Link>
            <Link href="#fleet" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t("nav.fleet")}
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t("nav.reviews")}
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t("nav.contact")}
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section relative">
        {/* Background Image */}
        <div className="hero-bg absolute inset-0 z-0">
          <LocalImage
            imagePath="hero/hero-car"
            alt="Premium car rental"
            fill
            className="object-cover"
            priority
            isHero
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="hero-overlay absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="hero-content relative z-10 container mx-auto px-4 py-8 sm:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                  {t("hero.title")}
                  <span className="text-blue-400"> {t("hero.titleHighlight")}</span> {t("hero.titleEnd")}
                </h1>
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">{t("hero.description")}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3"
                  onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Car className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t("hero.exploreCars")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 border-white text-gray-900 bg-white/90 hover:bg-white hover:text-gray-900"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {t("hero.contact")}
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-4 sm:space-x-8 pt-2 sm:pt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
                  <div className="text-xs sm:text-sm text-gray-300">{t("hero.happyCustomers")}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-300">{t("hero.support")}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                  <div className="text-xs sm:text-sm text-gray-300">{t("hero.vehicleModels")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("whyUs.title")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("whyUs.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("whyUs.pricing.title")}</h3>
                <p className="text-gray-600">{t("whyUs.pricing.description")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Car className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("whyUs.selection.title")}</h3>
                <p className="text-gray-600">{t("whyUs.selection.description")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("whyUs.service.title")}</h3>
                <p className="text-gray-600">{t("whyUs.service.description")}</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t("whyUs.reliability.title")}</h3>
                <p className="text-gray-600">{t("whyUs.reliability.description")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("fleet.title")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("fleet.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <LocalImage
                    imagePath={car.mainImage}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{car.price}€</div>
                      <div className="text-sm text-gray-600">{t("fleet.perDay")}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Fuel className="h-4 w-4 mr-2" />
                      <span>
                        {car.fuel}L {t(`fleet.${car.fuelType}`)}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Settings className="h-4 w-4 mr-2" />
                      <span>{t(`fleet.${car.transmission}`)}</span>
                    </div>
                    {car.year && (
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{car.year}</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>
                        {car.passengers} {t("fleet.passengers")}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700" onClick={() => openCarModal(car)}>
                    {t("fleet.view")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("testimonials.title")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("testimonials.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">&ldquo;{t("testimonials.review1")}&rdquo;</p>
                <div className="font-semibold text-gray-900">{t("testimonials.customer1.name")}</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">&ldquo;{t("testimonials.review2")}&rdquo;</p>
                <div className="font-semibold text-gray-900">{t("testimonials.customer2.name")}</div>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">&ldquo;{t("testimonials.review3")}&rdquo;</p>
                <div className="font-semibold text-gray-900">{t("testimonials.customer3.name")}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("contact.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t("contact.getInTouch")}</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+355696171111" 
                    className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-200 group"
                  >
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                      +1 234 567 890
                    </span>
                  </a>
                  <a 
                    href="mailto:info@example.com"
                    className="inline-flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>info@example.com</span>
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/riS57udjR4fPDdDe8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-200 group"
                  >
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                      Rruga e Aeroportit, Tiranë 1504, Albania
                    </span>
                  </a>
                </div>
              </div>

              {/* Map - hidden on mobile, shown on desktop */}
              <div className="hidden lg:block h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.843031435233!2d19.70878167753444!3d41.420925971295766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13502df69422d1a3%3A0x1b3d676ee4769e99!2sAlpet%20Car%20Rental%20Albania!5e0!3m2!1sen!2suk!4v1748136189265!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Car Rental Platform Demo Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">{t("contact.sendMessage")}</h3>
                
                {/* Contact form - submits to static HTML file for Netlify detection */}
                <form name="contact" method="POST" onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.firstName")}</label>
                      <Input 
                        name="firstName"
                        type="text"
                        placeholder={t("contact.firstNamePlaceholder")} 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.lastName")}</label>
                      <Input 
                        name="lastName"
                        type="text"
                        placeholder={t("contact.lastNamePlaceholder")} 
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.email")}</label>
                    <Input 
                      name="email"
                      type="email" 
                      placeholder={t("contact.emailPlaceholder")} 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.phone")}</label>
                    <Input 
                      name="phone"
                      type="tel" 
                      placeholder={t("contact.phonePlaceholder")} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.message")}</label>
                    <Textarea 
                      name="message"
                      placeholder={t("contact.messagePlaceholder")} 
                      rows={4} 
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isSubmitting ? t("contact.sending") : t("contact.send")}
                  </Button>
                  {submitMessage && (
                    <div className={`text-center p-3 rounded ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Map - shows on mobile only, below contact form */}
            <div className="lg:hidden mt-8">
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.843031435233!2d19.70878167753444!3d41.420925971295766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13502df69422d1a3%3A0x1b3d676ee4769e99!2sAlpet%20Car%20Rental%20Albania!5e0!3m2!1sen!2suk!4v1748136189265!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Car Rental Platform Demo Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="https://res.cloudinary.com/donsql8ze/image/upload/v1748276974/Logo_xtj5cr.svg"
                  alt="Car Rental Platform Demo Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 brightness-0 invert"
                />
                <span className="text-xl font-bold">Car Rental Platform</span>
              </div>
              <p className="text-gray-400">{t("footer.description")}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
              <div className="space-y-2">
                <Link href="#home" className="block text-gray-400 hover:text-white transition-colors">
                  {t("nav.home")}
                </Link>
                <Link href="#fleet" className="block text-gray-400 hover:text-white transition-colors">
                  {t("nav.fleet")}
                </Link>
                <Link href="#why-us" className="block text-gray-400 hover:text-white transition-colors">
                  {t("nav.whyUs")}
                </Link>
                <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                  {t("nav.contact")}
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer.services")}</h4>
              <div className="space-y-2">
                <div className="text-gray-400">{t("footer.dailyRentals")}</div>
                <div className="text-gray-400">{t("footer.weeklyRentals")}</div>
                <div className="text-gray-400">{t("footer.monthlyRentals")}</div>
                <div className="text-gray-400">{t("footer.airportPickup")}</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">{t("footer.contactInfo")}</h4>
              <div className="space-y-2">
                <a href="tel:+355696171111" className="block text-gray-400 hover:text-white transition-colors">
                  +1 234 567 890
                </a>
                <a href="mailto:info@example.com" className="block text-gray-400 hover:text-white transition-colors">
                  info@example.com
                </a>
                <a 
                  href="https://maps.app.goo.gl/riS57udjR4fPDdDe8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Rruga e Aeroportit, Tiranë 1504, Albania
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
      {/* Car Modal */}
      <CarModal car={selectedCar} isOpen={isModalOpen} onClose={closeCarModal} />
      
      {/* WhatsApp Widget */}
      <WhatsAppWidget />
    </div>
  )
}

