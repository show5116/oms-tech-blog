import { getAllPost, getPost } from 'utils/mdxUtils';

import { NextSeo } from 'next-seo';
import Toc from 'components/organisms/Toc';
import PostTemplate from 'components/templates/PostTemplate';
import Code from 'components/mdxprovider/Code';
import ResponsiveImage from 'components/mdxprovider/ResponsiveImage';
import A from 'components/mdxprovider/A';
import Strong from 'components/mdxprovider/Strong';
import { MDXProvider } from '@mdx-js/react';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { IFrontMatter } from 'types';
import { defaultImageUrl, siteTitle, siteUrl } from '../../seo.config';

const components = {
    code: Code,
    img: ResponsiveImage,
    a: A,
    strong: Strong,
};

interface IProps {
    slug: string;
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: IFrontMatter;
    content: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tagNames: string;
}

const Post = ({ slug, mdxSource, frontMatter, content, title, description, thumbnailUrl, tagNames }: IProps) => {
    return (
        <>
            <NextSeo
                title={title + ' | ' + siteTitle}
                description={description}
                canonical={siteUrl + '/post/' + slug}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: tagNames,
                    },
                ]}
                openGraph={{
                    title: title + ' | ' + siteTitle,
                    description: description,
                    url: siteUrl + '/post/' + slug,
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
    const slug = params.slug.join('/');
    const { mdxSource, data, content } = await getPost(params.slug);
    const { title, description, thumbnail, tags } = data;
    const thumbnailUrl = thumbnail ? siteUrl + thumbnail : defaultImageUrl;
    const tagNames = tags.map((tag) => tag.name).join(', ');

    return {
        props: {
            slug,
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
