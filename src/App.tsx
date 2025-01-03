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
import Laroye from "./PaginasProyectos/laroye";

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
                      tituloProyecto="Livecan"
                      imgFondo={imagenLivecan}
                      textoProyecto="LiveCan ofrece mordedores innovadores y resistentes para perros, diseñados para promover su salud dental y entretenimiento. Calidad y diversión en cada mordida. 🐾"
                    />
                    <Proyecto
                      urlProyecto="/laroye"
                      tituloProyecto="Laroye"
                      imgFondo={imagenLaroye}
                      textoProyecto="Laroye Café es un lugar acogedor y familiar donde puedes disfrutar de una experiencia gastronómica única, con productos artesanales y un ambiente joven. ☕"
                    />
                  </div>
                </div>
                <Formulario />
              </>
            }
          />

          <Route path="/livecan" element={<Livecan />} />
          <Route path="/laroye" element={<Laroye />} />
        </Routes>
      </body>
    </Router>
  );
}

export default App;
