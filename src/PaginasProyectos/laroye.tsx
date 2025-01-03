import React from "react";
import PaginaProyectos from "../Components/PaginaProyectos";
import { FaGithub } from "react-icons/fa";
import imagenLaroye from "../img/LaroyeProyectImage.png";
import { FaWordpress } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

type Props = {};

function laroye({}: Props) {
  const iconoWordpress = <FaWordpress size={50} color="white" />;
  const iconoPhp = <SiPhp size={50} color="white" />;
  const iconoPhpAdmin = <SiPhpmyadmin size={50} color="white" />;
  const iconoCss = <IoLogoCss3 size={50} color="white" />;
  return (
    <div>
      <PaginaProyectos
        nombreProyecto={"Laroye cafe"}
        gitTrue={false}
        UrlWeb="https://laroyecafe.com/"
        icono1={iconoWordpress}
        icono2={iconoPhp}
        icono3={iconoPhpAdmin}
        icono4={iconoCss}
        imgProyect={imagenLaroye}
        funcionalidad1="Diseño Web Responsivo: Se adapta a diferentes dispositivos y tamaños de pantalla, asegurando una experiencia fluida tanto en móviles como en escritorio."
        funcionalidad2="Formulario de Contacto Interactivo: Permite a los usuarios hacer reservas o consultar información rápidamente."
        funcionalidad3="Sistema de Integración con Redes Sociales: Facilita la interacción directa con plataformas como Instagram y Facebook, mejorando la comunicación con los clientes."
      >
        Laroye Café ofrece una experiencia única en un ambiente joven y
        agradable para todos los públicos. Con una carta de productos
        artesanales elaborados por expertos en gastronomía, este café se
        distingue por su dedicación a la calidad y el servicio. Además, cuenta
        con promociones especiales y un espacio ideal para compartir con
        familiares y amigos. Ven a disfrutar de un lugar donde cada día mejoran
        para superar tus expectativas y donde tu fidelidad es recompensada.
      </PaginaProyectos>
    </div>
  );
}

export default laroye;
