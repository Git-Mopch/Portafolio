import React from "react";
import styles from "./Estudios.module.css";
import { FaDownload } from "react-icons/fa";
import curriculum from "../../CV-Miguel.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";
import cursoKotlin from "../../Curso-Kotlin-Certificado.jpg";
import cursoBootcampWeb from "../../CertificadoCursoWeb.png";

type Props = {};

function Estudios({}: Props) {
  return (
    <div>
      <h3 className={styles.tituloEstudios}>
        {" "}
        <strong>Estudios</strong>{" "}
      </h3>
      <table className={`table ${styles.tablaEstudios}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <strong>Certificado</strong>
            </th>
            <th scope="col">
              <strong>Lenguajes</strong>
            </th>
            <th scope="col">
              {" "}
              <strong>Centro</strong>
            </th>{" "}
            <th scope="col">
              {" "}
              <strong>Descargar</strong>
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>DESARROLLO DE APLICACIONES MULTIPLATAFORMA</td>
            <td>KOTLIN - JAVA - PYTHON - XML - SWIFT</td>
            <td>UCAM</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>DESARROLLO DE APLICACIONES WEB</td>
            <td>JAVASCRIPT - NODEJS - POSTGRESQL - JAVA</td>
            <td>UCAM</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>THE COMPLETE 2024 WEB DEVELOPMENT BOOTCAMP BY DR.ANGELA YU</td>
            <td>JAVASCRIPT - NODE - REACT - GIT</td>
            <td>UDEMY</td>
            <td style={{ textAlign: "center" }}>
              <a href={cursoBootcampWeb} target="_blank">
                <FaCloudDownloadAlt size={22} />
              </a>
            </td>
          </tr>{" "}
          <tr>
            <th scope="row">4</th>
            <td>
              {" "}
              KOTLIN: APP DELIVERY CON NODEJS, SQL, MERCADO PAGO Y PAYPAL BY
              JONATHAN GOYES
            </td>
            <td>KOTLIN</td>
            <td>UDEMY</td>
            <td style={{ textAlign: "center" }}>
              <a href={cursoKotlin} target="_blank">
                <FaCloudDownloadAlt size={22} />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <center>
        <a
          href={curriculum}
          className={`btn btn-primary ${styles.btnCv}`}
          target="_blank"
        >
          Descargar Cv
        </a>
      </center>
    </div>
  );
}

export default Estudios;
