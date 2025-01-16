import React from "react";
import styles from "./Main.module.css";
import { FcApproval } from "react-icons/fc";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

import { useTranslation } from "react-i18next"; // Importar hook de i18next

type Props = {};

const textoProfesion = "<Web Developer/>";

function Main({}: Props) {
  const { t } = useTranslation(); // Usar el hook de i18next

  return (
    <div className={styles.mainBox}>
      <div className={styles.mainBoxes}>
        <button disabled={true} className={styles.botonDisponible}>
          <FcApproval size={20} className={styles.iconoDisponible} />
          <strong>{t("available")}</strong>
        </button>
        <h1 className={styles.tituloMain}>
          <strong>Frontend</strong> <br />
          <span style={{ color: "#ad49e1" }}>Developer</span>
        </h1>
        <h2 className={styles.subtituloMain}>Desarrollador web y software</h2>
        <div className={styles.espacioLenguajes}>
          <div className={styles.lenguajes}>React</div>
          <div className={styles.lenguajes}>NodeJs</div>
          <div className={styles.lenguajes}>TypeScript</div>
          <div className={styles.lenguajes}>Boostrap</div>
        </div>

        <center>
          <div className={styles.espacioBotones}>
            <a href="#portafolio">
              <button className={styles.botonesProfile}>
                <MdOpenInNew className={styles.iconosButton} />
                {t("projects")}
              </button>
            </a>

            <button className={styles.botonesProfile}>
              <FaGithub className={styles.iconosButton} />
              Github
            </button>
          </div>
        </center>
      </div>
      <div className={styles.mainBoxes}>
        <FaCode className={styles.iconDevelop} />
      </div>
    </div>
  );
}

export default Main;
