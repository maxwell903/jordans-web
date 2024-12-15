/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true,
  },
  distDir: '.next',
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig