import React from 'react';
import Logo from '../assets/Logo.svg'
import Nav from './Nav';

const Header = () => {
    return (
    <header className="header">
        <img src={Logo} alt="logo"/>
        <Nav />
    </header>
    );
}

export default Header;