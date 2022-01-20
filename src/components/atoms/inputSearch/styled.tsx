import styled from 'styled-components';

export const Container = styled.div`

`

export const Input = styled.input`
    height: 30px;
    width: 120px;
    background-color: transparent;
    border: solid 1px var(--Color9);
    border-radius: 5px;
    padding-left: 10px;
    font-family: Roboto;
    font-size: 0.75rem;

    &:focus{
        outline: none;
    }
`