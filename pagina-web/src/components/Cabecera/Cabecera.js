import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import './Cabecera.css';


const Cabecera = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" >Inicio<span className="sr-only">(current)</span></Link >
                            </li>
                            <li className="nav-item">
                                <Link to='/chat' className="nav-link" >Chat<span className="sr-only">(current)</span></Link >
                            </li>
                            <li className="nav-item">
                                <Link to='About' className="nav-link" >About</Link >
                            </li>
                            <li className="nav-item">
                                <Link to='Proyect' className="nav-link" >Proyect</Link >
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='logo'>
                    <Link to='/'><img src={logo} className='' alt=''/></Link>
                </div>
            </nav>
        </header>
    )
}
export default Cabecera;








