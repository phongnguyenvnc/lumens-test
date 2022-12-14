module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/wallet',
        permanent: true
      },
    ]
  },
}
