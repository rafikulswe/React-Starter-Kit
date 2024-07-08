import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicTheme } from '../theme/Public';
import LandingPage from '../modules/LandingPage';
import AuthRoutes from '../modules/Auth/AuthRoutes';

const VisitorRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<PublicTheme.Common.AuthLayout />}>
                <Route path={`/auth/*`} element={<AuthRoutes />} />
            </Route>
            <Route element={<PublicTheme.Common.MainLayout />}>
                <Route path={`/`} element={<LandingPage />} />
            </Route>
        </Routes>
    );
};

export default VisitorRoutes;
