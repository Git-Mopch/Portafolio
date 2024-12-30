import React from "react";
import styles from "./Estudios.module.css";
import { FaDownload, FaCloudDownloadAlt } from "react-icons/fa";
import curriculum from "../../CV-Miguel.pdf";
import cursoKotlin from "../../Curso-Kotlin-Certificado.jpg";
import cursoBootcampWeb from "../../CertificadoCursoWeb.png";

type Props = {};

function Estudios({}: Props) {
  return (
    <div>
      <h3 className={styles.tituloEstudios}>
        <strong>Estudios</strong>
      </h3>
      <center>
        {" "}
        <hr style={{ color: "#7a1cac", width: 150 }} />
      </center>
      <div className={styles.timeline}>
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.timelineYear}>2021</div>
          <div className={styles.timelineContent}>
            <h3>Desarrollo de aplicaciones Web</h3>
            <p>
              <strong>UCAM</strong>, Murcia
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.timelineYear}>2023</div>
          <div className={styles.timelineContent}>
            <h3>Desarrollo de aplicaciones Multiplataforma</h3>
            <p>
              <strong>UCAM</strong>, Murcia
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <a href="" style={{ textDecoration: "none" }}>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineYear}>2024</div>
            <div className={styles.timelineContent}>
              <h3>The complete 2024 web Development Bootcamp</h3>
              <p>
                <strong>UDEMY</strong>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </a>
        <a href="" style={{ textDecoration: "none" }}>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineYear}>2024</div>
            <div className={styles.timelineContent}>
              <h3>
                Kotlin: App Delivery con NodeJs, Sql, Mercado pago y Paypal
              </h3>
              <p>
                <strong>UDEMY</strong>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Estudios;
