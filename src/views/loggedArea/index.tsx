import * as S from './styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar } from '../../components/molecules';
import Dashboard from './dashboard';

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
                </Routes>
            
            </S.Section1>
        </S.Container>
    )

}

export default LoggedArea