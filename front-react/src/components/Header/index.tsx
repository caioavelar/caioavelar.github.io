import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => (
    <header className="main-header">
        <img src={logo} alt="Logo" width="50px" height="50px"/>
        <div className="header-links-div">
            <Link to="/aboutMe" className="header-link">
                <span>Sobre mim!</span>
            </Link>
            <Link to="/projects" className="header-link">
                <span>Meus projetos!</span>
            </Link>
        </div>
    </header>
);

export default Header;
