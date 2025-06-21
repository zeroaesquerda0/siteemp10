const nextConfig = {
  images: {
    domains: ['aceternity.com', 'images.unsplash.com', 'imgur.com', 'i.imgur.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_WHATSAPP_NUMBER: '5582999532934',
    NEXT_PUBLIC_GA_ID: 'GA_MEASUREMENT_ID',
  },
}

module.exports = nextConfig