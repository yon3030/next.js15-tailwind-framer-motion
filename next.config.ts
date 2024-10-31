import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    typedRoutes: true,
  },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  images: {
    unoptimized: false,
    domains: [], // Add any external image domains if needed
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
};

export default nextConfig;
