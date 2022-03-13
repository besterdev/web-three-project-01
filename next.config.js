/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  images: {
    domains: ["avatars.dicebear.com", "links.papareact.com", "i.pinimg.com"],
  },
};

module.exports = nextConfig;
