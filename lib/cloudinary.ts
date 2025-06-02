// Local image utilities for demo purposes

// Helper function to generate local image URLs
export function getLocalImageUrl(imagePath: string) {
  return `/images/${imagePath}.jpg`
}

// Helper function for optimized car images (now using local images)
export function getOptimizedImageUrl(imagePath: string, width?: number, height?: number, priority = false) {
  // Return local image path
  return getLocalImageUrl(imagePath)
}

// Specific function for hero images
export function getHeroImageUrl(imagePath: string, width?: number, height?: number) {
  return getLocalImageUrl(imagePath)
}

// For backward compatibility, keep the same function name but use local images
export function getCloudinaryUrl(imagePath: string, transformations?: string) {
  return getLocalImageUrl(imagePath)
} 