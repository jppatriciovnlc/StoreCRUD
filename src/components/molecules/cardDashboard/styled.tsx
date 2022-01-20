import styled from 'styled-components';

export const Container = styled.div`    
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    min-width: calc(255px - 20px);      
    height: calc(130px - 20px);
    background-color: var(--Color10);
    padding: 10px;
    position: relative;    

    @media (min-width:320px) {       
       width: 100%;
       margin-bottom: 40px;
    }

    @media (min-width:480px) {          
    }

    @media (min-width:600px) { 
    }

    @media (min-width:801px) {         
        width: 40%;             
    }

    @media (min-width:1025px) { 
        width: 30%;
        max-width: 250px;        
    }

    @media (min-width:1281px) { 
       
    }


`

export const ValuesContainer = styled.div`    
    height: fit-content;
    position: absolute;
    right: 10px;
    top: 10px;
`

export const Title1 = styled.p`
    font-family: Roboto;
    font-weight: 400;
    color: var(--Color9);
    font-size: 0.8rem;
    text-align: right;
`

export const Title2 = styled.p`
    font-family: Roboto;
    font-weight: 600;
    color: var(--Color12);
    font-size: 1.4rem;
    text-align: right;
    padding-top: 5px;
`

export const ExtraContainer = styled.div`    
    height: fit-content;
    position: absolute;
    left: 10px;
    bottom: 10px;

    font-family: Roboto;
    font-weight: 600;
    color: var(--Color3);
    font-size: 0.8rem;
`