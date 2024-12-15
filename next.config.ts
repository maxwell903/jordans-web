/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Add this line
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig