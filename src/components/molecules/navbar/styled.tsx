import styled from 'styled-components';


export const Container = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const SectionRight = styled.div`
    

    @media (min-width:320px) { 
        display: none;
    }

    @media (min-width:600px) {  
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

export const GroupedButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 10px;
`

export const Icon = styled.div`
    margin-right: 10px;
    transition: 1s;
    color: var(--Color7);
    cursor: pointer;

    &:hover{
        transition: 1s;
        color: var(--Color11);
    }
`

export const MenuIcon = styled.div`   

    @media (min-width:320px) { 
        display: flex;
    }

    @media (min-width:600px) {  
        display: none;
    }


    transition: 1s;
    color: var(--Color7);
    cursor: pointer;
    font-size: 1.5rem;

    &:hover{
        transition: 1s;
        color: var(--Color11);
    }
`