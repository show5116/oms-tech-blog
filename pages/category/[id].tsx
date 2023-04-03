import * as S from 'styles/pages/category.style';

import Tags from 'components/organisms/Tags';
import SamplePosts from 'components/organisms/SamplePosts';
import { useEffect, useState } from 'react';

import { getAllCategories, getPostByCategory } from 'utils/mdxUtils';

import { IPost, ITag } from 'types';
import Seo from 'components/layout/Seo';

interface IProps {
    category: string;
    posts: IPost[];
    tags: ITag[];
}

const Category = ({ category, posts, tags }: IProps) => {
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
    const [currentTag, setCurrentTag] = useState('');
    const tagNames = tags.map((tag) => tag.name);

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
            <Seo
                title={category}
                description={`OMS의 ${category}에 대한 내용 공유 페이지입니다.`}
                keywords={tagNames}
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
    return {
        props: {
            category,
            posts,
            tags,
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
