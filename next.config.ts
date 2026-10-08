import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kalendar",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
