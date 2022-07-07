import React from 'react';
import Logo from './assets/Logo.png';
import './Header.css';

export function Header() {
    return (
        <nav className='nav'>
            <img className='nav--logo' src={Logo} alt='Logo' />
        </nav>
    );
}
