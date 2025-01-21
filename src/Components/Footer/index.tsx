import { Component } from "react";
import style from "./Footer.module.css";

type Props = {};

class Footer extends Component<Props> {
  render() {
    return <div className={style.footer}>@Mopch</div>;
  }
}

export default Footer;
