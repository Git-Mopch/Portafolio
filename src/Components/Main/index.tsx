import React from "react";
import styles from "./Main.module.css";
import { Spoiler } from "spoiled";
import { FaArrowDown } from "react-icons/fa";

type Props = {};

const textoProfesion = "<Web Developer/>";

function Main({}: Props) {
  return (
    <main>
      <h1 className={styles.tituloMain}>Miguel Pomares Chacón</h1>
      <h2 className={styles.subtituloMain}>
        <Spoiler>{textoProfesion}</Spoiler>
      </h2>

      <center>
        <a href="#destinoFlecha">
          {" "}
          <FaArrowDown size={60} className={styles.elementoFlecha} />
        </a>
      </center>
    </main>
  );
}

export default Main;
