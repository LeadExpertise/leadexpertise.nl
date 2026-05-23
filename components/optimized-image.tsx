"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  quality = 75,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Check if it's an external image that needs unoptimized
  const isExternal = src.startsWith("http") && !src.includes("img.youtube.com")
  
  if (fill) {
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={`${className} ${isLoading ? "blur-sm" : "blur-0"} transition-all duration-300`}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        quality={quality}
        loading={priority ? undefined : "lazy"}
        onLoad={() => setIsLoading(false)}
        unoptimized={isExternal}
      />
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isLoading ? "blur-sm" : "blur-0"} transition-all duration-300`}
      priority={priority}
      sizes={sizes}
      quality={quality}
      loading={priority ? undefined : "lazy"}
      onLoad={() => setIsLoading(false)}
      unoptimized={isExternal}
    />
  )
}
