import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/sponsors/**",
        // Sin `search`: permite `?v=…` para bust de caché en `next/image`
      },
      {
        pathname: "/logos/**",
      },
      {
        pathname: "/photos/Gallery/**",
      },
    ],
  },
};

export default nextConfig;
