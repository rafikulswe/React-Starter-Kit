import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom';

const AdminRoutes = React.lazy(() => import('./AdminRoutes'));
const VisitorRoutes = React.lazy(() => import('./VisitorRoutes'));

const AppRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route path={"/admin/*"} element={<AdminRoutes />} />
            <Route path={"/*"} element={<VisitorRoutes />} />
        </Routes>
    );
}

export default AppRoutes;