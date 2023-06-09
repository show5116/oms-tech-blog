import * as S from 'styles/pages/about.style';

import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { siteTitle, siteUrl } from '../seo.config';

const About = ({ title }) => {
    return (
        <>
            <NextSeo
                title={title + ' | ' + siteTitle}
                canonical={siteUrl + '/about'}
                openGraph={{ title: title + ' | ' + siteTitle, url: siteUrl + '/about' }}
            />
            <S.Container>
                <S.Title>About OMS-Tech-Blog</S.Title>
                <S.Content>
                    OMS-Tech-Blog는 OMS프로젝트에서 사용된 기술이나 코트 스타일,
                    <br />
                    혹은 공통 코드에 대한 정보를 공유하자는 취지에서 제작되었습니다.
                    <br />
                    프로젝트는 Next js에 Remote Mdx기술로 구성되어 있습니다.
                    <br />
                    2023/04/01부로 소스코드를 git으로 옮겼으며,
                    <br />
                    글 작성법은 아래 링크를 보고 md파일 문법으로 mdx 파일로 작성해주시고,
                    <br />
                    저에게 파일을 주시거나 git을 통해 pull request로 올려주시면 됩니다.
                    <Link href="/post/front-end/markdown">
                        <S.WriteMd>md파일 작성법</S.WriteMd>
                    </Link>
                </S.Content>
            </S.Container>
            <S.Footer>show5116</S.Footer>
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            title: 'About',
        },
    };
};

export default About;
