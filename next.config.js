/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['images.unsplash.com'],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '10mb',
        },
    },
}

module.exports = nextConfig
