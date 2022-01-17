import  React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const LoggedArea = React.lazy(() => import('./views/loggedArea'))

const AppRoutes = (props) => {
    return(
        <Suspense fallback={<p>loading...</p>}>
            <BrowserRouter>
                <Routes>
                <Route  
                    path="/*" 
                    element={<LoggedArea {...props}/>}
                /> 
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default AppRoutes