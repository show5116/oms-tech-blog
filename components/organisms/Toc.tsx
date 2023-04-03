import React from 'react';
import useTocObserve from 'hooks/useTocObserve';
import { useState } from 'react';
import * as S from './Toc.style';

export interface IItemProps {
    depth: number;
    isSelected: boolean;
}

interface IProps {
    content: string;
}

const Toc = React.memo(({ content }: IProps) => {
    const [activeId, setActiveId] = useState('');
    const titles = content.split('\n').filter((t) => t.startsWith('#') && !t.includes('include'));
    const result = titles.map((item) => {
        const depth = item.match(/#/g)?.length;
        return {
            title: item.substring(item.indexOf(' ')).trim().replace('\\', '').replace('(', '').replace(')', ''),
            depth,
        };
    });
    const convertTextToId = (title: string) => {
        return title.toLowerCase().replace(/[?.]/gi, '').replace(/\s/g, '-');
    };

    const onValid = (title: string) => {
        return convertTextToId(title) === activeId;
    };

    const onClick = (item) => {
        setActiveId((prev) => convertTextToId(item.title));
    };

    return (
        <S.Container>
            <ul>
                {result.map((item, index) => (
                    <a key={item.title + index} href={`#${convertTextToId(item.title)}`} onClick={() => onClick(item)}>
                        <S.Item isSelected={onValid(item.title)} depth={item.depth ?? 0}>
                            {item.title}
                        </S.Item>
                    </a>
                ))}
            </ul>
        </S.Container>
    );
});
Toc.displayName = 'Toc';

export default Toc;
