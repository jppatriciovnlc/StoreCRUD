import { useState } from 'react';
import { InputSearch, NavBreadCrumb } from '../../atoms';
import * as S from './styled';
import { MdSettings, MdNotifications, MdAccountCircle, MdMenu } from 'react-icons/md'

const Navbar = (props) => {

    const [searchData, setSearchData] =useState('')
    console.log(searchData)

    return(
        <S.Container>
            <NavBreadCrumb/>
            <S.SectionRight>
                <InputSearch handleOnChange={setSearchData}/>
                <S.GroupedButtons>
                    <S.Icon>
                        <MdAccountCircle/>
                    </S.Icon>
                    <S.Icon>
                        <MdSettings/>
                    </S.Icon>
                    <S.Icon>
                        <MdNotifications/>
                    </S.Icon>
                </S.GroupedButtons>
            </S.SectionRight>
            <S.MenuIcon>
                <MdMenu/>
            </S.MenuIcon>
        </S.Container>
    )

}
export default Navbar