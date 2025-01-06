import React from "react";
import Atropos from "atropos/react"; // Importar Atropos
import "atropos/css"; // Importar estilos de Atropos
import styles from "./SobreMi.module.css";
import fotoUser from "../../img/fotoUser.png";
import { PiReadCvLogoFill } from "react-icons/pi";
import imgUser from "../../img/fotoUser.png";
import PersonalInfo from "../PersonalInfo";

type Props = {};

function SobreMi({}: Props) {
  return (
    <div className={styles.mainSobreMi}>
      <h2 className={styles.tituloSobreMi}>
        {" "}
        <strong>Sobre Mí</strong>
      </h2>
      <h3 className={styles.subtituloSobreMi}>
        "Si pudes imaginarlo, puedes crearlo"
      </h3>
      <div className={styles.espacioInfo}>
        <div className={styles.infoSons}>
          <h2 className={styles.tituloPresentacion}>
            <span style={{ color: "#ad49e1", fontSize: 35 }}>
              <strong>Hola!, Me llamo</strong>
            </span>
            <br />
            Miguel Pomares
          </h2>
          <p className={styles.descripcionPersonal}>
            Holaa!🤓 me llamo Miguel, soy un joven de 21 años apasionado por el
            aprendizaje y la innovación. Tengo experiencia en el trato activo
            con el cliente, y en el área del desarrollo web, destaco por mi
            capacidad para adaptarme rápidamente a nuevos desafíos. Estoy
            comprometido con la mejora continua y busco siempre aportar valor a
            los proyectos en los que participo. Soy una persona proactiva, con
            una fuerte ética de trabajo y orientada a resultados.
          </p>
          <center>
            <button className={styles.botonCV}>
              <PiReadCvLogoFill
                size={20}
                style={{ marginBottom: 5, marginRight: 6 }}
              />
              Descargar CV
            </button>
          </center>
        </div>
        <div className={styles.infoSons}>
          <img src={imgUser} alt="" className={styles.imageContainer} />
          <div className={styles.EspacioInfoPersonal}>
            <PersonalInfo tituloCard="Hola" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
