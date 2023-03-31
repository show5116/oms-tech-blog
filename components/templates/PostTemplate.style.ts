import styled from 'styled-components';
import { color } from 'styles/color';

export const Container = styled.section`
    position: relative;
    max-width: 50rem;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bolder;
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

export const PostContainer = styled.div`
    display: block;
    margin-top: 2rem;
    table:not(pre table) {
        table-layout: auto;
        text-align: left;
        margin-bottom: 2rem;
        width: 100%;
        min-width: 40%;
        max-width: 100%;
        border: 1px solid ${color.gray};
        font-size: 1.5rem;
        overflow: auto;
        thead > tr {
            border-bottom: 1px solid ${({ theme }) => theme.fontColor.contentColor};
        }
        th,
        td {
            padding: 1rem;
        }
        td + td,
        th + th {
            border-left: 1px solid ${color.gray};
        }
    }
    p {
        font-size: 1rem;
        line-height: 2.5rem;
        word-wrap: break-word;
        color: ${({ theme }) => theme.fontColor.contentColor};
    }
    blockquote {
        background-color: ${({ theme }) => theme.blockquoteColor};
        border-left: 0.5rem solid ${({ theme }) => theme.accentColor};
        padding: 0.8rem;
        margin-bottom: 1rem;
        p {
            margin: 0rem;
        }
    }
    em {
        font-style: italic;
    }
    del {
        text-decoration: line-through;
    }
    code {
        background-color: ${({ theme }) => theme.codeBackground};
        color: ${({ theme }) => theme.codeColor};
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
        border-radius: 0.2rem;
        padding: 0 0.5rem;
        margin: 0 0.25rem;
        font-family: ‘Source Code Pro’, Roboto, GmarketSans, -apple-system, BlinkMacSystemFont, ‘Segoe UI’, Oxygen,
            Ubuntu, Cantarell, ‘Open Sans’, ‘Helvetica Neue’, sans-serif;
    }
    summary {
        cursor: pointer;
        transition: 0.15s ease-in-out;
        &:hover {
            opacity: 0.8;
        }
    }
    h1 {
        font-size: 3rem;
        font-weight: bolder;
        padding-bottom: 1rem;
        margin-bottom: 0.4rem;
        border-bottom: 1px solid black;
    }
    h2 {
        font-size: 2rem;
        font-weight: bolder;
        line-height: 4.1rem;
        padding-bottom: 0.6rem;
        margin-bottom: 0.4rem;
        border-bottom: 1px solid gray;
    }
    h3 {
        font-size: 1.8rem;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    h4 {
        font-size: 1.4rem;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
    a {
        font-weight: bold;
        transition: 0.15s ease-in-out;
        &:hover {
            opacity: 0.8;
        }
        .underline {
            background: ${({ theme }) => `linear-gradient(transparent 70%, ${theme.headerColor} 0)`};
        }
        &[download] {
            background: ${({ theme }) => `linear-gradient(transparent 70%, ${theme.headerColor} 0)`};
        }
    }
    ul,
    ol {
        margin: 2rem 0rem;
        li {
            margin: 0.8rem 0rem;
            font-size: 1.4rem;
            padding-left: 1.5rem;
            position: relative;
            line-height: 2.5rem;
            p:first-child {
                font-size: 1.4rem;
            }
        }
    }
    ul {
        & > li {
            &::before {
                content: ' ';
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 0.25rem;
                background-color: #bcbcbf99;
                position: absolute;
                top: 1rem;
                left: 0.25rem;
                margin: auto 0;
            }
        }
    }
    ol {
        & > li {
            list-style-type: decimal;
            &::marker {
                font-size: 1.4rem;
            }
        }
    }
    hr {
        margin-bottom: 1.8rem;
    }
`;
