import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/kiwilogo.png';


function Navbar(){
    return(
        <>
            <div>
                <nav className='navbar navbar-expand-lg styleNav'>
                    <div id='nav'className='container-fluid'>
                        <img className='logo' src={logo} alt="logo"  height={80} />
                        <h1 id='title'>Navbar no-Responsive</h1>
                        <div className='styleNav'>
                            <button className='button'>
                                <a href='index.html'>Tiendas</a>
                            </button>
                            <button button className='button'>
                                <a href='index.html'>Productos</a>
                            </button>
                            <button button className='button'>
                                <a href='index.html'>Contacto</a>
                            </button>
                            <button button className='button'>
                                <a href='index.html'>otra cosa</a>
                            </button>
                        </div>
                        <CartWidget />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar