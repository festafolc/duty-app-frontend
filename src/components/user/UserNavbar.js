import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth/startLogout';

export const UserNavbar = () => {
    //Obtenemos el useDispatch
    const dispatch = useDispatch();

    //Manejamos el estado collapse del botton toggle
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    //Obtenemos el nombre de usuario con el useSelector
    const {username} = useSelector(state => state.auth);

    //Ejecutamos el cierre de sesión del usuario
    const handleLogout = () => {
        //Lanzamos la acción que limpia el state auth
        dispatch(startLogout());
    }
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light container-fluid bg-light border-3 border-bottom border-primary px-5">
                <div className="navbar-brand">
                    <img alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    <span> {username}</span>
                </div>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#userNavbar" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="userNavbar" className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse d-md-flex`}>
                    <ul className="navbar-nav ms-3">
                        <li className="nav-item"><Link className="nav-link" to="/homes">Your properties</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/newDuty">Get a duty</Link></li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <button className="btn" onClick={handleLogout}>Logout</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}
