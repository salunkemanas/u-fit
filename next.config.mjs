/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },

  // Enable React Strict Mode
  reactStrictMode: true,

  // Disable trailing slash
  trailingSlash: false,

  // Todo: add redirects here
  async redirects() {
    return [];
  },
};

export default nextConfig;
