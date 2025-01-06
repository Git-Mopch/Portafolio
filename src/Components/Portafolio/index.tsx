import React, { useState } from "react";
import styles from "./Portafolio.module.css";
import { FaCodeBranch } from "react-icons/fa6";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import Proyecto from "../Proyectos";

import imgLaroye from "../../img/LaroyeProyectImage.png";
import imgLivecan from "../../img/LivecanProyectImage.png";

function Portafolio() {
  const [activeContent, setActiveContent] = useState("contenido1");

  return (
    <div className={styles.mainPortafolio}>
      <div className={styles.mainBtn}>
        <button
          className={`${styles.Btn} ${
            activeContent === "contenido1" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveContent("contenido1")}
        >
          <strong>
            <FaCodeBranch color="white" />
            <br /> Proyectos
          </strong>
        </button>
        <button
          className={`${styles.Btn} ${
            activeContent === "contenido2" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveContent("contenido2")}
        >
          <BsFillFileEarmarkPdfFill color="white" />
          <br />
          <strong>Certificados</strong>
        </button>
        <button
          className={`${styles.Btn} ${
            activeContent === "contenido3" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveContent("contenido3")}
        >
          <AiFillCode color="white" />
          <br />
          <strong>Lenguajes</strong>
        </button>
        <button
          className={`${styles.Btn} ${
            activeContent === "contenido4" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveContent("contenido4")}
        >
          <FaTools color="white" /> <br />
          <strong>Herramientas</strong>
        </button>
      </div>

      <div>
        {activeContent === "contenido1" && (
          <div className={styles.espacioProyectos}>
            <Proyecto
              tituloProyecto="Livecan"
              urlProyecto="/livecan"
              imgFondo={imgLivecan}
              textoProyecto="LiveCan ofrece mordedores innovadores y resistentes para perros, diseñados para promover su salud dental y entretenimiento. Calidad y diversión en cada mordida. 🐾"
            />

            <Proyecto
              tituloProyecto="Laroye"
              urlProyecto="/laroye"
              imgFondo={imgLaroye}
              textoProyecto="Laroye Café es un lugar acogedor y familiar donde puedes disfrutar de una experiencia gastronómica única, con productos artesanales y un ambiente joven. ☕"
            />
          </div>
        )}
        {activeContent === "contenido2" && (
          <p>Este es el contenido del Botón 2</p>
        )}
        {activeContent === "contenido3" && (
          <p>Este es el contenido del Botón 3</p>
        )}
        {activeContent === "contenido4" && (
          <p>Este es el contenido del Botón 4</p>
        )}
      </div>
    </div>
  );
}

export default Portafolio;
