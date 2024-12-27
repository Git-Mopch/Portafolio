import React from "react";
import styles from "./styleHeader.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

type Props = {};

function Header({}: Props) {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.headerMenu}>
          <li>
            <a href="#home">
              <FaInstagram size={40} />
            </a>
          </li>
          <li>
            <a href="#about">
              <FaGithub size={40} />
            </a>
          </li>
          <li>
            <a href="#services">
              <FaLinkedin size={40} />
            </a>
          </li>
          <li>
            <a href="mopch891@gmail.com">
              <SiGmail size={40} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
