import Image, { type ImageProps } from "next/image";
import { getImage, type ImageKey } from "@/lib/images";

type SiteImageProps = Omit<ImageProps, "src" | "alt"> & {
  imageKey: ImageKey;
  /** Override the manifest alt text if needed. */
  alt?: string;
};

/**
 * Renders an image from the central manifest by its logical key.
 * Swap the underlying file in src/lib/images.ts — never hard-code paths here.
 */
export default function SiteImage({ imageKey, alt, ...rest }: SiteImageProps) {
  const img = getImage(imageKey);
  // SVG placeholders are served as-is; raster photos swapped in later are optimized.
  const isSvg = img.src.toLowerCase().endsWith(".svg");
  return (
    <Image
      src={img.src}
      alt={alt ?? img.alt}
      unoptimized={isSvg}
      data-placeholder={img.placeholder || undefined}
      {...rest}
    />
  );
}
