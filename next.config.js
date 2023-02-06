/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_WEB_APP_URL: process.env.WEB_APP_URL,
    NEXT_PUBLIC_API: process.env.API,
  },
};

module.exports = nextConfig;
