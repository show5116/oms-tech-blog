/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    compiler: {
        styledComponents: true,
        removeConsole: {
            exclude: ['log'],
        },
    },
};

module.exports = nextConfig;
