import React, { useState } from "react";
import { Link } from "react-router-dom";
import Translations from "./translations";

function Header({lang, translations, changeLanguage}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };
  return (
    <header>
      <div className="container-navbar">
        <Translations changeLanguage={changeLanguage}/>
        <div className="dropdown">
          <button className="dropbtn" onClick={handleDropdownToggle}>
            <img className="menu-icon" src={isDropdownOpen ? "img/menu2.png" : "img/menu.png"} alt="Botón de menú desplegable" />
          </button>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
            <Link className="underline" to={`/?lang=${lang}`} onClick={handleLinkClick}>{translations[lang].hometitle}</Link>

            <Link className="underline" to={`/peremartinezibar?lang=${lang}`} onClick={handleLinkClick}>Pere Martínez Ibar</Link>
            <Link className="underline" to={`/myjob?lang=${lang}`} onClick={handleLinkClick}>{translations[lang].jobtitle}</Link>
            <Link className="underline" to={`/clients?lang=${lang}`} onClick={handleLinkClick}>{translations[lang].clientstitle}</Link>
            <Link className="underline" to={`/mygames`} onClick={handleLinkClick}>{translations[lang].gamestitle}</Link>
            <Link className="underline" to={`/contact?lang=${lang}`} onClick={handleLinkClick}>{translations[lang].contacttitle}</Link>
           
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;




