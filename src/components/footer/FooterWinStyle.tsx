import style from "./FooterWinStyle.module.css";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import iconInsta from "../../img/ImagenesPixeladas/instaIcon.png";
import iconSpoty from "../../img/ImagenesPixeladas/SpotifyIcon.png";
import iconGithub from "../../img/ImagenesPixeladas/GithubIcon.png";
import iconFace from "../../img/ImagenesPixeladas/iconFace.png";
import iconCaledar from "../../img/ImagenesPixeladas/iconCalendar.png";

type Props = {
  showPresentacionIcon: boolean;
  onOpenPresentacion: () => void;
};

function FooterWinStyle({ showPresentacionIcon, onOpenPresentacion }: Props) {
  const [time, setTime] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());

  const calendarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Actualizar hora en tiempo real
  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cerrar calendario si clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    }

    if (showCalendar)
      document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);

  return (
    <div className={style.MainBar}>
      <div className={style.mainContent}>
        <button className={style.buttonWin}></button>
        <hr />
        <a href="" className={style.iconBarMain}>
          <img src={iconInsta} alt="Instagram" width={60} />
        </a>
        <a href="" className={style.iconBarMain}>
          <img src={iconSpoty} alt="Spotify" width={60} />
        </a>
        <a href="" className={style.iconBarMain}>
          <img src={iconGithub} alt="Github" width={60} />
        </a>
        <hr />
        <div className={style.secondarySpace}>
          {showPresentacionIcon && (
            <section
              className={style.activeWindowBar}
              onClick={onOpenPresentacion}
              style={{ cursor: "pointer" }}
            >
              <img src={iconFace} alt="Presentación" width={40} />
              <span>Presentación</span>
            </section>
          )}
        </div>
        <hr />
        <div className={style.FinalSpace}>
          <button
            ref={buttonRef}
            className={style.calendarBtn}
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <img src={iconCaledar} alt="" width={30} />
          </button>
          <span className={style.clock}>{time}</span>
        </div>
        {showCalendar && (
          <div ref={calendarRef} className={style.calendarPopup}>
            <Calendar
              onChange={(value) => value instanceof Date && setDate(value)}
              value={date}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FooterWinStyle;
