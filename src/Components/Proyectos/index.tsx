import React from "react";
import stylesC from "./Proyectos.module.css";

type Props = {
  imgFondo?: string;
  tituloProyecto?: string;
  textoProyecto?: string;
  urlProyecto?: string;
  icono1?: React.ReactNode;
  icono2?: React.ReactNode;
  icono3?: React.ReactNode;
};
export default function Proyectos({
  imgFondo,
  tituloProyecto,
  textoProyecto,
  urlProyecto,
  icono1,
  icono2,
  icono3,
}: Props) {
  return (
    <a href={urlProyecto} target="_blank" style={{ textDecoration: "none" }}>
      <div className={"card " + stylesC.cardSetting}>
        <img
          src={
            imgFondo ||
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          alt="Proyecto"
          draggable={false}
        />
        <div className="card-body">
          <h5 className="card-title">{tituloProyecto}</h5>
          <div className={stylesC.iconosLenguajes}>
            {icono1}
            {icono2}
            {icono3}
          </div>
          <p className={"card-text " + stylesC.textoProyecto}>
            {textoProyecto}
          </p>
        </div>
      </div>
    </a>
  );
}
