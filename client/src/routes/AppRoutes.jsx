import { Route,Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Notfound from "../pages/Notfound"

export default function AppRoutes(){

    return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="*" element={<Notfound />} />
    </Routes>
   
    )
    
}
