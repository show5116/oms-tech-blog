import * as S from './Tags.style';
import React from 'react';

import Tag from 'components/molecules/Tag';
import { ITag } from 'types';

import compareProps from '../../utils/compareProps';

interface IProps {
    tags: ITag[] | string[];
    isCategory: boolean;
    allLength?: number;
    currentTag?: string;
}

const Tags = React.memo(({ tags, isCategory, allLength, currentTag }: IProps) => {
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
}, compareProps);
Tags.displayName = 'Tags';

export default Tags;
