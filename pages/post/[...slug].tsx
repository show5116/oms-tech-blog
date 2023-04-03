import { getAllPost, getPost } from 'utils/mdxUtils';

import Seo from 'components/layout/Seo';
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
}

const Post = ({ mdxSource, frontMatter, content }: IProps) => {
    const { title, description, thumbnail, tags } = frontMatter;
    return (
        <>
            <Seo title={title} description={description} keywords={tags} thumbnail={thumbnail} />
            <Toc content={content} />
            <MDXProvider components={components}>
                <PostTemplate mdxSource={mdxSource} frontMatter={frontMatter} content={content} />
            </MDXProvider>
        </>
    );
};

export const getStaticProps = async ({ params }) => {
    const { mdxSource, data, content } = await getPost(params.slug);
    return {
        props: {
            mdxSource,
            frontMatter: data,
            content,
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
