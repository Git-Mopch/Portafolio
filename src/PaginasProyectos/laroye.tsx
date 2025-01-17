import React from "react";
import PaginaProyectos from "../Components/PaginaProyectos";
import { FaGithub } from "react-icons/fa";
import imagenLaroye from "../img/LaroyeProyectImage.png";
import { FaWordpress } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { useTranslation } from "react-i18next"; // Importar hook
type Props = {};

function laroye({}: Props) {
  const { t } = useTranslation();
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
        funcionalidad1={t("funcionalidad1Laroye")}
        funcionalidad2={t("funcionalidad2Laroye")}
        funcionalidad3={t("funcionalidad3Laroye")}
      >
        {t("textoLaroye")}
      </PaginaProyectos>
    </div>
  );
}

export default laroye;
