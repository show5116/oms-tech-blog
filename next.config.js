/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
        removeConsole: {
            exclude: ['log']
        }
    },
}

module.exports = nextConfig
