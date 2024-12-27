import React from "react";
import styles from "./Proyectos.modules.css";

type Props = {
  imgFondo?: string;
  tituloProyecto?: string;
  subtituloProyecto?: string;
  textoProyecto?: string;
  urlProyecto?: string;
  icono1?: React.ReactNode;
  icono2?: React.ReactNode;
  icono3?: React.ReactNode;
};

function Proyectos({}: Props) {
  return (
    <div className="card">
      <img src="..." className={""} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
