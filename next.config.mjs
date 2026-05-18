/** @type {import('next').NextConfig} */
const nextConfig = {
  // We removed the redirect from '/' to '/entry' since our entry screen now resides natively on '/'
  // and routes dynamically to '/portfolio'.
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    // Ignore typescript errors during build to prevent build failures with legacy files
    ignoreBuildErrors: true,
  }
};

export default nextConfig;