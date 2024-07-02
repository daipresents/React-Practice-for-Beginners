/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'books.google.com'
      },
      {
        hostname: 'daipresents.files.wordpress.com'
      },
    ]
  },
};

export default nextConfig;
