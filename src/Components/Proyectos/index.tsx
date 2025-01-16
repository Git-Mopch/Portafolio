import React from "react";
import stylesC from "./Proyectos.module.css";
import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importar hook de i18next
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
}: Props) {
  const { t } = useTranslation(); // Usar el hook de i18next

  const navigate = useNavigate();

  return (
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
        <h5 className={"card-text " + stylesC.tituloProyecto}>
          {tituloProyecto}
        </h5>
        <p className={"card-text " + stylesC.textoProyecto}>{textoProyecto}</p>
        <a
          onClick={() => urlProyecto && navigate(urlProyecto)}
          className={stylesC.verProyectoSettings}
          style={{ cursor: "pointer" }}
        >
          {t("verMas")} <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
}
