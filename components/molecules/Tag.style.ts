import styled from 'styled-components';
import { color } from 'styles/color';

export const Container = styled.button<{ isCurrent: boolean }>`
    display: inline-block;
    font-size: 1rem;
    border: 1px solid ${(props) => (props.isCurrent ? props.theme.headerColor : color.lightGray)};
    padding: 4px;
    border-radius: 10px;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px;
    transition: 0.3s ease-in-out;
    background-color: ${(props) => (props.isCurrent ? props.theme.headerColor : color.whiteSmoke)};
    &:hover {
        background-color: ${(props) => props.theme.headerColor};
        border: 1px solid ${(props) => props.theme.headerColor};
    }
`;
