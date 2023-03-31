import Tag from 'components/molecules/Tag';
import { ITag } from 'types';
import * as S from './Tags.style';

interface IProps {
    tags: ITag[] | string[];
    isCategory: boolean;
    allLength?: number;
    currentTag?: string;
}

const Tags = ({ tags, isCategory, allLength, currentTag }: IProps) => {
    if (isCategory) {
        return (
            <S.FixedTagsContainer>
                <Tag tag={{ name: 'All', cnt: allLength }} isCurrent={currentTag === 'All' || currentTag === ''} />
            </S.FixedTagsContainer>
        );
    }
    return (
        <S.TagsContainer>
            {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
            ))}
        </S.TagsContainer>
    );
};

export default Tags;
