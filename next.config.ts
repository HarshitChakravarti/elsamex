import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emslindia.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
