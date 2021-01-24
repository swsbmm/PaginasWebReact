import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (

        <div className="wrapper">
            <div className="top_navbar">

                <div className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="top_menu">
                    <div className="logo">PorTerminal</div>
                    <ul>
                        <li><a href="#"><i class="fas fa-home"></i>Inicio</a></li>
                        <li><a href="#"><i class="fas fa-project-diagram"></i>Proyectos</a></li>
                        <li><a href="#"><i class="far fa-address-card"></i>About</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default NavBar;
