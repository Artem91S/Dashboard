import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Dashboard } from '../pages/dashboard'
;
export function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}