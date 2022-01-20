import styled from 'styled-components';

export const Container = styled.div`

`
export const OuterBar = styled.div`
    width: 100%;
    max-width: 150px;
    height: 5px;
    background-color: var(--Color5);
    border-radius: 5px;
`

export const InnerBar = styled.div<{width?, color?}>`
    width: ${props => props.width};
    max-width: 150px;
    height: 5px;
    background-color: ${props => props.color};
    border-radius: 5px 0 0 5px;
`