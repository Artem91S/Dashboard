import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Dashboard } from '../Pages/Dashboard'
;
export function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}