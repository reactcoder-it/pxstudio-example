/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
    localeDetection: false,
  },
  images: {
    domains: ["api.pxstudio.pw", "localhost"]
  }
}