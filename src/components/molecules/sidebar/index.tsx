import { Logo, HorizontalLine, Navlink } from '../../atoms';
import * as S from './styled';
import { MdDashboard, MdTableView, MdLogout,MdOutlineAssignment } from 'react-icons/md'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { setPage } from '../../../redux/actions/navigation';

const Sidebar = (props) => {

    const [selected, setSelected] = useState('Dashboard')

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { page } = useAppSelector((state) => state.navigation)

    const handleClick = (item:string, link: string) => {
        setSelected(item)
        dispatch(setPage(item))
        navigate(link)
    }

    
    console.log(page)
    

    return(
        <S.Container>
            <Logo/>
            <HorizontalLine/>
            <Navlink
                handleClick={() => handleClick('Dashboard', '/dashboard')}
                selected ={selected === 'Dashboard'? true: false}
                icon={<MdDashboard/>}
                title='Dashboard'
            />
            <Navlink
                handleClick={() => handleClick('Produtos', '/produtos')}
                selected ={selected === 'Produtos'? true: false}
                icon={<MdTableView/>}
                title='Produtos'
            />
            <Navlink
                handleClick={() => handleClick('Categorias', '/categorias')}
                selected ={selected === 'Categorias'? true: false}
                icon={<MdOutlineAssignment/>}
                title='Categorias'
            />
            <Navlink
                handleClick={() => handleClick('Dashboard', '/Dashboard')}
                selected ={false}
                icon={<MdLogout/>}
                title='Sair'
            />
        </S.Container>
    )
}

export default Sidebar