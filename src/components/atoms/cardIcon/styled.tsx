import styled from 'styled-components';

export const Container = styled.div<{color1:string, color2:string}>`

    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-right: 100px;
    margin-top: -30px;

    background: linear-gradient(209deg, ${props => props.color1} 0%, ${props => props.color2} 100%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    color: var(--Color10);

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`