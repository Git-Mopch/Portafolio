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
(¿Que he usado?)
- i18n -- Traducciones
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
          {/* Botones para cambiar de idioma */}
          <button onClick={() => changeLanguage("en")}>
            <img
              src="https://img.freepik.com/vector-gratis/ilustracion-bandera-reino-unido_53876-18166.jpg"
              alt=""
              width={20}
            />
          </button>
          <button onClick={() => changeLanguage("es")}>
            {" "}
            <img
              src="https://laflamencadeborgona.es/cdn/shop/articles/Bandera-Espana-La-Flamenca-de-Borgona_-Bandera-de-Espana_-Cruz-de-Borgona_-Patricia-Munoz_-VOX_-Santiago-Abascal--1685742924_7e67cc76-acee-43fc-9a43-5e0fc0b59a19.png?v=1685744221"
              alt=""
              width={20}
            />
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
