import style from "./AppIcon.module.css";

type Props = {
  name: string;
  imgSrc: string;
  link: string;
};

function AppIcon({ name, imgSrc, link }: Props) {
  return (
    <a
      href={link}
      className={style.mainSpace}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={style.mainIcon}
        style={{ backgroundImage: `url(${imgSrc})` }} // ✅ corregido
      ></div>
      <p className={style.appName}>{name}</p>
    </a>
  );
}

export default AppIcon;
