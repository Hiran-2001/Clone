import {  Link } from "react-router-dom";
import { useState } from "react";
import './css/Navbar.css'
import { HiMenu } from 'react-icons/hi';
import SideBar from "./Sidebar";
const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleSidebar = () => {
        setShowNav(!showNav)
    }
    return (
        <div >
            <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
                <button  id="menu-btn"> <HiMenu className="menu-bar" onClick={ toggleSidebar } /> </button>
                <Link class="navbar-brand" to='/'>Uber <span>Eats</span></Link>
                
            </nav>
            
            <SideBar show={showNav}/>
        </div>
    )
};

export default Navbar;