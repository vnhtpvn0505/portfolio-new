/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES,
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig