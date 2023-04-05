import styled from 'styled-components';
import { color } from 'styles/color';

export const Container = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    background-color: #2f3135;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px;
    margin: 2rem 0;
`;

export const CodeInfoBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1.5rem;
    user-select: none;
    background-color: #15151599;
    span {
        font-size: 1rem;
        text-transform: uppercase;
        color: #ff8a64;
        font-family: 'Source Code Pro', Roboto, GmarketSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'sans-serif';
    }
    div:last-child {
        display: flex;
        gap: 0.3rem;
        span {
            width: 1rem;
            height: 1rem;
            border-radius: 0.5rem;
            background-color: #ffbd2d;
            &:first-child {
                background-color: #fe5f57;
            }
            &last-child {
                background-color: #29c941;
            }
        }
    }
`;

export const TableWrapper = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    padding: 1rem 0.5rem;
    &::-webkit-scrollbar {
        height: 1.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #2f3542;
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
        background-color: gray;
        border-radius: 1rem;
    }
`;

export const Table = styled.table`
    display: table;
    width: 100%;
    vertical-align: middle;
`;

export const LineNo = styled.td`
    user-select: none;
    color: #4a545c;
    text-align: center;
    transition: all 0.05s ease;
    padding-right: 0.5rem;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    & + td {
        border-top-right-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        padding-right: 1rem;
    }
`;

export const Line = styled.tr`
    transition: all 0.05s ease;
    line-height: 1.5;
    td {
        font-size: 1rem;
    }
    td:last-child {
        font-family: monospace, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
            'Open Sans', 'Helvetica Neue', sans-serif;
    }
    &:hover {
        background-color: #20202099;
        $(LineNo) {
            color: white;
        }
    }
`;

export const Method = styled.strong`
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
