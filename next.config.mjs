/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
          },
        ],
      },
};

export default nextConfig;
