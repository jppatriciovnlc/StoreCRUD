import * as S from './styled';
import { Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar } from '../../components/molecules';
import React from 'react';


const Dashboard = React.lazy(() => import('./dashboard'));
const Products = React.lazy(() => import('./products'));

const LoggedArea = (props) => {

    return(
        <S.Container>            
            <Sidebar/>
            <S.Section1>
                <Navbar/>                
                <Routes>
                    <Route  
                        path="/" 
                        element={<Dashboard {...props}/>}
                    /> 
                    <Route  
                        path="/dashboard" 
                        element={<Dashboard {...props}/>}
                    /> 
                    <Route  
                        path="/produtos" 
                        element={<Products {...props}/>}
                    /> 
                </Routes>
            
            </S.Section1>
        </S.Container>
    )

}

export default LoggedArea