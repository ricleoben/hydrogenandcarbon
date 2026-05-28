import Image, { type ImageProps } from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  unoptimized?: boolean;
  quality?: number;
} & Omit<ImageProps, "src" | "alt" | "fill" | "width" | "height" | "sizes" | "priority" | "unoptimized" | "quality">;

export function ContentImage({
  src,
  alt,
  className,
  fill = false,
  width = 1400,
  height = 900,
  sizes,
  priority,
  unoptimized,
  quality,
  ...rest
}: ContentImageProps) {
  const isGif = src.toLowerCase().includes(".gif");

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes ?? "100vw"}
        priority={priority}
        quality={quality}
        unoptimized={unoptimized ?? isGif}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes ?? "100vw"}
      priority={priority}
      quality={quality}
      unoptimized={unoptimized ?? isGif}
      {...rest}
    />
  );
}
