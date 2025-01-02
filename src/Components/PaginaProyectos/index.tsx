import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

import styles from "./PaginaProyectos.module.css";
type Props = {
  nombreProyecto: String;
};

const PaginaProyectos = (props: Props) => {
  return (
    <div>
      <header className={styles.headerSetting}>
        <button className={styles.buttonSettings}>
          <IoArrowBackOutline style={{ marginBottom: 4, marginRight: 5 }} />
          Volver inicio
        </button>
        <span className={styles.spanSettings}>
          <strong>Proyectos</strong> / {props.nombreProyecto}
        </span>
      </header>

      <main className={styles.boxMainProyect}>
        <div className={styles.boxInnerMain}>
          <h1>ded</h1>
        </div>
        <div className={styles.boxInnerMain}>
          <h2>ded</h2>
        </div>
      </main>
    </div>
  );
};
export default PaginaProyectos;
