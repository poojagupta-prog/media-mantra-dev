import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /** cPanel/Apache: export /contact/index.html so /contact/ does not 403 */
  trailingSlash: true,

  async redirects() {
    return [
      { source: "/india", destination: "/in", permanent: true },
      { source: "/singapore", destination: "/sg", permanent: true },
      { source: "/uae", destination: "/ae", permanent: true },
      { source: "/usa", destination: "/us", permanent: true },
      { source: "/united-states", destination: "/us", permanent: true },
      { source: "/australia", destination: "/au", permanent: true },
      { source: "/about/gaming-mantra", destination: "/about/mantras", permanent: true },
      { source: "/about/startup-mantra", destination: "/about/mantras", permanent: true },
    ];
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;