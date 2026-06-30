import type { ImgHTMLAttributes } from 'react'
import { getImageDimensions } from '@/lib/imageDimensions'

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement>

export default function OptimizedImage({
  src,
  width,
  height,
  loading,
  decoding,
  ...props
}: OptimizedImageProps) {
  const inferred = typeof src === 'string' ? getImageDimensions(src) : undefined

  return (
    <img
      {...props}
      src={src}
      width={width ?? inferred?.width}
      height={height ?? inferred?.height}
      loading={loading ?? 'lazy'}
      decoding={decoding ?? 'async'}
    />
  )
}
