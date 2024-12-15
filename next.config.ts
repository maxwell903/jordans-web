/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove trailing slash from pages/routes
  trailingSlash: false,
  // Disable server side rendering for static export
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig