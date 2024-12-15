/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: '.next',
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig