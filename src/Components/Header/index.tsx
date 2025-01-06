import React, { useState } from "react";
import styles from "./styleHeader.module.css";

type Props = {};

function Header({}: Props) {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <header className={styles.header} id="home">
      <nav className={styles.headerNav}>
        <ul className={styles.headerMenu}>
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
              href="#contact"
              className={activeLink === "#contacto" ? styles.active : ""}
              onClick={() => setActiveLink("#contacto")}
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
