import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: process.env.NETLIFY === "true",
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
