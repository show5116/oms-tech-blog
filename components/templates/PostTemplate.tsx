import * as S from './PostTemplate.style';

import Tags from 'components/organisms/Tags';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { IFrontMatter } from 'types';
import Image from 'next/image';

interface IProps {
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: IFrontMatter;
    content: string;
}

const PostTemplate = ({ mdxSource, frontMatter, content }: IProps) => {
    const { title, date, authorId, authorName, tags, thumbnail } = frontMatter;

    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Info>
                <span>{date}</span>
                <S.Separator>ꞏ</S.Separator>
                <span>{authorName}</span>
                <S.Separator>ꞏ</S.Separator>
                <span>{authorId}</span>
            </S.Info>
            <Tags isCategory={false} tags={tags} />
            {thumbnail && <Image src={thumbnail} alt={title} width={800} height={400} />}
            <S.PostContainer>
                <MDXRemote {...mdxSource} />
            </S.PostContainer>
        </S.Container>
    );
};

export default PostTemplate;
