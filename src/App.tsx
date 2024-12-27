import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Lenguajes from "./Components/Lenguajes";
import SobreMi from "./Components/SobreMi";
import Estudios from "./Components/Estudios";
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
      <Lenguajes></Lenguajes>
    </body>
  );
}

export default App;
