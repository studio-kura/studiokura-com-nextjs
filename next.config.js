/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
        source: '/kodomo/index/:path*',
        destination: '/kids',
        permanent: false,
      },
      {
        source: '/otona(/?)',
        destination: '/adults',
        permanent: false,
      },
      {
        source: '/otona/index/:path*',
        destination: '/adults',
        permanent: false,
      },
      {
        source: '/otona/otona-works/:path*',
        destination: '/adults',
        permanent: false,
      },
      {
        source: '/denshikousaku(/?)',
        destination: '/programming',
        permanent: false,
      },
      {
        source: '/denshikousaku/index/:path*',
        destination: '/programming',
        permanent: false,
      },
      {
        source: '/otoiawase/:path*',
        destination: '/trial',
        permanent: false,
      },
      {
        source: '/member/yoyaku/:path*',
        destination: '/reschedule',
        permanent: false,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: false,
      },
      {
        source: '/jyukouryou/:path*',
        destination: '/pricing',
        permanent: false,
      },
      {
        source: '/basyo/:path*',
        destination: '/classrooms',
        permanent: false,
      },
      {
        source: '/koushi(/?)',
        destination: '/teachers',
        permanent: false,
      },
      {
        source: '/koushi/index/:path*',
        destination: '/teachers',
        permanent: false,
      },
      {
        source: '/kindergarten/koushi(/?)',
        destination: '/teachers',
        permanent: false,
      },
      {
        source: '/kindergarten/koushi/index/:path*',
        destination: '/teachers',
        permanent: false,
      },
      {
        source: '/kindergarten/company/:path*',
        destination: '/kindergartens',
        permanent: false,
      },
      {
        source: '/kindergarten(/?)',
        destination: '/kindergartens',
        permanent: false,
      },
      {
        source: '/kindergarten/index/:path*',
        destination: '/kindergartens',
        permanent: false,
      },
      {
        source: '/kindergarten/mitsumori/:path*',
        destination: '/kindergartens/estimate-calculator',
        permanent: false,
      },
      {
        source: '/kindergarten/form_contact/:path*',
        destination: '/kindergartens/contact',
        permanent: false,
      },
      {
        source: '/kindergarten/form_documents/:path*',
        destination: '/kindergartens/request-docs',
        permanent: false,
      },
      {
        source: '/kindergarten/form_lesson/:path*',
        destination: '/kindergartens/trial',
        permanent: false,
      },
      {
        source: '/kindergarten/form_estimate/:path*',
        destination: '/kindergartens/request-estimate',
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
        source: `/koushi/${teacher}/:path*`,
        destination: `/teachers/${teacher}`,
        permanent: false,
      });
      redirects.push({
        source: `/kindergarten/koushi/${teacher}/:path*`,
        destination: `/teachers/${teacher}`,
        permanent: false,
      });
    });

    return redirects;
  },
};

module.exports = nextConfig;
