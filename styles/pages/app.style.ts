import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-top: 5rem;
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.backgroundColor};
`;
