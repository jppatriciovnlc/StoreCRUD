import styled from 'styled-components';

export const Container = styled.div`    
    

    @media (min-width:320px) {      
        display: none; 
    }

    @media (min-width:480px) {  
               
    }

    @media (min-width:600px) { 
        display: block;
        border-radius: 10px;
        min-width: calc(200px - 30px);
        padding: 15px;
        background: linear-gradient(180deg, var(--Color11) 0%, var(--Color12) 100%);
    }

    
`