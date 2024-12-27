import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Lenguajes from "./Components/Lenguajes";
import SobreMi from "./Components/SobreMi";
import Estudios from "./Components/Estudios";
import Proyecto from "./Components/Proyectos";

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
      <div className="mainProyectos">
        {" "}
        <Proyecto imgFondo=""></Proyecto>
      </div>
    </body>
  );
}

export default App;
