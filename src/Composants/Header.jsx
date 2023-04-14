import React, { useState } from 'react';
import '../css/header.css';
  
const Header = () => {

    const [menuclass, setmenuclass] = useState("");
    console.log(menuclass);

    const showmenu = () => {
        if (menuclass == "") {
          setmenuclass("show");
        } else {
          setmenuclass("");
        }
    }
    
    return (
        <header>
            <div class="header">
                <h1>Bienvenue</h1> 
                <p>Contenu principal de la page</p>
            </div>
            <button class="menu-btn" onClick={showmenu} >&#9776; Menu</button>
            <nav class={`menu ${menuclass}`}>
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