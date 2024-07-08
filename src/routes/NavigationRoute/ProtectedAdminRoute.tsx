import { FC, useEffect, useContext } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth/auth.context";

const ProtectedAdminRoute: FC<any> = ({ layout: Layout, component: Component, permission, ...restProps }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthReady, isAuthenticated, isAdmin } = useContext(AuthContext);

    const hasPermission = false;

    useEffect(() => {
        if (isAuthReady === true && isAuthenticated === false && isAdmin === false) {
            const redirectUrl = encodeURI(`${location.pathname}${location.search}`);
            localStorage.setItem("redirectUrl", redirectUrl);
            navigate(`/auth/login`);
        }
    }, [isAuthenticated, isAdmin]);

    if (permission && hasPermission) {
        return <Navigate to={`/admin/access/denied`} />;
    }

    if (isAuthenticated === true && isAdmin === true) {
        return <Outlet />;
    }

    return null;
};

export default ProtectedAdminRoute;
