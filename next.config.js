/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.studiokura.com/:path*',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
