import { CardIcon } from '../../atoms';
import * as S from './styled';

const CardDashboard = (props) => {    

    return(
        <S.Container>
            <CardIcon
                color1={props.color1}
                color2={props.color2}
                icon={props.icon}
            />
            <S.ValuesContainer>
                <S.Title1>{props.title}</S.Title1>
                <S.Title2>{props.value}</S.Title2>
            </S.ValuesContainer>
            <S.ExtraContainer>{props.extra}</S.ExtraContainer>
        </S.Container>
    )
}

export default CardDashboard;