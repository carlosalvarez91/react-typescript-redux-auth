import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import LoginScreen from '../screens/LoginScreen';


const PublicRoutes : React.FC = (props:any) => {
  
    return (
        <Routes>
            <Route path='/' element={<LoginScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path="*" element={<Navigate to="login"/>}/>
        </Routes>
    )
}

export default PublicRoutes;