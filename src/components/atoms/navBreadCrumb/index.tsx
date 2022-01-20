import * as S from './styled';
import { MdHome } from 'react-icons/md'

const NavBreadCrumb = (props) => {

    return(
        <S.Container>
            <S.Row1>
                <S.Title1><MdHome/></S.Title1>
                <S.Title1>/</S.Title1>
                <S.Title1>{props.page}</S.Title1>
                   
            </S.Row1>
            <S.Row2>{props.page}</S.Row2>
        </S.Container>
    )
}

export default NavBreadCrumb;