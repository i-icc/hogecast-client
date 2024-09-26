/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['storage.googleapis.com'],
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
