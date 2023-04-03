import * as S from './SamplePost.style';
import React from 'react';
import Tags from 'components/organisms/Tags';
import Link from 'next/link';
import Image from 'next/image';

import { IPost } from 'types';
import compareProps from '../../utils/compareProps';

interface IProps {
    post: IPost;
}

const SamplePost = React.memo(({ post }: IProps) => {
    return (
        <S.Container>
            {post.data.thumbnail && (
                <Link href={`/post/${post.slug.join('/')}`}>
                    <a>
                        <Image src={post.data.thumbnail} alt={post.data.title} width={800} height={400} />
                    </a>
                </Link>
            )}
            <Link href={`/post/${post.slug.join('/')}`}>
                <a>
                    <S.Title>{post.data.title}</S.Title>
                </a>
            </Link>
            <S.Description>{post.data.description}</S.Description>
            <Tags isCategory={false} tags={post.data.tags} />
            <S.Info>
                <span>{post.data.date}</span>
                <S.Separator>.</S.Separator>
                <span>{post.data.authorName}</span>
                <S.Separator>.</S.Separator>
                <span>{post.data.authorId}</span>
                <S.Separator>.</S.Separator>
            </S.Info>
        </S.Container>
    );
}, compareProps);
SamplePost.displayName = 'SamplePost';

export default SamplePost;
