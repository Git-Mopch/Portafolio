import style from "./App.module.css";

import FooterWinStyle from "./components/footer/FooterWinStyle";
function App() {
  return (
    <>
      <main className={style.mainSection}>
        <div></div>
        <section>
          <FooterWinStyle />
        </section>
      </main>
    </>
  );
}

export default App;
