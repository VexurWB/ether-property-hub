import Image from "next/image";
import { siteImages } from "@/lib/site-images";

// Trimmed transparent logo (no outline)
const LOGO_WIDTH = 891;
const LOGO_HEIGHT = 940;
const LOGO_ASPECT = LOGO_WIDTH / LOGO_HEIGHT;

export function Logo({ height = 48 }: { height?: number; className?: string }) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <span className="relative inline-block shrink-0" style={{ height, width }}>
      <Image
        src={siteImages.logo}
        alt="Ether Property Hub"
        fill
        sizes={`${width}px`}
        className="object-contain object-left"
        priority
      />
    </span>
  );
}

export function LogoWordmark({
  height = 48,
  className = "",
  compact = false,
}: {
  height?: number;
  compact?: boolean;
  light?: boolean;
  className?: string;
}) {
  const large = height >= 60;
  const logoHeight = compact || !large ? 54 : 62;
  const width = Math.round(logoHeight * LOGO_ASPECT);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="relative block" style={{ height: logoHeight, width }}>
        <Image
          src={siteImages.logo}
          alt="Ether Property Hub"
          width={width}
          height={logoHeight}
          sizes={`${width}px`}
          className="h-full w-full object-contain"
          priority
          unoptimized
        />
      </span>
    </span>
  );
}
