import styled from 'styled-components';
import { color } from 'styles/color';

export const Container = styled.article`
    width: 800px;
    border-bottom: 1px solid ${color.gray};
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    img {
        margin-bottom: 10px;
    }
`;

export const Title = styled.h2`
    display: inline-block;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    &:hover {
        opacity: 0.8;
    }
`;

export const Description = styled.p`
    margin-bottom: 0.5rem;
`;

export const Info = styled.div`
    margin-top: 0.875rem;
    margin-bottom: 0.875rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${color.gray};
`;

export const Separator = styled.div`
    margin: 0 0.5rem;
`;
