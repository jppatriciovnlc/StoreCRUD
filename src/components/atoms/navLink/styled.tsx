import styled from 'styled-components';

export const Container = styled.div<{selected: boolean}>`    
    border-radius: 5px;
    background: ${props => props.selected? 'linear-gradient(90deg, rgba(38,126,233,1) 0%, rgba(61,151,239,1) 100%)' : 'transparent'};
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
`

export const StyledLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--Color8);
    font-family: Roboto;
    text-decoration: none;
    font-size: 0.8rem;
`

export const Icon = styled.div`
    width: 35px;
    height: 35px;    
    color: var(--Color8);
    font-size: 1.0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
`