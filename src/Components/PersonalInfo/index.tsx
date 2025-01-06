import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { IconType } from "react-icons";

import style from "./PersonalInfo.module.css";
type Props = {
  tituloCard: string;
  enlaceSeccion: string;
  icono: IconType;
  num?: string;
  txt?: string;
};

function PersonalInfo(props: Props) {
  return (
    <div className={style.cardMain}>
      <div className={style.IconCard}>
        <props.icono style={{ color: "white" }} size={80} />
      </div>
      <div>
        <h2 className={style.tituloCard}>
          {props.tituloCard}{" "}
          <a href={props.enlaceSeccion}>
            <MdOpenInNew className={style.iconOpen} size={20} />
          </a>
        </h2>
      </div>
      <h4 className={style.textoCard}>
        <strong>
          <span>{props.num}</span>
          <span style={{ color: "#ad49e1" }}> {props.txt}</span>
        </strong>{" "}
      </h4>
    </div>
  );
}

export default PersonalInfo;
