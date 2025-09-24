type Props = {};
import style from "./App.module.css";

import DarkVeil from "../src/components/DarkVeil/DarkVeil";
import BlurText from "./components/SplitText/SplitText";
import DecodedText from "./components/animatedTextDescripted/textDescripted";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNode,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

import Pasarela from "./components/PasarelaLenguajes/pasarelaLenguajes";
import SchrollText from "./components/schrollText/SchrollText";
import TituloAnimado from "./components/TituloInteractivo/tituloInteractivo";
import Header from "./components/headerMenu/Header";

function App({}: Props) {
  const techLogos = [
    { node: <FaReact />, title: "React", href: "https://react.dev" },
    { node: <FaJsSquare />, title: "React", href: "https://react.dev" },
    { node: <FaHtml5 />, title: "React", href: "https://react.dev" },
    { node: <FaCss3Alt />, title: "React", href: "https://react.dev" },
    { node: <BiLogoPostgresql />, title: "React", href: "https://react.dev" },
    { node: <FaPython />, title: "React", href: "https://react.dev" },
    { node: <SiMysql />, title: "React", href: "https://react.dev" },
    { node: <FaNode />, title: "React", href: "https://react.dev" },
    { node: <FaPython />, title: "React", href: "https://react.dev" },
  ];
  return (
    <>
      <main>
        <Header />

        <section className={style.seccion1}>
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <DarkVeil />
          </div>
          <div className={style.contentSection1}>
            <h2 className={style.SubtituloSect1}>
              <BlurText
                text="Soy Miguel Pomares"
                delay={300}
                animateBy="words"
              />
            </h2>
            <h3 className={style.tituloSect1}>
              <DecodedText
                text={["Desarrollador Web", "Desarrollador Software"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h3>
          </div>

          <div className={style.pasarelaWrapper}>
            <Pasarela
              logos={techLogos}
              speed={50}
              direction="right"
              logoHeight={200}
              gap={50}
              pauseOnHover
              scaleOnHover
              fadeOut
              ariaLabel="Technology partners"
            />
          </div>
        </section>

        <section className={style.seccion2}>
          <section className={style.espacioTextoSec2}>
            <section className={style.espacio1Sec2}>
              {" "}
              <div className={style.tituloSection2}>
                <h3 className={style.tituloSec2}>Hola</h3>
                <TituloAnimado
                  texts={["Mundo", "World", "世界", "Monde"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.105}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
              <SchrollText
                baseOpacity={12}
                enableBlur={false}
                baseRotation={5}
                blurStrength={10}
              >
                <p className={style.textSect2}>
                  ¡Hola! Soy Miguel 👋 <br />
                  Tengo 22 años y soy un apasionado del desarrollo web. Me
                  encanta transformar ideas en experiencias digitales
                  atractivas, funcionales y accesibles. A lo largo de mi camino
                  he trabajado con tecnologías modernas de{" "}
                  <strong>Frontend y Backend</strong>, construyendo desde
                  interfaces dinámicas hasta aplicaciones completas. <br /> Soy
                  una persona curiosa, en constante aprendizaje, y me motiva el
                  desafío de resolver problemas con código limpio y escalable.
                  <br />
                  Mi objetivo es seguir creciendo como desarrollador, aportar
                  valor en cada proyecto y crear soluciones que realmente
                  marquen la diferencia.
                </p>
              </SchrollText>
            </section>
            <section className={style.espacio2Sec2}></section>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
