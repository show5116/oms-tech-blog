import * as S from './SamplePosts.style';
import React from 'react';

import { useEffect, useState } from 'react';
import { IPost } from 'types';
import SamplePost from 'components/molecules/SamplePost';
import useIntersect from 'hooks/useIntersect';
import compareProps from '../../utils/compareProps';

interface IProps {
    posts: IPost[];
}

const loadCount = 10;

const SamplePosts = React.memo(({ posts }: IProps) => {
    const [currentCount, setCurrentCount] = useState(0);
    const [_, setRef] = useIntersect((entry, observer) => {
        observer.unobserve(entry.target);
        updateCount();
    }, {});

    useEffect(() => {
        if (posts.length < loadCount) {
            setCurrentCount((prev) => posts.length);
        } else {
            setCurrentCount((prev) => loadCount);
        }
    }, [posts.length]);

    const updateCount = () => {
        const maxCount = posts.length;
        if (currentCount === maxCount) {
            return;
        }
        if (currentCount / loadCount < Math.floor(maxCount / loadCount)) {
            setCurrentCount((prev) => prev + loadCount);
        } else {
            setCurrentCount((prev) => maxCount);
        }
    };

    return (
        <S.Container>
            {Array(currentCount)
                .fill(null)
                .map(
                    (value, index) => posts[index] && <SamplePost key={posts[index].data.title} post={posts[index]} />
                )}
            <p ref={setRef}></p>
            <br />
            <br />
        </S.Container>
    );
}, compareProps);
SamplePosts.displayName = 'SamplePosts';

export default SamplePosts;
