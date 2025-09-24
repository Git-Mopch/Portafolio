import style from "./Portafolio.module.css";
import DarkVeil from "../../components/DarkVeil/DarkVeil";

type Props = {};

function Portafolio({}: Props) {
  return (
    <main className={style.estiloMainSpace}>
      <section className={style.sectionWithBackground}>
        {/*
        <DarkVeil
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
*/}
        {/* Contenido por encima */}
        <div className={style.content}>
          <h1>Mi Portafolio</h1>
          <p>Aquí va la sección 1 con el fondo animado 👾</p>
        </div>
      </section>
      <section className={style.section2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla provident
        delectus, saepe nisi accusantium nihil, iure incidunt quibusdam nesciunt
        eum voluptas, cumque autem iste! Tenetur adipisci laborum ea impedit
        aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        provident delectus, saepe nisi accusantium nihil, iure incidunt
        quibusdam nesciunt eum voluptas, cumque autem iste! Tenetur adipisci
        laborum ea impedit aliquid? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nulla provident delectus, saepe nisi accusantium
        nihil, iure incidunt quibusdam nesciunt eum voluptas, cumque autem iste!
        Tenetur adipisci laborum ea impedit aliquid? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nulla provident delectus, saepe nisi
        accusantium nihil, iure incidunt quibusdam nesciunt eum voluptas, cumque
        autem iste! Tenetur adipisci laborum ea impedit aliquid? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Nulla provident delectus,
        saepe nisi accusantium nihil, iure incidunt quibusdam nesciunt eum
        voluptas, cumque autem iste! Tenetur adipisci laborum ea impedit
        aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        provident delectus, saepe nisi accusantium nihil, iure incidunt
        quibusdam nesciunt eum voluptas, cumque autem iste! Tenetur adipisci
        laborum ea impedit aliquid?
      </section>
    </main>
  );
}

export default Portafolio;
