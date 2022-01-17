import styled from 'styled-components';
import image from '../../../assets/logo001.png';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Image = styled.div`
    width: 35px;
    height: 35px;
    background-image: url(${image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const Title = styled.div`
    font-family: Roboto;
    color: var(--Color5);
    font-weight: 500;
    font-size: 0.75rem;
`