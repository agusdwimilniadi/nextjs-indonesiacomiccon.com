/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'indonesiacomiccon.com',
      },
      {
        protocol: 'https',
        hostname: 'api.indonesiacomiccon.com',
      },
      {
        protocol: 'https',
        hostname: 'widget.loket.com',
      },
      {
        protocol: 'https',
        hostname: 'zenmarket.jp',
      },
    ],
  },
};

module.exports = nextConfig;
