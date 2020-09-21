import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <header className="main-header">
        <img src={logo} alt="Logo" width="50px" height="50px"/>
        <div className="header-links-div">
            <Link to="/" className="header-link">
                <span>Meu Portfólio!</span>
            </Link>
        </div>
    </header>
);

export default Header;
