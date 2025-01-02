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
            <p>
              Gracias a este grado he podido dominar lenguajes tan utiles para
              el dia a dia como desarrollador web entre ellos: Html, Css,
              JavaScript, NodeJs, Sql, PhpMyAdmin, Wordpress.
            </p>
          </div>
        </div>
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.timelineYear}>2023</div>
          <div className={styles.timelineContent}>
            <h3>Desarrollo de aplicaciones Multiplataforma</h3>
            <p>
              <strong>UCAM</strong>, Murcia
            </p>
            <p>
              En Dam aprendí los fundamentos claves sobre el desarrollo de
              aplicaciones multiplataforma, adquirimos el conocimiento necesario
              para desarrollar aplucaciones funcionales para dispositivos del
              ecosistema de Apple y de Android. En este curso dominé lenguajes
              como Kotlin, Python, Swift, PostgreSql, Xml.
            </p>
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
              <p>
                Este curso de la Dr.Angela Yu, me ayudó a profundizar en el
                desarrollo web, adquiriendo herramientas y bases utiles para
                mejorar en el desarrollo. Ademas de herramientas, tambien
                aprendí nuevas formas de estrutructurar un proyecto, y a
                añadirles nuevos enfoques innovadores de diseño, En este curso
                tan completo comprendí en exactitud los lenguajes y las
                herramientas más utilizadas como: JavaScript, TypeScript,
                Node.Js,Bootstrap,React, FlexBox,Git.
              </p>
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
              <p>
                En este curso de Udemy creado por Jonathan Goyes, he aprendido a
                desarrollar una aplicación movil en profundidad mediante el uso
                de Tokens, Apis, y estilos modernos de UI, ademas he tenido el
                privilegio de profundizar en Kotlin ya que me parece un lenguaje
                muy interesante y sobre todo util para el desarrollo de software
                en Android.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Estudios;
