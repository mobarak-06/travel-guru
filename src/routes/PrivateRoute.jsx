import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const path = location.pathname;

    if (loading) {
        return <span className="loading loading-bars loading-lg mt-[350px] ml-[650px]"></span>
    }
    if (user) {
        return children
    }
    return <Navigate state={path} to="/login"></Navigate>
};

export default PrivateRoute;