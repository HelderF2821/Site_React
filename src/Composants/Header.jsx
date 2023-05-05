import React, { useState } from 'react';
import '../css/header.css';

const Header = ({ childToParent }) => {
    const [menuClass, setMenuClass] = useState(false);

    const showmenu = () => {
        setMenuClass(!menuClass);
        childToParent(!menuClass);
    }

    return (
        <header>
            <div className="header">
                <h1>Bienvenue</h1>
                <p>Contenu principal de la page</p>
            </div>
            <button className="menu-btn" onClick={showmenu}>&#9776; Menu</button>
            <nav className={`menu ${menuClass ? 'show' : ''}`}>
                <ul>
                    <li><a href="home">Accueil</a></li>
                    <li><a href="TimeLine">TimeLine</a></li>
                    <li><a href="">Page 2</a></li>
                    <li><a href="">Page 3</a></li>
                    <li><a href="">Page 4 etc </a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
