import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import style from "./Formulario.module.css";
import { useTranslation } from "react-i18next"; // Importar hook de i18next
// Definimos el tipo de datos del formulario
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Formulario = () => {
  const { t } = useTranslation(); // Usar el hook de i18next

  // Inicializamos el hook useForm con el tipo FormData
  const {
    register, // Para registrar los inputs
    handleSubmit, // Para manejar el envío del formulario
    formState: { errors }, // Para gestionar errores
  } = useForm<FormData>();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data: FormData) => {
    emailjs
      .send(
        "service_9c4s3jj",
        "template_e1sdkav",
        { ...data } as Record<string, unknown>,
        "TVmXM_S5AImkDPyp8"
      )
      .then(
        () => {
          Toastify({
            text: t("toastexito"), // Corregido para usar la traducción
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        },
        (error) => {
          Toastify({
            text: `${t("toastError")} ${error.text}`, // Corregido para usar la traducción
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            style: {
              background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            },
          }).showToast();
        }
      );
  };

  return (
    <div className={style.mainContacto}>
      <div className={style.espacioForm}>
        {" "}
        <h2 className={style.tituloSobreMi} id="Experiencia">
          {" "}
          <strong>{t("formTitulo")}</strong>
        </h2>
        <h3 className={style.subtituloSobreMi}>
          {t("formtextopt1")} <br />
          <br />
          {t("formtextopt2")}
        </h3>
      </div>
      <div className={style.espacioForm}>
        <div className={style.formulario}>
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Campo de Nombre */}
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="name" className={style.labels}>
                {t("formNombre")}
              </label>
              <input
                className={style.inputs}
                type="text"
                id="name"
                {...register("name", { required: "El nombre es obligatorio" })}
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              {errors.name && (
                <span style={{ color: "red" }}>
                  {String(errors.name.message || "")}
                </span>
              )}
            </div>

            {/* Campo de Correo */}
            <div style={{ marginBottom: "15px" }}>
              <label className={style.labels} htmlFor="email" id="formulario">
                {t("formMail")}
              </label>
              <input
                className={style.inputs}
                type="email"
                id="email"
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "El formato del correo no es válido",
                  },
                })}
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              {errors.email && (
                <span style={{ color: "red" }}>
                  {String(errors.email.message || "")}
                </span>
              )}
            </div>

            {/* Campo de Texto */}
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="message" className={style.labels}>
                {t("formTextoMensaje")}
              </label>
              <textarea
                className={style.inputs}
                id="message"
                {...register("message", {
                  required: "El mensaje es obligatorio",
                })}
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  height: "100px",
                }}
              ></textarea>
              {errors.message && (
                <span style={{ color: "red" }}>
                  {String(errors.message.message || "")}
                </span>
              )}
            </div>

            <button type="submit" className={style.estiloBoton}>
              {t("formBtnTexto")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
