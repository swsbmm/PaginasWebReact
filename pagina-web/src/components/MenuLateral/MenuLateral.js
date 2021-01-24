import React from 'react';
import logo from '../../assets/img/logo.png'
import './MenuLateral.css'
const MenuLateral = () => {
    return (
        <nav className ="barra">
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav-Links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Acerca de mi</a></li>
            </ul>

            <section className="logo-barra">
                <img src={logo} alt="logo"/>
                <h1>PorTerminal</h1>
            </section>
        </nav>
    );
}



export default MenuLateral;
