import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */

  // image: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https:',
  //       hostname: 'i.imgur.com'
  //     },
  //   ],
  // },



  images: {
    domains: ['i.imgur.com'],
  },
};

export default nextConfig;
