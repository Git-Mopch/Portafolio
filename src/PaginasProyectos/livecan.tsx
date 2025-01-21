import PaginaProyectos from "../Components/PaginaProyectos";
import imagenLivecan from "../img/LivecanProyectImage.png";
import { FaWordpress } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { useTranslation } from "react-i18next"; // Importar hook
type Props = {};

function livecan({}: Props) {
  const { t } = useTranslation();
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
        funcionalidad1={t("funcionalidad1Livecan")}
        funcionalidad2={t("funcionalidad2Laroye")}
        funcionalidad3={t("funcionalidad3Laroye")}
      >
        {t("textoLivecan")}
      </PaginaProyectos>
    </div>
  );
}

export default livecan;
