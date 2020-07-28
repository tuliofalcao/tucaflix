import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="logo" src={logo} alt="TucaFlix Logo" />
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;