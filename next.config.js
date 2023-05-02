/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'cdnb.artstation.com',
      'cdna.artstation.com',
      'wallpapercave.com',
      'i.ytimg.com',
      'preview.redd.it',
      'lumiere-a.akamaihd.net',
      'media.sketchfab.com',
      'i.pinimg.com',
      'i.ebayimg.com',
    ],
  },
};

module.exports = nextConfig;