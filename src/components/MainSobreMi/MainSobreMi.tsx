import style from "./MainSobreMi.module.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { SiKotlin } from "react-icons/si";
import { SiSwift } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaWordpress } from "react-icons/fa6";
import { IoLogoWindows } from "react-icons/io5";
import { DiLinux } from "react-icons/di";
import { FaGithubSquare } from "react-icons/fa";

type Props = {};
const proyectos = [
  {
    titulo: "SUN AND WATER",
    descripcion: "Empresa dedicada a la energuía renovable",
    imagen:
      "https://www.enelgreenpower.com/content/dam/enel-egp/immagini/learning-hub/energia-eolica/Card_Module-learning-hub-parco-eolico.jpg.resize.560.740.center.center.jpeg",
  },
  {
    titulo: "LIVECAN",
    descripcion: "Pequeño negocio de venta de mordedores caseros para perros.",
    imagen:
      "https://moydog.com/wp-content/uploads/2022/12/Kong-CoreStrength-Ball-Pelota-Mordedora-Perros-scaled.jpg.webp",
  },
  {
    titulo: "LAROYE CAFE",
    descripcion:
      "Cafetería con tapas caseras y ambiente de encuentro, orientado tanto a familias como a aficionados al fútbol.",
    imagen:
      "https://images.adsttc.com/media/images/5ca7/72d5/284d/d153/3000/01f3/newsletter/UC8A1834.jpg?1554477741",
  },
];
export default function MainSobreMi({}: Props) {
  return (
    <div className={style.mainSobreMi}>
      <div className={style.MainSect1}>
        <div className={style.mainSpaceImg}>
          <img
            src="https://i.pinimg.com/736x/e8/28/69/e82869a170f827c375b78905e2d410c6.jpg"
            alt="Img Miguel Pomares"
          />
        </div>
        <div className={style.mainSpaceIntroduction}>
          <h2>
            HOLA
            <span className={style.mainSpan}>!</span>
          </h2>
          <p>
            Soy un desarrollador web apasionado por crear experiencias digitales
            únicas y funcionales. Me especializo en diseño y desarrollo
            front-end, combinando creatividad, eficiencia y atención al detalle
            para transformar ideas en proyectos reales. Me motiva aprender
            constantemente nuevas tecnologías, mejorar mis habilidades y
            enfrentar desafíos que me permitan crecer profesionalmente. Cada
            proyecto que realizo refleja mi compromiso con la calidad, la
            innovación y la usabilidad. Además de programar, disfruto colaborar
            con otros profesionales, entender las necesidades de los usuarios y
            crear soluciones que realmente marquen la diferencia. Mi objetivo es
            que cada proyecto no solo funcione, sino que también genere una
            experiencia memorable para quienes lo usan. Explora mi portafolio
            para conocer mis últimos trabajos y descubrir cómo puedo ayudarte a
            darle vida a tus ideas digitales.
          </p>
        </div>
      </div>
      <div className={style.parent}>
        <div className={style.div1}>
          {" "}
          <h3>Estudios</h3> <h4>Desarrollo de Aplicaciones Multiplataforma</h4>
          <p>2023 - 2024</p>
          <br />
          <h4>Desarrollo de Aplicaciones Web</h4>
          <p>2021 - 2023</p>
        </div>
        <div className={style.div2}>
          {" "}
          <h3>Conocimientos</h3>
          <div className={style.mainConocimientosIcons}>
            <div data-name="HTML5">
              <FaHtml5 />
            </div>
            <div data-name="CSS3">
              <FaCss3Alt />
            </div>
            <div data-name="JavaScript">
              <FaJsSquare />
            </div>
            <div data-name="React">
              <FaReact />
            </div>
            <div data-name="Python">
              <IoLogoPython />
            </div>
            <div data-name="Kotlin">
              <SiKotlin />
            </div>
            <div data-name="Swift">
              <SiSwift />
            </div>
            <div data-name="PHP">
              <SiPhp />
            </div>
            <div data-name="phpMyAdmin">
              <SiPhpmyadmin />
            </div>
            <div data-name="PostgreSQL">
              <DiPostgresql />
            </div>
            <div data-name="WordPress">
              <FaWordpress />
            </div>
            <div data-name="GitHub">
              <FaGithubSquare />
            </div>{" "}
            <div data-name="Linux">
              <DiLinux />
            </div>{" "}
            <div data-name="Windows">
              <IoLogoWindows />
            </div>
          </div>
        </div>
        <div className={style.div3}>
          <h2>Experiencia</h2>
          <div className={style.timeline}>
            <div className={style.timelineItem}>
              <div className={style.timelineDot}></div>
              <div className={style.timelineContent}>
                <p className={style.date}>2025 - Actual</p>
                <h3>RESPONSABLE DE SISTEMAS Y TRANSFORMACIÓN DIGITAL</h3>
                <p>SUN AND WATER</p>
              </div>
            </div>
            <div className={style.timelineItem}>
              <div className={style.timelineDot}></div>
              <div className={style.timelineContent}>
                <p className={style.date}>2023 - 2024</p>
                <h3>ASISTENTE DE VENTAS</h3>
                <p>CASH CONVERTERS</p>
              </div>
            </div>
            <div className={style.timelineItem}>
              <div className={style.timelineDot}></div>
              <div className={style.timelineContent}>
                <p className={style.date}>2023</p>
                <h3>DESARROLLADOR WEB</h3>
                <p>MINDEREST - PRACTICAS</p>
              </div>
            </div>{" "}
            <div className={style.timelineItem}>
              <div className={style.timelineDot}></div>
              <div className={style.timelineContent}>
                <p className={style.date}>2022</p>
                <h3>MAQUETADOR WEB</h3>
                <p>PULSAP - PRACTICAS</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.div4}>
          <h2>Habilidades</h2>
          <ul>
            <li>Creatividad y pensamiento visual</li>
            <li>Resolución de problemas</li>
            <li>Aprendizaje continuo</li>
            <li>Pasión por la informatica</li>
          </ul>
        </div>
        <div className={style.div5}>
          <h2>Idiomas</h2>
          <ul>
            <li>Español - Nativo</li>
            <li>Ingles - C1</li>
          </ul>
        </div>
      </div>
      <div className={style.mainMisProyectos}>
        <h2>Mis Trabajos</h2>

        <div className={style.proyectosGrid}>
          {proyectos.map((p, index) => (
            <div key={index} className={style.cardProyecto}>
              <img src={p.imagen} alt={p.titulo} />
              <div className={style.overlay}>
                <h3>{p.titulo}</h3>
                <p>{p.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.mainContactame}>
        <h2>CONTACTÁME</h2>

        <div className={style.contactContainer}>
          <p>¿Tienes un proyecto o una idea en mente?</p>

          <form className={style.contactForm}>
            <input
              type="text"
              placeholder="Tu nombre"
              className={style.inputField}
            />
            <input
              type="email"
              placeholder="Tu correo"
              className={style.inputField}
            />
            <textarea
              placeholder="Escribe tu mensaje..."
              className={style.textareaField}
            ></textarea>
            <button type="submit" className={style.sendButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
