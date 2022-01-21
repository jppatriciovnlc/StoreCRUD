import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
`

export const Header = styled.div`
    width: 96%;
    height: 60px;
    margin-bottom: -30px;
    border-radius: 5px;
    background:  linear-gradient(90deg, rgba(38,126,233,1) 0%, rgba(61,151,239,1) 100%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    display: flex;
    align-items: center;
    padding-left: 20px;

    font-family: Roboto;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ffffff;
    z-index: 2;
    
`

export const TableContainer = styled.div`
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);    
    z-index: 1;
    border-radius: 10px;
`

export const Table = styled.table`
    width: calc(100% - 40px);
    font-family: Roboto;
    margin: 20px;
    margin-top: 70px;
`

export const THead = styled.thead`

`

export const TBody = styled.tbody`
    width: 100%;
    
`

export const TR = styled.tr`
    
    width: 100%;
    
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
    
`