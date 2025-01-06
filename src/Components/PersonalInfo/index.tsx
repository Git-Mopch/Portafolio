import React from "react";
import style from "./PersonalInfo.module.css";
type Props = {
  tituloCard: string;
};

function PersonalInfo(props: Props) {
  return (
    <div className={style.cardMain}>
      <div className={style.IconCard}></div>
      <div>
        <h2>{props.tituloCard}</h2>
      </div>
    </div>
  );
}

export default PersonalInfo;
