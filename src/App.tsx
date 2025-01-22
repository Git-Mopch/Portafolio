import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Portafolios from "./Components/Portafolio";
import SobreMi from "./Components/SobreMi";
import Estudios from "./Components/Estudios";
import Footer from "./Components/Footer";
import Formulario from "./Components/Formulario";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Livecan from "./PaginasProyectos/livecan";
import Laroye from "./PaginasProyectos/laroye";
import "../src/i18n"; // Asegúrate de importar i18n
import { useTranslation } from "react-i18next"; // Importar hook de i18next

import iconEsp from "./img/iconoEsp.png";
import iconEngl from "./img/iconoEngl.png";

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

(¿Que herramientas he usado?)

- i18n (https://www.i18next.com/) -- Traducciones
- Boostrap (https://getbootstrap.com/) -- Diseños
- React-icons (https://react-icons.github.io/react-icons/) -- Iconos
- React Hook Form (https://www.react-hook-form.com/) -- Formulario
- EmailJs (https://www.emailjs.com/) -- Servidor Smtp gratis

(¿Que lenguajes he usado?)

- React
- Typescript
- Css
 `);
function App() {
  const { i18n } = useTranslation();

  // Definir explícitamente el tipo de lang como string
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Cambiar el idioma
  };

  return (
    <Router>
      <body>
        <header>
          <button onClick={() => changeLanguage("es")}>
            {" "}
            <img src={iconEsp} alt="Icono España" width={20} />
          </button>
          <button onClick={() => changeLanguage("en")}>
            <img src={iconEngl} alt="Icono Inglaterra" width={20} />
          </button>
        </header>
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
