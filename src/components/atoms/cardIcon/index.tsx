import * as S from './styled';

const CardIcon = (props) => {    

    console.log(props)

    return(
        <S.Container
            color1={props.color1 ? props.color1 : '#000000'}
            color2={props.color2 ? props.color2 : '#ffffff'}
        >
            {props.icon}
        </S.Container>
    )
}

export default CardIcon;