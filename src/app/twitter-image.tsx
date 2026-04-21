import {
  ogAlt,
  ogContentType,
  ogSize,
  renderOgImage,
} from "@/components/og-image";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage();
}
