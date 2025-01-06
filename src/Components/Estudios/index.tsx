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
      <h2 className={styles.tituloSobreMi} id="Experiencia">
        {" "}
        <strong>Experiencia</strong>
      </h2>
      <h3 className={styles.subtituloSobreMi}>
        "Los grandes cambios requieren grandes esfuerzos"
      </h3>
      <center>
        {" "}
        <hr style={{ color: "#7a1cac", width: 290 }} />
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
        </div>{" "}
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <div className={styles.timelineYear}>2023</div>
          <div className={styles.timelineContent}>
            <h3>
              <strong>Practicas Empresa</strong>
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
            <p>
              Durante mis prácticas en Pulsap, adquirí experiencia en
              maquetación con WordPress, desarrollo de plugins personalizados en
              PHP y resolución de problemas en las webs de nuestros clientes.
              Además, fortalecí mis habilidades de atención al cliente al
              contactar directamente con ellos para ofrecer soluciones
              eficientes y personalizadas.
            </p>
          </div>
        </div>{" "}
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
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <div className={styles.timelineYear}>2024</div>
          <div className={styles.timelineContent}>
            <h3>
              <strong>Practicas Empresa</strong>
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
            <p>
              Durante mis prácticas en Minderest, aprendí a monitorizar sitios
              web y realizar extracción de datos utilizando herramientas de
              búsqueda avanzadas. También reforcé mis conocimientos en
              maquetación web y trabajé en un entorno profesional utilizando Git
              y otras herramientas colaborativas.
            </p>
          </div>
        </div>{" "}
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
