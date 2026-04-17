import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
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
