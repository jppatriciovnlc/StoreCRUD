import { useState } from 'react';
import { InputSearch, NavBreadCrumb } from '../../atoms';
import * as S from './styled';
import { MdSettings, MdNotifications, MdAccountCircle, MdMenu } from 'react-icons/md'
import { useAppSelector } from '../../../hooks/reduxHooks';

const Navbar = (props) => {

    const [searchData, setSearchData] =useState('')
    const { page } = useAppSelector((state) => state.navigation)

    console.log(searchData)

    return(
        <S.Container>
            <NavBreadCrumb page={page}/>
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