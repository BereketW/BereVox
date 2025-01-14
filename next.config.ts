import type { NextConfig } from "next";
// import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "*",
      },
    ],
  },

  /* config options here */
};

export default nextConfig;
