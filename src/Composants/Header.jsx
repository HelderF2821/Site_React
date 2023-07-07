import React, { useState } from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';

const Header = ({ childToParent, closeMenu }) => {
    const [menuClass, setMenuClass] = useState(false);
  
    const showMenu = () => {
      setMenuClass(!menuClass);
      childToParent(!menuClass);
    };
  
    const handleLinkClick = () => {
      setMenuClass(false);
      closeMenu();
    };
  
    return (
      <header>
        <div className="header">
          <h1>Bienvenue</h1>
          <p>Contenu principal de la page</p>
        </div>
        <button className="menu-btn" onClick={showMenu}>
          &#9776; Menu
        </button>
        <nav className={`menu ${menuClass ? 'show' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/Timeline" onClick={handleLinkClick}>
                Timeline
              </Link>
            </li>
            <li>
              <Link to="/page2" onClick={handleLinkClick}>
                Page 2
              </Link>
            </li>
            <li>
              <Link to="/page3" onClick={handleLinkClick}>
                Page 3
              </Link>
            </li>
            <li>
              <Link to="/page4" onClick={handleLinkClick}>
                Page 4 etc
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  };  

export default Header;
