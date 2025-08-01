import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/cms',
        destination: 'https://figbuffalo.sanity.studio',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
