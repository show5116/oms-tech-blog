export const siteTitle = 'OMS 개발블로그';
export const siteUrl = 'https://oms-tech-blog.netlify.app';
export const defaultImageUrl = siteUrl + '/images/default.png';

export default {
    title: siteTitle,
    canonical: siteUrl,
    description: `OMS-Tech-Blog는 OMS 프로젝트에서 필요한 기술정보를 공유하는 블로그입니다.`,
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: siteUrl,
        siteName: siteTitle,
        description: `OMS-Tech-Blog는 OMS 프로젝트에서 필요한 기술정보를 공유하는 블로그입니다.`,
        images: [
            {
                url: defaultImageUrl,
                width: 1200,
                height: 630,
                alt: `OMS Tech Blog`,
            },
        ],
    },
};
