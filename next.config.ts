import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** Carpeta de este proyecto (evita que Next use el `package-lock` de `/Users/fidelfunez/`). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    localPatterns: [
      {
        pathname: "/sponsors/**",
      },
      {
        pathname: "/logos/**",
      },
      {
        pathname: "/photos/Gallery/**",
      },
      {
        pathname: "/photos/section-covers/**",
      },
    ],
  },
};

export default nextConfig;
