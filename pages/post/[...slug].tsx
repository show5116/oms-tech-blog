import { getAllPost, getPost } from 'utils/mdxUtils';

import { NextSeo } from 'next-seo';
import Toc from 'components/organisms/Toc';
import PostTemplate from 'components/templates/PostTemplate';
import Code from 'components/mdxprovider/Code';
import ResponsiveImage from 'components/mdxprovider/ResponsiveImage';
import A from 'components/mdxprovider/A';
import { MDXProvider } from '@mdx-js/react';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IFrontMatter } from 'types';
import Strong from 'components/mdxprovider/Strong';

const components = {
    code: Code,
    img: ResponsiveImage,
    a: A,
    strong: Strong,
};

interface IProps {
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: IFrontMatter;
    content: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tagNames: string;
}

const Post = ({ mdxSource, frontMatter, content, title, description, thumbnailUrl, tagNames }: IProps) => {
    return (
        <>
            <NextSeo
                title={title + ' | OMS 기술블로그'}
                description={description}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: tagNames,
                    },
                ]}
                openGraph={{
                    images: [{ url: thumbnailUrl }],
                }}
            />
            <Toc content={content} />
            <MDXProvider components={components}>
                <PostTemplate mdxSource={mdxSource} frontMatter={frontMatter} content={content} />
            </MDXProvider>
        </>
    );
};

export const getStaticProps = async ({ params }) => {
    const { mdxSource, data, content } = await getPost(params.slug);
    const { title, description, thumbnail, tags } = data;
    const thumbnailUrl = 'https://oms-tech-blog.netlify.app' + thumbnail;
    const tagNames = tags.map((tag) => tag.name).join(', ');

    return {
        props: {
            mdxSource,
            frontMatter: data,
            content,
            title,
            description,
            thumbnailUrl,
            tagNames,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = getAllPost().map((post) => {
        return {
            params: {
                slug: post.slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export default Post;
