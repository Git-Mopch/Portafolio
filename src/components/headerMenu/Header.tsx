import style from "./HeaderStyle.module.css";
import CustomNavs from "../CustomsNavs/CustomNavs";

function Header() {
  const items = [
    { label: "Inicio", href: "#" },
    { label: "Proyectos", href: "#" },
    { label: "Experiencia", href: "#" },
    { label: "Contacto", href: "#" },
  ];
  return (
    <div className={style.mainHeader}>
      <div className={style.header}>
        {" "}
        <CustomNavs
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={50}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
}

export default Header;
