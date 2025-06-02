"use client"

import Image from 'next/image'
import { getOptimizedImageUrl, getHeroImageUrl } from '@/lib/cloudinary'

interface LocalImageProps {
  imagePath: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
  sizes?: string
  quality?: number
  isHero?: boolean
}

export default function LocalImage({
  imagePath,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  sizes,
  quality = 80,
  isHero = false,
}: LocalImageProps) {
  // Use hero-specific optimizations for LCP elements
  const imageUrl = isHero 
    ? getHeroImageUrl(imagePath, width, height)
    : getOptimizedImageUrl(imagePath, width, height, priority)

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        style={{
          objectFit: 'cover',
        }}
      />
    )
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  )
} 