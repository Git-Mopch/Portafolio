import { Link } from "react-router-dom";
import style from "./AppIcon.module.css";

type Props = {
  name: string;
  imgSrc: string;
  link: string;
};

function AppIcon({ name, imgSrc, link }: Props) {
  return (
    <Link to={link} className={style.mainSpace}>
      <div
        className={style.mainIcon}
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <p className={style.appName}>{name}</p>
    </Link>
  );
}

export default AppIcon;
