import "../styles/_NavBar.scss"
import { FiHome } from 'react-icons/fi';
import { BsCameraVideo } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import Busqueda from './Busqueda';
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <header className='content-nav'>
            <nav className="content-icons">
                <ul>
                    <li> <NavLink className='navbar-link' to="/"><FiHome /></NavLink> </li>
                    <li> <NavLink className='navbar-link' to="/movie"> <BsCameraVideo /></NavLink></li>
                    <li> <NavLink className='navbar-link' to="/tv"><FiMonitor /></NavLink> </li>
                </ul>
                <Busqueda/>  
            </nav>
        </header>
    )
}

export default NavBar;