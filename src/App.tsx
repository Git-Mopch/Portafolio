import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Lenguajes from "./Components/Lenguajes";
import SobreMi from "./Components/SobreMi";
import Estudios from "./Components/Estudios";
import Proyecto from "./Components/Proyectos";
import imagenLivecan from "../src/img/LivecanProyectImage.png";
import imagenLaroye from "../src/img/LaroyeProyectImage.png";

import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";
import { SiPhpmyadmin } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";

console.log(`
    
                                             |  \\       /      \\  /      \\  _/  \\  
 ______ ____    ______    ______    _______  | $$____  |  $$$$$$\\|  $$$$$$\\|   $$  
 |      \\    \\  /      \\  /      \\  /       \\| $$    \\ | $$__/ $$| $$__/ $$ \\$$$$  
 | $$$$$$\\$$$$\\|  $$$$$$\\|  $$$$$$\\|  $$$$$$$| $$$$$$$\\ >$$    $$ \\$$    $$  | $$  
 | $$ | $$ | $$| $$  | $$| $$  | $$| $$      | $$  | $$|  $$$$$$  _\\$$$$$$$  | $$  
 | $$ | $$ | $$| $$__/ $$| $$__/ $$| $$_____ | $$  | $$| $$__/ $$|  \\__/ $$ _| $$_ 
 | $$ | $$ | $$ \\$$    $$| $$    $$ \\$$     \\| $$  | $$ \\$$    $$ \\$$    $$|   $$ \\
  \\$$  \\$$  \\$$  \\$$$$$$ | $$$$$$$   \\$$$$$$$ \\$$   \\$$  \\$$$$$$   \\$$$$$$  \\$$$$$$
                         | $$                                                      
                         | $$                                                      
                          \\$$      
 `);

function App() {
  return (
    <body>
      <Header></Header>
      <Main></Main>
      <SobreMi></SobreMi>
      <Lenguajes></Lenguajes>
      <Estudios></Estudios>
      <div id="Proyectos">
        <h3 className="tituloProyectos">
          <strong>Proyectos</strong>
        </h3>
        <center>
          {" "}
          <hr style={{ color: "#7a1cac", width: 150 }} />
        </center>
        <div className="mainProyectos">
          <Proyecto
            urlProyecto="https://livecan.es/"
            tituloProyecto="Livecan"
            imgFondo={imagenLivecan}
            textoProyecto="Livecan es un ecommerce dedicado a la venta de juguetes y mordedores caseros para perros. Ofrecemos productos diseñados para garantizar la diversión y el bienestar de las mascotas, utilizando materiales seguros y resistentes. Nuestro objetivo es brindar soluciones prácticas para los dueños de perros que buscan calidad y entretenimiento para sus peludos amigos."
            icono1={<FaWordpress size={25} />}
            icono2={<RiPhpFill size={25} />}
            icono3={<SiPhpmyadmin size={25} />}
          />
          <Proyecto
            urlProyecto="https://laroyecafe.com/"
            tituloProyecto="Laroye-Cafe"
            imgFondo={imagenLaroye}
            textoProyecto="Laroye es una cafetería acogedora donde combinamos buen café, deliciosos postres caseros y un ambiente único. Es el lugar ideal para relajarse, trabajar o disfrutar de una buena conversación mientras degustas nuestras especialidades preparadas con ingredientes de la mejor calidad. ¡Te esperamos para compartir momentos inolvidables!"
            icono1={<FaWordpress size={25} />}
            icono2={<RiPhpFill size={25} />}
            icono3={<SiPhpmyadmin size={25} />}
          />
          <Proyecto
            urlProyecto="https://livecan.es/"
            tituloProyecto="Fit-Monitoring"
            textoProyecto="Proximamente"
            icono1={<FaReact size={25} />}
            icono2={<BiLogoPostgresql size={25} />}
            icono3={<BiLogoTypescript size={25} />}
          />
        </div>
      </div>
    </body>
  );
}

export default App;
