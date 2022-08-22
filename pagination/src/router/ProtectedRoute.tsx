import {useLocation, Navigate, Outlet} from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    // @ts-ignore
    const { isRegister } = useSelector(state => state.registration);
    // @ts-ignore
    const { isLogin } = useSelector(state => state.login);
    const location = useLocation();

    return (
        !!(isRegister || isLogin)
            ?
            <Outlet/>
            :
            <Navigate to="/" state={{ from: location}} replace/>
    )
}

export default ProtectedRoute;