import React, { useState /*useEffect*/ } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={!navbar ? "NavBar" : "NavBar active"}>
        <section className="NavBar__Right__Options">
          <a href="#home" className="Option">
            <button className="navbar__item">Inicio</button>
          </a>
          <a href="#work" className="Option">
            <button className="navbar__item">Trabajos</button>
          </a>
          <a href="#about" className="Option">
            <button className="navbar__item">Sobre mí</button>
          </a>
          <a href="#contact" className="Option">
            <button className="navbar__item">Contacto</button>
          </a>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
