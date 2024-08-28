/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
