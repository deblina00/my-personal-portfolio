import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.sanity.io"], // Add Sanity’s CDN domain here
  },
};

export default nextConfig;
