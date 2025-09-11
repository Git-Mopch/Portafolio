import { useState, useRef, useEffect } from "react";
import style from "./WindowPresentacion.module.css";

import iconWindow from "../../img/ImagenesPixeladas/iconMono.png";
import iconAnimation from "../../img/ImagenesPixeladas/Animation.gif";

type Props = {
  onClose: () => void;
  isVisible: boolean;
};

function WindowPresentacion({ onClose, isVisible }: Props) {
  const [position, setPosition] = useState({ x: 200, y: 150 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging.current) {
        setPosition({
          x: e.clientX - offset.current.x,
          y: e.clientY - offset.current.y,
        });
      }
    };

    const handleMouseUp = () => {
      dragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={style.mainWindow}
      style={{
        left: position.x,
        top: position.y,
        display: isVisible ? "block" : "none",
      }}
    >
      <div
        onMouseDown={handleMouseDown}
        style={{
          backgroundColor: "#000080",
          color: "#fff",
          padding: "4px",
          display: "flex",
          justifyContent: "space-between",
          cursor: "grab",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        <img className={style.iconWindow} src={iconWindow} alt="" width={30} />
        <span className={style.textMainHeader}>Bienvenid@</span>
        <button onClick={onClose} className={style.botonX}>
          X
        </button>
      </div>
      <div
        style={{ padding: 10, fontSize: 14 }}
        className={style.espacioContenido}
      >
        <center>
          <img
            draggable="false"
            src={iconAnimation}
            width="500"
            alt=""
            className={style.imgGif}
          />
        </center>
        <p>
          Bienvenid<span style={{ color: "green", fontWeight: "bold" }}>@</span>{" "}
          a mi portafolio interactivo.
        </p>
        <p>
          Explora esta ventana al estilo Windows{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>98</span> , muévela
          por la pantalla y cierra con la X cuando quieras empezar la
          experiencia.
        </p>
        <p>
          ¡Espero tu{" "}
          <span style={{ color: "blue", fontWeight: "bold" }}>Feedback</span>!
        </p>
      </div>
    </div>
  );
}

export default WindowPresentacion;
