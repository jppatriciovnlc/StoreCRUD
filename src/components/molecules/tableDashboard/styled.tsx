import styled from 'styled-components';

export const Container = styled.div`
margin-top: 30px;

`

export const Table = styled.table`
    
    width: 100%;
    font-family: Roboto;
`

export const THead = styled.thead`

`

export const TBody = styled.tbody`

`

export const TR = styled.tr`

`

export const TH = styled.th`
    text-align: left;
    font-weight: 600;
    color: var(--Color9);
    font-size: 0.6rem;
    text-transform: uppercase;

    height: 20px;
    border-bottom: solid 1px var(--Color9);
`

export const TD = styled.td<{padding?, width?}>`
    height: 40px;
    align-items: center;
    font-size: 0.7rem;
    color: var(--Color6);
    vertical-align: middle;
    border-bottom: solid 1px var(--Color9);
    padding-left: ${props => props.padding? props.padding : '0'}
`