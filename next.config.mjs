/** @type {import('next').NextConfig} */
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

export default withNextra({
  reactStrictMode: true,
  trailingSlash: true,
  cleanDistDir: true,
  output: 'export',

  // Image Loaders
  images: {
    unoptimized: true,
  },

  // Ignore Lint during Build
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    // webpackBuildWorker: true,
  },
})

