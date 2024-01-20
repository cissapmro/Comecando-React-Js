import styled from 'styled-components';

export const Body = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background: gray;
`;
export const Head = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: pink;
    align-items: center;
    justify-content: center;
    height: 70px;
    margin-top: 0;
`;
export const Titulo = styled.a`
    font-size: 25px;
    color: red;
    cursor: pointer; 
`;
export const Bemvindo = styled.h1`
    color: ${props => `#${props.cor}`};
    font-size: ${props => props.tamanho}px;
`;
