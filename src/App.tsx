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
