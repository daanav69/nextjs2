/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://wikipediastar.com',
        permanent: false,
        basePath: false
      },
    ]
  },
};
