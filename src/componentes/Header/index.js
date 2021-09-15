import React from 'react';
import './style.css';
import logo from './logo-senai2.png';

function Header(){
    return(
        <header>
            <img src={logo} alt="Logo SENAI"></img>
            <div className="schoolName">
                <p>São Paulo - Santo Amaro</p>
                <p>Suíço-Brasileira Paulo Ernesto Tolle</p>
            </div>
        </header>
    );
}

export default Header;