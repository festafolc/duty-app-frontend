import { useDispatch, useSelector } from "react-redux";
import { startDeleteUser } from "../../actions/user/startDeleteUser";
import { UserNavbar } from "./UserNavbar";

export const UserScreen = () => {
    //Obtenemos el useDispatch
    const dispatch = useDispatch();

    //Obtenemos el id del usuario logueado que quiere eliminar su cuenta
    const {id} = useSelector(state => state.auth)
    
    //Acción para borrar usuario
    const handleDeleteUser = () => {
        dispatch(startDeleteUser(id));
    }
    
    return (
        <>
            <UserNavbar />
            <h1>User Screen</h1>
            <div>
                <h1>Delete User</h1>
                <button className="btn" onClick={handleDeleteUser}>Delete User</button>
            </div>
        </>

    )
}
