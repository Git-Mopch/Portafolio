import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import style from "./Formulario.module.css";
// Definimos el tipo de datos del formulario
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Formulario = () => {
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
            text: "Enviado con éxito",
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
            text: `Hubo un problema enviando el correo: ${error.text}`,
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
          <strong>¡Trabajemos juntos!</strong>
        </h2>
        <h3 className={style.subtituloSobreMi}>
          ¿Tienes una idea, proyecto o colaboración en mente? Estoy abierto a
          explorar nuevas oportunidades y trabajar juntos en algo increíble.{" "}
          <br />
          <br />
          Compárteme los detalles de tu proyecto, y estaré encantado de discutir
          cómo podemos hacer que suceda. ¡Hablemos pronto!
        </h3>
      </div>
      <div className={style.espacioForm}>
        <div className={style.formulario}>
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Campo de Nombre */}
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="name" className={style.labels}>
                Nombre:
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
                Correo:
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
                Mensaje:
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
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
