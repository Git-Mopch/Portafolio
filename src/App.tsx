import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Lenguajes from "./Components/Lenguajes";
import SobreMi from "./Components/SobreMi";
import Estudios from "./Components/Estudios";
import Proyecto from "./Components/Proyectos";
import Formulario from "./Components/Formulario";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import imagenLivecan from "../src/img/LivecanProyectImage.png";
import imagenLaroye from "../src/img/LaroyeProyectImage.png";

import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { RiPhpFill } from "react-icons/ri";
import { SiPhpmyadmin } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";

import Livecan from "./PaginasProyectos/livecan";

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
    <Router>
      <body>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <SobreMi />
                <Lenguajes />
                <Estudios />
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
                      urlProyecto="/livecan"
                      tituloProyecto="Laroye-Cafe"
                      imgFondo={imagenLaroye}
                      textoProyecto="Laroye es una cafetería acogedora donde combinamos buen café, deliciosos postres caseros y un ambiente único. Es el lugar ideal para relajarse, trabajar o disfrutar de una buena conversación mientras degustas nuestras especialidades preparadas con ingredientes de la mejor calidad. ¡Te esperamos para compartir momentos inolvidables!"
                      icono1={<FaWordpress size={25} />}
                      icono2={<RiPhpFill size={25} />}
                      icono3={<SiPhpmyadmin size={25} />}
                    />
                  </div>
                </div>
                <Formulario />
              </>
            }
          />
          {/* Ruta para Livecan */}
          <Route path="/livecan" element={<Livecan />} />
        </Routes>
      </body>
    </Router>
  );
}

export default App;
