module.exports = {
    siteUrl: 'https://oms-tech-blog.netlify.app/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            {
                userAgent: '*',
                disallow: ['/404'],
            },
        ],
    },
};
