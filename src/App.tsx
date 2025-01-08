import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Portafolios from "./Components/Portafolio";
import SobreMi from "./Components/SobreMi";
import Estudios from "./Components/Estudios";
import Footer from "./Components/Footer";
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
                <Estudios />
                <Portafolios />
                <Formulario />
                <Footer />
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
