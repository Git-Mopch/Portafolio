import style from "./mainHomeStyle.module.css";
import TextAutoWrite from "../TextAutoWrite/TextAuto";
import { PiMouseScrollFill } from "react-icons/pi";

type Props = {};

function MainHome({}: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <div className={style.mainSectionHome}>
      <section className={style.mainTitleSpace}>
        <div className={style.section1Space}>
          <h1>PORTFOLIO</h1>
          <p>{currentYear}</p>
        </div>
        <div className={style.section2Space}>
          <hr />
          <h2>Miguel Pomares Chacón</h2>
          <TextAutoWrite
            text={["FRONTEND DEVELOPER", "BACKEND DEVELOPER", "DEVOPS"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>{" "}
      </section>
      <div className={style.mainSchrollSpace}>
        <div>
          <p>Desplaza</p>
          <PiMouseScrollFill />
        </div>
      </div>
    </div>
  );
}

export default MainHome;
