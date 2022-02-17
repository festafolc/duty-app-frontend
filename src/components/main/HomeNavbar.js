import { useState } from 'react'
import { Link } from 'react-router-dom'

export const HomeNavbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-light px-5'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/home'>Home</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id='navbar'>
                    <ul className='navbar-nav ms-3'>
                        <li className='nav-item'><Link className='nav-link ms-2' to='/whyus'>Why us?</Link></li>
                        <li className='nav-item'><Link className='nav-link ms-2' to='/cleanears-map'>Cleaners</Link></li>
                        <li className='nav-item'><Link className='nav-link ms-2' to='/cookers-map'>Cookers</Link></li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'><Link className='nav-link me-2' to='/login'>Login</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/signup'>Sign Up!</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}