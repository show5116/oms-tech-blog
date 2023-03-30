import styled from 'styled-components';

export const Container = styled.header<{ isScrollDown: boolean }>`
    width: 100%;
    height: ${(props) => (props.isScrollDown ? '40px' : '50px')};
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: ${(props) => (props.isScrollDown ? 'none' : props.theme.headerColor)};
    font-size: ${(props) => (props.isScrollDown ? '1rem' : '1.5rem')};
    transition: 0.3s ease-in-out;
    $:hover {
        background-color: ${(props) => props.theme.headerColor};
    }
`;

export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 10px;
    max-width: 80rem;
`;

export const Logo = styled.a`
    font-weight: bolder;
    cursor: pointer;
    $:hover {
        opacity: 0.7;
    }
`;

export const RightMenu = styled.div`
    display: flex;
    gap: 10px;
    svg,
    a {
        cursor: pointer;
    }
    svg:hover,
    a:hover {
        opacity: 0.7;
    }
`;
