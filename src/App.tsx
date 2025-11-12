type Props = {};
import MainHome from "./components/MainHome/mainHome";
import MainSobreMi from "./components/MainSobreMi/MainSobreMi";
import MainSortInfo from "./components/MainSortInfo/MainSortInfo";
import SocialPopup from "./components/PopUpSocial/PopUpSocial";
function App({}: Props) {
  return (
    <>
      <MainHome />
      <MainSortInfo />
      <MainSobreMi />
      <SocialPopup />
    </>
  );
}

export default App;
