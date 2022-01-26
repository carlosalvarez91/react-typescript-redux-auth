import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import DashboardScreen from '../screens/DashboardScreen';
import PrivateLayout from '../screens/PrivateLayout';
import SettingsScreen from '../screens/SettingsScreen';


const PrivateRoutes: React.FC = (props:any) => {
  
    return (
        <PrivateLayout {...props}>
            <Routes>
                <Route path='/' element={<DashboardScreen/>}/>
                <Route path='/dashboard' element={<DashboardScreen/>}/>
                <Route path='/settings' element={<SettingsScreen/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </PrivateLayout>
    )
}

export default PrivateRoutes;