const nextPWA = require('next-pwa');

const withPWA = nextPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
    images: {
        domains: ['storage.googleapis.com'],
        unoptimized: true,
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
module.exports = withPWA(nextConfig);