type Props = {};
import style from "./App.module.css";
import MainHome from "./components/MainHome/mainHome";
import MainSobreMi from "./components/MainSobreMi/MainSobreMi";
import MainSortInfo from "./components/MainSortInfo/MainSortInfo";

function App({}: Props) {
  return (
    <>
      <MainHome />
      <MainSortInfo />
      <MainSobreMi />
    </>
  );
}

export default App;
