import * as S from './styled';


const Navlink = (props) => {

    


    let linkTo = props.link
    return(
        <S.Container selected={props.selected} onClick={props.handleClick}>
            <S.StyledLink>    
                <S.Icon>
                    {props.icon}
                </S.Icon>
                {props.title}
            </S.StyledLink>
        </S.Container>
    )
}

export default Navlink;