import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoOpen } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { TiPuzzle } from "react-icons/ti";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importar hook

import styles from "./PaginaProyectos.module.css";
type Props = {
  nombreProyecto: String;
  children?: React.ReactNode;
  gitTrue?: boolean;
  UrlWeb?: string;
  imgProyect?: string;
  icono1?: React.ReactNode;
  icono2?: React.ReactNode;
  icono3?: React.ReactNode;
  icono4?: React.ReactNode;
  funcionalidad1?: string;
  funcionalidad2?: string;
  funcionalidad3?: string;
};

const PaginaProyectos = (props: Props) => {
  const { t } = useTranslation();

  const gitButtonText = props.gitTrue ? "Github" : "No Disponible";

  return (
    <div>
      <header className={styles.headerSetting}>
        <button className={styles.buttonSettings}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <IoArrowBackOutline style={{ marginBottom: 4, marginRight: 5 }} />
            {t("volverInicio")}
          </Link>
        </button>
        <span className={styles.spanSettings}>
          <strong>{t("proyectos")}</strong> / {props.nombreProyecto}
        </span>
      </header>

      <main className={styles.boxMainProyect}>
        <div className={styles.boxInnerMain}>
          <h1 className={styles.tituloProyecto}>{props.nombreProyecto}</h1>
          <hr className={styles.hrStyleSettings} />
          <p className={styles.textoProyecto}>{props.children}</p>

          <div>
            <a href={props.UrlWeb} target="_blank">
              {" "}
              <button className={styles.botonProyectos}>
                <IoOpen className={styles.iconosSettings} />
                Ver Proyecto
              </button>
            </a>

            <button className={styles.botonProyectos} disabled={!props.gitTrue}>
              <FaGithub className={styles.iconosSettings} />
              {gitButtonText}
            </button>
          </div>
          <div>
            <h2 className={styles.LenguajesProyecto}>
              <FaCode size={30} style={{ marginBottom: 6, marginRight: 5 }} />
              {t("lenguajes")}
            </h2>
            <hr className={styles.hrStyleSettings} />
            <div className={styles.mainLenguajes}>
              {props.icono1 && (
                <div className={styles.iconosLenguajesProyecto}>
                  {props.icono1}
                </div>
              )}
              {props.icono2 && (
                <div className={styles.iconosLenguajesProyecto}>
                  {props.icono2}
                </div>
              )}
              {props.icono3 && (
                <div className={styles.iconosLenguajesProyecto}>
                  {props.icono3}
                </div>
              )}{" "}
              {props.icono4 && (
                <div className={styles.iconosLenguajesProyecto}>
                  {props.icono4}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.boxInnerMain}>
          <div>
            <a href={props.imgProyect} target="_blank" draggable="false">
              <img
                className={styles.imagenProyecto}
                draggable="false"
                src={
                  props.imgProyect ||
                  "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                }
                alt="Imagen del Proyecto"
              />
            </a>
          </div>
          <div className={styles.mainFuncionalidad}>
            {" "}
            <h2 className={styles.FuncionalidadProyecto}>
              <TiPuzzle size={40} style={{ marginBottom: 12 }} />
              {t("funcionalidad")}
            </h2>
            <ul>
              {props.funcionalidad1 && (
                <li className={styles.ListItems}>{props.funcionalidad1}</li>
              )}
              {props.funcionalidad2 && (
                <li className={styles.ListItems}>{props.funcionalidad2}</li>
              )}{" "}
              {props.funcionalidad3 && (
                <li className={styles.ListItems}>{props.funcionalidad3}</li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
export default PaginaProyectos;
