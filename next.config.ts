import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.steamstatic.com" },
      { protocol: "https", hostname: "cdn.cloudflare.steamstatic.com" },
      { protocol: "https", hostname: "shared.fastly.steamstatic.com" },
    ],
  },
};

export default nextConfig;
