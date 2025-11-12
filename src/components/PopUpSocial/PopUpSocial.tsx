import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import style from "./PopUpSocial.module.css";

const SocialPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000); // aparece a los 5 segundos
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={style.popupoverlay}>
      <div className={style.popupcard}>
        <h3>¡Conecta conmigo!</h3>
        <p>Sígueme en mis redes sociales</p>

        <div className={style.popupicons}>
          <a
            href="https://github.com/Git-Mopch"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/miguel-pomares-chac%C3%B3n-537932268/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/m0pch/#"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <button onClick={() => setVisible(false)}>Cerrar</button>
      </div>
    </div>
  );
};

export default SocialPopup;
