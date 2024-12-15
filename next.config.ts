/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',  // Add this line back
  distDir: 'out'     // Change this to 'out'
}

module.exports = nextConfig