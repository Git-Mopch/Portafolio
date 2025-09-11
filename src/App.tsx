import { useState } from "react";
import FooterWinStyle from "./components/footer/FooterWinStyle";
import WindowPresentacion from "./components/windowModalPresetacion/WindowPresentacion";
import AppIcon from "./components/appIcon/AppIcon";
import style from "./App.module.css";
import iconAnimation from "./img/ImagenesPixeladas/Animation.gif";

import iconSUser from "./img/ImagenesPixeladas/AnimationSobreMi.gif";
import iconLivecan from "./img/ImagenesPixeladas/AnimationLivecan.gif";
import iconLaroye from "./img/ImagenesPixeladas/AnimationLaroye.gif";
import iconSunandWater from "./img/ImagenesPixeladas/ImgSun&Water.jpg";
import iconSobreMi from "./img/ImagenesPixeladas/gifSobreMi.gif";
import iconContacto from "./img/ImagenesPixeladas/GifContacto.gif";

function App() {
  const [showPresentacion, setShowPresentacion] = useState(true);

  return (
    <>
      <WindowPresentacion
        isVisible={showPresentacion}
        onClose={() => setShowPresentacion(false)}
      />
      <main>
        <section className={style.mainAppsSpace}>
          <AppIcon imgSrc={iconAnimation} name="Portafolio.pptx" link="/" />
          <AppIcon imgSrc={iconSUser} name="User.txt" link="/" />
          <AppIcon imgSrc={iconLivecan} name="Livecan.dat" link="/" />
          <AppIcon imgSrc={iconLaroye} name="Laroyecafe.exe" link="/" />
          <AppIcon imgSrc={iconSunandWater} name="Sun&Water.exe" link="/" />
          <AppIcon imgSrc={iconSobreMi} name="Sobre Mí" link="/" />
          <AppIcon imgSrc={iconContacto} name="Contacto.xml" link="/" />
        </section>
      </main>
      <FooterWinStyle
        showPresentacionIcon={showPresentacion} // controlamos visibilidad del icono
        onOpenPresentacion={() => setShowPresentacion(true)}
      />
    </>
  );
}

export default App;
