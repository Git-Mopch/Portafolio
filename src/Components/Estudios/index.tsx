import React from "react";
import styles from "./Estudios.module.css";
import { FaDownload, FaCloudDownloadAlt } from "react-icons/fa";
import curriculum from "../../CV-Miguel.pdf";
import cursoKotlin from "../../Curso-Kotlin-Certificado.jpg";
import cursoBootcampWeb from "../../CertificadoCursoWeb.png";
import { useTranslation } from "react-i18next"; // Importar hook de i18next

type Props = {};

function Estudios({}: Props) {
  const { t } = useTranslation(); // Usar el hook de i18next

  return (
    <div>
      <h2 className={styles.tituloSobreMi} id="Experiencia">
        <strong>{t("tituloEstudios")}</strong>
      </h2>
      <h3 className={styles.subtituloSobreMi}>{t("subtitulosEstudios")}</h3>
      <center>
        <hr style={{ color: "#7a1cac", width: 290 }} />
      </center>
      <div className={styles.timeline}>
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.timelineYear}>2021</div>
          <div className={styles.timelineContent}>
            <h3>{t("estudios1")}</h3>
            <p>
              <strong>UCAM</strong>, Murcia
            </p>
            <p>{t("estudios1texto")}</p>
          </div>
        </div>
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.timelineYear}>2023</div>
          <div className={styles.timelineContent}>
            <h3>
              <strong>{t("estudios2")}</strong>
            </h3>
            <p>
              <strong>
                <a
                  href="https://pulsap.es/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  PULSAP
                </a>
              </strong>
              , Murcia
            </p>
            <p>{t("estudios2texto")}</p>
          </div>
        </div>
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.timelineYear}>2023</div>
          <div className={styles.timelineContent}>
            <h3>{t("estudios3")}</h3>
            <p>
              <strong>UCAM</strong>, Murcia
            </p>
            <p>{t("estudios3texto")}</p>
          </div>
        </div>
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.timelineYear}>2024</div>
          <div className={styles.timelineContent}>
            <h3>
              <strong>{t("estudios4")}</strong>
            </h3>
            <p>
              <strong>
                <a
                  href="https://www.minderest.com/es?utm_term=minderest&utm_campaign=ES+-+Branding&utm_source=adwords&utm_medium=ppc&hsa_acc=6002286567&hsa_cam=1055246300&hsa_grp=54666194354&hsa_ad=694756577000&hsa_src=g&hsa_tgt=kwd-307042245480&hsa_kw=minderest&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAm-67BhBlEiwAEVftNnFaM2buwLNKa9av8iBa0GywDV5JPneNX-WKlmrr70YVt7nfq7vD_hoC9cUQAvD_BwE"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  MINDEREST
                </a>
              </strong>
              , Murcia
            </p>
            <p>{t("estudios4texto")}</p>
          </div>
        </div>
        <a
          href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=24T7MT123024"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineYear}>2024</div>
            <div className={styles.timelineContent}>
              <h3>The complete 2024 web Development Bootcamp</h3>
              <p>
                <strong>UDEMY</strong>
              </p>
              <p>{t("estudios5texto")}</p>
            </div>
          </div>
        </a>
        <a
          href="https://www.udemy.com/course/kotlin-app-delivery-con-nodejs-sql-mercado-pago-y-paypal/?couponCode=24T7MT123024"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineYear}>2024</div>
            <div className={styles.timelineContent}>
              <h3>
                Kotlin: App Delivery con NodeJs, Sql, Mercado pago y Paypal
              </h3>
              <p>
                <strong>UDEMY</strong>
              </p>
              <p>{t("estudios6texto")}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Estudios;
