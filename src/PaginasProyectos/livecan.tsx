import React from "react";
import PaginaProyectos from "../Components/PaginaProyectos";
import { FaGithub } from "react-icons/fa";
import imagenLivecan from "../img/LivecanProyectImage.png";
import { FaWordpress } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

type Props = {};

function livecan({}: Props) {
  const iconoWordpress = <FaWordpress size={50} color="white" />;
  const iconoPhp = <SiPhp size={50} color="white" />;
  const iconoPhpAdmin = <SiPhpmyadmin size={50} color="white" />;
  const iconoCss = <IoLogoCss3 size={50} color="white" />;
  return (
    <div>
      <PaginaProyectos
        nombreProyecto={"Livecan"}
        gitTrue={false}
        UrlWeb="https://livecan.es/"
        icono1={iconoWordpress}
        icono2={iconoPhp}
        icono3={iconoPhpAdmin}
        icono4={iconoCss}
        imgProyect={imagenLivecan}
        funcionalidad1="Carrito de Compras Integrado: Los usuarios pueden agregar productos a su carrito y proceder a la compra de manera sencilla."
        funcionalidad2="Responsive Design: La web se adapta correctamente a diferentes tamaños de pantalla, proporcionando una experiencia de usuario óptima en móviles y dispositivos de escritorio."
        funcionalidad3="Sistema de Pagos Seguro: Ofrece múltiples opciones de pago y seguridad en las transacciones para garantizar la protección de los datos del cliente."
      >
        En LiveCan nos apasiona mejorar la vida de los perros y sus dueños. Por
        eso diseñamos mordedores de alta calidad, fabricados con materiales
        seguros y duraderos, ideales para mantener a tu perro entretenido
        mientras cuidas su salud dental. Nuestros productos están pensados para
        adaptarse a las necesidades de diferentes razas y tamaños, asegurando
        diversión y bienestar. Descubre cómo nuestros mordedores pueden
        fortalecer el vínculo con tu mejor amigo de cuatro patas, ofreciéndole
        horas de juego y satisfacción. 🐶✨
      </PaginaProyectos>
    </div>
  );
}

export default livecan;
