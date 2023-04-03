import styled from 'styled-components';
import { color } from 'styles/color';

export const Strong = styled.strong`
    font-weight: bold;
    color: ${color.pink};
    background-color: ${({ theme }) => theme.emphasisColor};
    &::before {
        content: "'";
    }
    &::after {
        content: "'";
    }
`;

export const Caution = styled.strong`
    font-size: 1.4rem;
    background-color: ${color.lightGray};
`;

export const CautionIcon = styled.span`
    font-size: 1.2rem;
    margin-right: 1rem;
`;

export const Tip = styled.strong``;

export const TipIcon = styled.span``;
