import React from "react";
import styles from "./Lenguajes.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiKotlin } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaPython } from "react-icons/fa";

type Props = {};

function Lenguajes({}: Props) {
  return (
    <div className={styles.sliderContainer}>
      <div className={styles.logoSlider}>
        <span>
          <FaHtml5 size={70}></FaHtml5>
        </span>
        <span>
          <FaCss3Alt size={70}></FaCss3Alt>
        </span>
        <span>
          <FaJsSquare size={70}></FaJsSquare>
        </span>
        <span>
          <FaReact size={70}></FaReact>
        </span>{" "}
        <span>
          <FaJava size={70}></FaJava>
        </span>{" "}
        <span>
          <SiKotlin size={70}></SiKotlin>
        </span>{" "}
        <span>
          <FaWordpress size={70}></FaWordpress>
        </span>{" "}
        <span>
          <SiCanva size={70}></SiCanva>
        </span>{" "}
        <span>
          <SiMysql size={70}></SiMysql>
        </span>{" "}
        <span>
          <SiPostgresql size={70}></SiPostgresql>
        </span>
        <span>
          <FaPython size={70}></FaPython>
        </span>
        <span>
          <DiNodejs size={120} style={{ marginTop: "-25px" }}></DiNodejs>
        </span>
      </div>
    </div>
  );
}

export default Lenguajes;
