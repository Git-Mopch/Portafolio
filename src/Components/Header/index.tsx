import React, { useState, useEffect } from "react";
import styles from "./styleHeader.module.css";

type Props = {};

function Header({}: Props) {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.headerNav}`)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header} id="home">
      <nav className={styles.headerNav}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        <ul
          className={`${styles.headerMenu} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li>
            <a
              href="#home"
              className={activeLink === "#home" ? styles.active : ""}
              onClick={() => setActiveLink("#home")}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#sobreMi"
              className={activeLink === "#sobreMi" ? styles.active : ""}
              onClick={() => setActiveLink("#sobreMi")}
            >
              Sobre Mi
            </a>
          </li>
          <li>
            <a
              href="#portafolio"
              className={activeLink === "#portafolio" ? styles.active : ""}
              onClick={() => setActiveLink("#portafolio")}
            >
              Portafolio
            </a>
          </li>
          <li>
            <a
              href="#formulario"
              className={activeLink === "#formulario" ? styles.active : ""}
              onClick={() => setActiveLink("#formulario")}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
