type Props = {};
import style from "./MainSortInfo.module.css";
function MainSortInfo({}: Props) {
  return (
    <div className={style.mainTextDesc}>
      <div className={style.mainEspacio1Text}>
        <h2>Miguel Pomares</h2>
        <h3>FrontEnd Developer</h3>
        <hr style={{ width: 120 }} />
        <br />
        <p>
          Este <strong>Portfolio</strong> incluye una introducción sobre quién
          soy y a qué me dedico, además de mostrar mis últimos proyectos.
        </p>
      </div>
      <div className={style.mainEspacio2Text}>
        <blockquote>
          "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un
          acto, sino un hábito."
          <cite>— Aristóteles</cite>
        </blockquote>
      </div>
    </div>
  );
}

export default MainSortInfo;
