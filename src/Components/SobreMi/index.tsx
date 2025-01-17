import React from "react";
import styles from "./SobreMi.module.css";
import { PiReadCvLogoFill } from "react-icons/pi";
import imgUser from "../../img/fotoUser.png";
import PersonalInfo from "../PersonalInfo";
import { IoTimerSharp } from "react-icons/io5";

import { FaLaptopCode } from "react-icons/fa6";
import { IoGitNetwork } from "react-icons/io5";
import { useTranslation } from "react-i18next"; // Importar hook de i18next

import cvMiguel from "../../CV-Miguel.pdf";
type Props = {};

function SobreMi({}: Props) {
  const { t } = useTranslation(); // Usar el hook de i18next

  return (
    <div className={styles.mainSobreMi} id="sobreMi">
      <h2 className={styles.tituloSobreMi}>
        {" "}
        <strong>{t("tituloSobreMi")}</strong>
      </h2>
      <h3 className={styles.subtituloSobreMi}>{t("subtituloSobreMi")}</h3>
      <div className={styles.espacioInfo}>
        <div className={styles.infoSons}>
          <h2 className={styles.tituloPresentacion}>
            <span style={{ color: "#ad49e1", fontSize: 35 }}>
              <strong>{t("sobreMiHola")}</strong>
            </span>
            <br />
            {t("sobreMiNombre")}
          </h2>
          <p className={styles.descripcionPersonal}>{t("textoSobreMi")}</p>
          <center>
            <a href={cvMiguel} target="_blank">
              {" "}
              <button className={styles.botonCV}>
                <PiReadCvLogoFill
                  size={20}
                  style={{ marginBottom: 5, marginRight: 6 }}
                />
                {t("botonCv")}
              </button>
            </a>
          </center>
        </div>
        <div className={styles.infoSons}>
          <img src={imgUser} alt="" className={styles.imageContainer} />
          <div className={styles.EspacioInfoPersonal}>
            <PersonalInfo
              tituloCard={t("botonSobreMi1")}
              enlaceSeccion="#portafolio"
              icono={IoGitNetwork}
              num="2"
            />
            <PersonalInfo
              tituloCard={t("botonSobreMi2")}
              enlaceSeccion="#portafolio"
              icono={IoTimerSharp}
              num="4"
              txt={t("botonSobreMi2Sub")}
            />
            <PersonalInfo
              tituloCard={t("botonSobreMi3")}
              enlaceSeccion="#portafolio"
              icono={FaLaptopCode}
              num="+11"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreMi;
