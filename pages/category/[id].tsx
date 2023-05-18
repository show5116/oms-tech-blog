import * as S from 'styles/pages/category.style';

import Tags from 'components/organisms/Tags';
import SamplePosts from 'components/organisms/SamplePosts';
import { useEffect, useState } from 'react';

import { getAllCategories, getPostByCategory } from 'utils/mdxUtils';

import { IPost, ITag } from 'types';
import { NextSeo } from 'next-seo';

interface IProps {
    category: string;
    description: string;
    posts: IPost[];
    tags: ITag[];
    tagNames: string;
}

const Category = ({ category, description, posts, tags, tagNames }: IProps) => {
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const [currentTag, setCurrentTag] = useState('');

    useEffect(() => {
        const URLSearch = new URLSearchParams(location.search);
        const queryTag = URLSearch.get('tag');

        if (!queryTag || queryTag === 'All') {
            setFilteredPosts((prev) => [...posts]);
            setCurrentTag((prev) => 'All');
        } else {
            const filteredPosts = posts.filter((post) => post.data.tags.includes(queryTag));
            setFilteredPosts((prev) => [...filteredPosts]);
            setCurrentTag((prev) => queryTag);
        }
    }, [posts]);

    return (
        <>
            <NextSeo
                title={category + ' | OMS 기술블로그'}
                description={description}
                additionalMetaTags={[
                    {
                        name: 'keywords',
                        content: tagNames,
                    },
                ]}
            />
            <S.Container>
                <Tags tags={tags} isCategory={true} allLength={posts.length} currentTag={currentTag} />
                <SamplePosts posts={filteredPosts} />
            </S.Container>
        </>
    );
};

export const getStaticProps = async ({ params }) => {
    const category = params.id;
    const description = `OMS의 ${category}에 대한 내용 공유 페이지입니다.`;
    const posts = getPostByCategory(category);

    const tags: ITag[] = [];
    posts
        .map((post) => post.data.tags)
        .forEach((postTags) => {
            postTags.forEach((postTag) => {
                const tag = tags.find((tag) => tag.name === postTag);
                if (tag) {
                    tag.cnt++;
                } else {
                    tags.push({ name: postTag, cnt: 1 });
                }
            });
        });
    const tagNames = tags.map((tag) => tag.name).join(', ');

    return {
        props: {
            category,
            description,
            posts,
            tags,
            tagNames,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = getAllCategories().map((category) => {
        return {
            params: {
                id: category,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export default Category;
