import React, { useState } from "react";
import styles from "./Portafolio.module.css";

function Portafolio() {
  const [activeContent, setActiveContent] = useState("contenido1");

  return (
    <div className={styles.mainPortafolio}>
      <div className={styles.mainBtn}>
        <button
          className={styles.Btn}
          onClick={() => setActiveContent("contenido1")}
        >
          <strong>Proyectos</strong>
        </button>
        <button
          className={styles.Btn}
          onClick={() => setActiveContent("contenido2")}
        >
          Certificados
        </button>
        <button
          className={styles.Btn}
          onClick={() => setActiveContent("contenido3")}
        >
          Lenguajes
        </button>
        <button
          className={styles.Btn}
          onClick={() => setActiveContent("contenido3")}
        >
          Herramientas
        </button>
      </div>

      {/* Contenido */}
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          width: "300px",
          margin: "20px auto",
          backgroundColor: "#e8f4ff",
        }}
      >
        {activeContent === "contenido1" && (
          <p>Este es el contenido del Botón 1</p>
        )}
        {activeContent === "contenido2" && (
          <p>Este es el contenido del Botón 2</p>
        )}
        {activeContent === "contenido3" && (
          <p>Este es el contenido del Botón 3</p>
        )}
      </div>
    </div>
  );
}

export default Portafolio;
