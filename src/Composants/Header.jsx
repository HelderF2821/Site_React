import React, { useState } from 'react';
import '../css/header.css';

const Header = ({ childToParent }) => {
    const [menuclass, setmenuclass] = useState(false);

    const showmenu = () => {
        setmenuclass(!menuclass);
        childToParent(!menuclass);
    }

    return (
        <header>
            <div className="header">
                <h1>Bienvenue</h1>
                <p>Contenu principal de la page</p>
            </div>
            <button className="menu-btn" onClick={showmenu}>&#9776; Menu</button>
            <nav className={`menu ${menuclass ? 'show' : ''}`}>
                <ul>
                    <li><a href="index.php">Accueil</a></li>
                    <li><a href="saga&arcs.php">A propos de</a></li>
                    <li><a href="actu.php">Actualités</a></li>
                    <li><a href="persos.php">Personnages</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
