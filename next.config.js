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
      },
      {
        source: '/kodomo(/?)',
        destination: '/kids',
        permanent: false
      },
      {
        source: '/otona(/?)',
        destination: '/adults',
        permanent: false
      },
      {
        source: '/otona/otona-works(/?)',
        destination: '/adults',
        permanent: false
      },
      {
        source: '/otona/otona-works.php(/?)',
        destination: '/adults',
        permanent: false
      },
      {
        source: '/denshikousaku(/?)',
        destination: '/programming',
        permanent: false
      },
      {
        source: '/kindergarten/koushi(/?)',
        destination: '/teachers',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
