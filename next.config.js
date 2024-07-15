/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    let redirects = [
      {
        source: '/blog/:path*',
        destination: 'https://blog.studiokura.com/:path*',
        permanent: false,
      },
      {
        source: '/kodomo(/?)',
        destination: '/kids',
        permanent: false,
      },
      {
        source: '/otona(/?)',
        destination: '/adults',
        permanent: false,
      },
      {
        source: '/otona/otona-works(/?)',
        destination: '/adults',
        permanent: false,
      },
      {
        source: '/otona/otona-works.php(/?)',
        destination: '/adults',
        permanent: false,
      },
      {
        source: '/denshikousaku(/?)',
        destination: '/programming',
        permanent: false,
      },
      {
        source: '/kindergarten/koushi(/?)',
        destination: '/teachers',
        permanent: false,
      },
    ];
    const teachers = [
      'matsuzaki',
      'alejandro',
      'azuma',
      'ogawa',
      'ito',
      'nakamura',
      'jou',
      'watanabe',
      'tanoue',
      'tanaka',
      'nakajima',
      'moriyama',
      'sakai',
      'maki',
    ];
    teachers.forEach((teacher) => {
      redirects.push({
        source: `/kindergarten/koushi/${teacher}(/?)`,
        destination: `/teachers/${teacher}`,
        permanent: false,
      });
    });
    return redirects;
  },
};

module.exports = nextConfig;
