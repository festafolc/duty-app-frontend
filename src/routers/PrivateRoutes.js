import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoutes = ({children}) => {
    const {auth} = useSelector(state => state);
    return auth.logged 
        ? children
        : <Navigate to='/home' />
}
