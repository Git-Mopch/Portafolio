import React from "react";
import Atropos from "atropos/react"; // Importar Atropos
import "atropos/css"; // Importar estilos de Atropos
import styles from "./SobreMi.module.css";
import fotoUser from "../../img/fotoUser.png";
type Props = {};

function SobreMi({}: Props) {
  return (
    <div className={styles.cardSobreMi} id="destinoFlecha">
      <div className={styles.MainSobreMi}>
        <img
          src={fotoUser}
          alt="User Icon"
          className={styles.iconAvatar}
          draggable="false"
        />

        <p className={styles.tituloCard}>
          Miguel Pomares -<strong>「Front-end」</strong>
        </p>
        <div className={styles.cualitiesContainer}>
          <span className={styles.cualities}>Creativo</span>
          <span className={styles.cualities}>Analítico</span>
          <span className={styles.cualities}>Proactivo</span>
          <span className={styles.cualities}>Meticuloso</span>
          <span className={styles.cualities}>Colaborativo</span>
          <span className={styles.cualities}>Adaptable</span>
        </div>
        <div id="sobreMi" className={styles.textoCardSobreMi}>
          <p className={styles.preferences}>
            <strong>╰┈➤ Película Favorita:</strong>{" "}
            <a
              href="https://www.google.com/search?q=halloween+1978&sca_esv=d8dafcc4ab3fc50a&sxsrf=ADLYWII2EWqK2-wHrkJ-XrBNrrvVjYe0dQ%3A1735071842887&ei=YhhrZ8nsNYOOxc8PkZfY8As&gs_ssp=eJzj4tDP1TfINU6vNGD04stIzMnJL09NzVMwtDS3AABpsAfP&oq=halloween&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWhhbGxvd2VlbioCCA8yBxAjGLADGCcyBxAjGLADGCcyBxAjGLADGCcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyDRAAGIAEGLADGEMYigUyDhAAGLADGOQCGNYE2AEBMg4QABiwAxjkAhjWBNgBATIOEAAYsAMY5AIY1gTYAQEyExAuGIAEGLADGEMYyAMYigXYAQEyExAuGIAEGLADGEMYyAMYigXYAQEyExAuGIAEGLADGEMYyAMYigXYAQEyExAuGIAEGLADGEMYyAMYigXYAQFI7SZQAFgAcAF4AZABAJgBAKABAKoBALgBAcgBAJgCAaACBpgDAIgGAZAGE7oGBggBEAEYCZIHATGgBwA&sclient=gws-wiz-serp"
              target="_blank"
            >
              HALLOWEEN
            </a>
          </p>
          <p className={styles.preferences}>
            <strong>╰┈➤ Cantante Favorito:</strong>{" "}
            <a
              href="https://open.spotify.com/intl-es/artist/15UsOTVnJzReFVN1VCnxy4?si=UI0PbwgBQ16h1bKtDj0WMA"
              target="_blank"
            >
              XXXTENTACION
            </a>
          </p>
          <p className={styles.preferences}>
            <strong>╰┈➤ Tiempo Libre:</strong> LEER Y PROGRAMAR
          </p>
          <p className={styles.preferences}>
            <strong>╰┈➤ Estación Favorita:</strong> INVIERNO
          </p>
        </div>
      </div>

      <Atropos
        className={`${styles.MainSobreMiLastChild} my-atropos`}
        activeOffset={40}
        shadow={false}
      >
        <h3 className={styles.tituloTextoSobreMi}>¿Quién Soy?</h3>
        <h4 className={styles.subtituloTextoSobreMi}>Hello World</h4>
        <p className={styles.descripcionSobreMi}>
          Holaa!🤓 me llamo Miguel, soy un joven de 21 años apasionado por el
          aprendizaje y la innovación. Tengo experiencia en el trato activo con
          el cliente, y en el área del desarrollo web, destaco por mi capacidad
          para adaptarme rápidamente a nuevos desafíos. Estoy comprometido con
          la mejora continua y busco siempre aportar valor a los proyectos en
          los que participo. Soy una persona proactiva, con una fuerte ética de
          trabajo y orientada a resultados.
        </p>
      </Atropos>
    </div>
  );
}

export default SobreMi;
