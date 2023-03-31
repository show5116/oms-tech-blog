import styled from 'styled-components';
import { IItemProps } from './Toc';

export const Container = styled.div`
    position: fixed;
    right: 0;
    max-width: 24rem;
    margin-top: 20vh;
    margin-right: 0.5rem;
    ul {
        display: flex;
        flex-direction: column;
    }
`;

export const Item = styled.li<IItemProps>`
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem;
    padding-left: ${({ depth }) => (depth ? `${depth}rem` : '0rem')};
    background-color: ${({ isSelected, theme }) => isSelected && theme.headerColor};
    border-radius: 0.5rem;
    transform: ${({ isSelected }) => isSelected && 'scale(1.05)'};
    transform-origin: left;
    transition: all 0.3s;
`;
