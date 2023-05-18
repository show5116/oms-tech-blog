import { NextSeo } from 'next-seo';
import SamplePosts from 'components/organisms/SamplePosts';
import Tags from 'components/organisms/Tags';
import * as S from 'styles/pages/index.style';
import { IPost, ITag } from 'types';

import { getAllPost } from 'utils/mdxUtils';
import { useEffect, useState } from 'react';

interface IProps {
    posts: IPost[];
    tags: ITag[];
    tagNames: string;
}

const Home = ({ posts, tags, tagNames }: IProps) => {
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

export const getStaticProps = async () => {
    const posts = await getAllPost();

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
            posts,
            tags,
            tagNames,
        },
    };
};

export default Home;
