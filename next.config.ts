import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "static.momocdn.net",
      "phuthuysanpham.com",
      "homepage.momocdn.net",
      "images.unsplash.com",
      "product.momo.vn",
      "lh3.googleusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
