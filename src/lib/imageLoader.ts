import { ImageLoaderProps } from "next/image";

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  // Return the original src without any optimization or caching
  // This ensures direct links are used without Next.js processing
  return src;
}
