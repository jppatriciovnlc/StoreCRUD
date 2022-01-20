import styled from 'styled-components'

export const Container = styled.div`
    font-family: Mulish;
    font-weight: 600;
    
`

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
`

export const TableContainer = styled.div`
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    min-width: calc(255px - 20px);
    width: 60%;
    min-height: calc(130px - 20px);
    height: fit-content;
    background-color: var(--Color10);
    padding: 15px;
    
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Block1 = styled.div`

`

export const IconMore = styled.div`
    transition: 1s;
    color: var(--Color7);
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover{
        transition: 1s;
        color: var(--Color11);
    }
`

export const IconCheck = styled.div`
    transition: 1s;
    color: var(--Color1);
    font-size: 1rem;
    font-weight: 600;
    
`

export const Title = styled.div`
    font-family: Roboto;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--Color6);
`

export const SubTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    font-family: Roboto;
    font-size: 0.8rem;
    color: var(--Color7);
`