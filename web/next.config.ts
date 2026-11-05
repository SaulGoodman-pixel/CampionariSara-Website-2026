import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "campionarisara.com",
          },
        ],
        destination: "https://www.campionarisara.it/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.campionarisara.com",
          },
        ],
        destination: "https://www.campionarisara.it/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
