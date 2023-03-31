import Seo from 'components/layout/Seo';
import SamplePosts from 'components/organisms/SamplePosts';
import Tags from 'components/organisms/Tags';
import * as S from 'styles/pages/index.style';
import { IPost, ITag } from 'types';

import { getAllPost } from 'utils/mdxUtils';
import { useEffect, useState } from 'react';

interface IProps {
    posts: IPost[];
    tags: ITag[];
}

const Home = ({ posts, tags }: IProps) => {
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
            <Seo description={'OMS의 기술 블로그입니다.'} keywords={tagNames} />
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
    return {
        props: {
            posts,
            tags,
        },
    };
};

export default Home;
