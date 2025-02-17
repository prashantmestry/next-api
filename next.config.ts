import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // webpack: (config) => {
  //   // Modify Webpack settings if needed
  //   return config;
  // },
  eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during builds.
  },
};

export default nextConfig;
