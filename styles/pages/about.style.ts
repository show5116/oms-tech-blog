import styled from 'styled-components';
import { color } from 'styles/color';

export const Container = styled.div`
    max-width: 50rem;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-weight: bolder;
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

export const Content = styled.section`
    font-size: 1rem;
    line-height: 2.5rem;
    word-wrap: break-word;
`;

export const Footer = styled.footer`
    background-color: ${color.lightGray};
    color: ${color.black};
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    padding-top: 15px;
    text-align: center;
`;

export const WriteMd = styled.a`
    margin: 20px auto 0 auto;
    display: block;
    font-size: 1.5rem;
    font-weight: bolder;
    width: 170px;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: ${color.white};
    cursor: pointer;
    border: 2px solid ${(props) => (props.theme.name === 'whiteTheme' ? color.charcoal : color.white)};
    color: ${color.charcoal};
    tarnsition: 0.15s ease-in-out;
    &:hover {
        background-color: ${color.charcoal};
        color: ${color.white};
    }
`;
