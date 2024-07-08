import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginController from './components/Login/Login.controller';
import RegisterController from './components/Registration/Register.controller';
import LogoutController from './components/Logout/Logout.Controller';

const AuthRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={'/register'} element={<RegisterController />} />
            <Route path={'/login'} element={<LoginController />} />
            <Route path={'/logout'} element={<LogoutController />} />
        </Routes>
    )
}

export default AuthRoutes;