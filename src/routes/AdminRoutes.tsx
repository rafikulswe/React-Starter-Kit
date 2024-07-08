import { FC } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AdminTheme } from '../theme/Admin';
import Dashboard from '../modules/Dashboard/Dashboard';
import ExampleListController from '../modules/Example/List/ExampleList.controller';
import ProtectedAdminRoute from './NavigationRoute/ProtectedAdminRoute';

const AdminRoutes: FC<any> = () => {
    return (
        <Routes>
            <Route element={<ProtectedAdminRoute />}>
                <Route element={<AdminTheme.Common.MainLayout />} >
                    <Route path={`/dashboard`} element={<Dashboard />} />
                    <Route path={`/example`} element={<ExampleListController />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AdminRoutes;