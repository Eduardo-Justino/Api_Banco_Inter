import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard';


const Router =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;