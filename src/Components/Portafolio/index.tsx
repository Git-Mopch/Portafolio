import React, { useState } from "react";
import styles from "./Portafolio.module.css";
import { FaCodeBranch } from "react-icons/fa6";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import Proyecto from "../Proyectos";

import imgLaroye from "../../img/LaroyeProyectImage.png";
import imgLivecan from "../../img/LivecanProyectImage.png";

import imgCertificadoKotlin from "../../img/Curso-Kotlin-Certificado.jpg";
import imgCertificadoBootcampWeb from "../../img/cursoBootcamp.jpg";

import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { FaSwift } from "react-icons/fa6";
import { SiKotlin } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiGnubash } from "react-icons/si";

function Portafolio() {
  const [activeContent, setActiveContent] = useState("contenido1");

  return (
    <div className={styles.mainPortafolio}>
      <h2 className={styles.tituloSobreMi} id="portafolio">
        {" "}
        <strong>Portafolio</strong>
      </h2>

      <div className={styles.mainBtn}>
        <button
          className={`${styles.Btn} ${
            activeContent === "contenido1" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveContent("contenido1")}
        >
          <FaCodeBranch color="white" />
          <br /> Proyectos
        </button>
        <button
          className={`${styles.Btn} ${
            activeContent === "contenido2" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveContent("contenido2")}
        >
          <BsFillFileEarmarkPdfFill color="white" />
          <br />
          Certificados
        </button>
        <button
          className={`${styles.Btn} ${
            activeContent === "contenido3" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveContent("contenido3")}
        >
          <AiFillCode color="white" />
          <br />
          Lenguajes
        </button>
        <button
          className={`${styles.Btn} ${
            activeContent === "contenido4" ? styles.activeBtn : ""
          }`}
          onClick={() => setActiveContent("contenido4")}
        >
          <FaTools color="white" /> <br />
          Herramientas
        </button>
      </div>

      <div>
        {activeContent === "contenido1" && (
          <div className={styles.espacioProyectos} id="proyectosSeccion">
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
          <div className={styles.espacioCertificados}>
            <a
              href={imgCertificadoKotlin}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <img
                draggable="false"
                className={styles.imagenCertificados}
                src={imgCertificadoKotlin}
                alt="Imagen Certificado curso de Kotlin"
              />
              <figcaption>Curso de desarrollo con Kotlin</figcaption>
            </a>
            <a
              href={imgCertificadoBootcampWeb}
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <img
                draggable="false"
                className={styles.imagenCertificados}
                src={imgCertificadoBootcampWeb}
                alt="Imagen Certificado curso de Bootcamp frontend"
              />
              <figcaption>Most complete 2024 FrontEnd Bootcamp</figcaption>
            </a>
          </div>
        )}
        {activeContent === "contenido3" && (
          <div className={styles.espacioLenguajes}>
            <div className={styles.lenguaje} title="HTML">
              <IoLogoHtml5 size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="CSS">
              <FaCss3Alt size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="JAVASCRIPT">
              <FaJsSquare size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="NODE JS">
              <IoLogoNodejs size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="REACT">
              <SiReact size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="PYTHON">
              <IoLogoPython size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="SWIFT">
              <FaSwift size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="KOTLIN">
              <SiKotlin size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="XML">
              <BsFiletypeXml size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="MYSQL">
              <SiMysql size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="POSTGRESQL">
              <BiLogoPostgresql size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="MONGODB">
              <SiMongodb size={70} color="white" />
            </div>
            <div className={styles.lenguaje} title="BASH">
              <SiGnubash size={70} color="white" />
            </div>
          </div>
        )}
        {activeContent === "contenido4" && (
          <p>Este es el contenido del Botón 4</p>
        )}
      </div>
    </div>
  );
}

export default Portafolio;
