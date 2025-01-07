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
      <div className={style.espacioForm}>Hola</div>
      <div className={style.espacioForm}>
        <h2 className={style.tituloFormulario}>Trabajemos juntos</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Campo de Nombre */}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Nombre:</label>
            <input
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
            <label htmlFor="email">Correo:</label>
            <input
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
            <label htmlFor="message">Mensaje:</label>
            <textarea
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

          {/* Botón de Enviar */}
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
