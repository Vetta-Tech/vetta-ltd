/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['quomodosoft.com'],
  },
  reactStrictMode: true,

  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'vetta.app',
        defaultLocale: 'en',
      },
      {
        domain: 'vetta.app',
        defaultLocale: 'bn',
      },
    ],
  },
}
