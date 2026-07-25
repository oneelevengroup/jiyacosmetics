import Image, { type ImageProps } from "next/image";
import { getImage, type ImageKey } from "@/lib/images";
import Placeholder from "@/components/Placeholder";

type SiteImageProps = Omit<ImageProps, "src" | "alt"> & {
  imageKey: ImageKey;
  /** Override the manifest alt text if needed. */
  alt?: string;
};

/**
 * Renders an image from the central manifest by its logical key. When the
 * manifest entry is still a placeholder, renders the consistent brand
 * Placeholder (gold JIYA flower + "PLACEHOLDER") that fills the parent.
 * Swap the underlying file in src/lib/images.ts (and set placeholder:false).
 */
export default function SiteImage({ imageKey, alt, ...rest }: SiteImageProps) {
  const img = getImage(imageKey);

  if (img.placeholder) {
    return <Placeholder />;
  }

  const isSvg = img.src.toLowerCase().endsWith(".svg");
  return <Image src={img.src} alt={alt ?? img.alt} unoptimized={isSvg} {...rest} />;
}
