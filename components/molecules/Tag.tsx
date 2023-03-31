import * as S from './Tag.style';

import { useRouter } from 'next/router';

import { ITag } from 'types';

interface IProps {
    tag: ITag | string;
    isCurrent?: boolean;
}

const Tag = ({ tag, isCurrent = false }: IProps) => {
    const router = useRouter();

    const onClickTag = () => {
        const pathname = window.location.pathname;
        let newPath: string;
        if (pathname.includes('back-end')) {
            newPath = '/category/back-end';
        } else if (pathname.includes('front-end')) {
            newPath = '/category/front-end';
        } else {
            newPath = pathname;
        }

        router.push({
            pathname: newPath,
            query: {
                tag: typeof tag === 'string' ? tag : tag.name,
            },
        });
    };

    const renderTagContent = () => {
        if (typeof tag === 'string') {
            return tag;
        } else {
            return `${tag.name}(${tag.cnt})`;
        }
    };

    return (
        <S.Container isCurrent={isCurrent} onClick={onClickTag}>
            {renderTagContent()}
        </S.Container>
    );
};

export default Tag;
