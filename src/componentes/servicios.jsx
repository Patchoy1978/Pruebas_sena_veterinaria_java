// realizamos todas las importaciones necesarias
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Modal } from "./modal";
import garras from "../img/icons8-huellas-de-garras-96.png";
import garras2 from "../img/icons8-huellas-de-garras-48.png";
import { useModal } from "./useModal";

export const Servicios = () => {
  // creamos el useNavigate
  const navigate = useNavigate();

  //creamos el useModal
  const [isOpenRegistro, openRegistro, closeRegistro] = useModal();

  // creamos el useState
  const [option, setOption] = useState("");

  // creamos el useForm
  const { register, handleSubmit } = useForm();

  // creamos la funcion para la navegación con los botones
  const open = (ruta) => {
    navigate(ruta);
  };

  // Creamos la funcion para llevar los datos
  const enviar = (data) => {
    console.log(data);
  };

  // creamos la validación para la navegación
  const validate = () => {
    if (option === "Spa") {
      open("/Spa");
    } else if (option === "Alimentos para Mascotas") {
      open("/alimentosmascotas");
    } else if (option === "Accesorios para Mascotas") {
      open("/accesoriosmascotas");
    } else if (option === "Medicamentos para Mascotas") {
      open("/medicamentosmascotas");
    } else if (option === "Agendar Cita Veterinaria") {
      open("/agendarcitaveterinaria");
    } else if (option === "Urgencias") {
      open("/urgencias");
    } else {
      // alert("Debes Elegir Una De Las Categorias De Servicios");
      openRegistro();
    }
  };

  //hacemos el return para la pagina
  return (
    <div className="body">
      <div className="bienvenida">
        <div className="formulario_spa">
          <form action="" onSubmit={handleSubmit(enviar)}>
            <h1 className="titulo">Servicios</h1>

            <label htmlFor="servicios" className="label">
              Nombre del Servicio:
            </label>
            <br />
            <select
              className="input"
              name="servicios"
              id="servicios"
              onChange={(e) => setOption(e.target.value)}
            >
              {/* opciones para escoger los servicios */}
              <option value=""></option>
              <option value="Spa">Spa</option>
              <option value="Urgencias">Urgencias</option>
              <option value="Agendar Cita Veterinaria">
                Agendar Cita Veterinaria
              </option>
              <option value="Accesorios para Mascotas">
                Accesorios para Mascotas
              </option>
              <option value="Alimentos para Mascotas">
                Alimentos para Mascotas
              </option>
              <option value="Medicamentos para Mascotas">
                Medicamentos para Mascotas
              </option>
            </select>
            <br />

            <label htmlFor="identificacion" className="label">
              Identificación del Solicitante:
            </label>
            <br />
            <input
              type="number"
              className="input"
              id="identificacion"
              placeholder="Ingresa tú Número de Identificación"
              name="identificacion"
              {...register("identificacion")} // capturamos la información del campo
            />
            <br />
            <label htmlFor="nombre" className="label">
              Solicitante del Servicio:{" "}
            </label>
            <br />
            <input
              type="text"
              className="input"
              id="nombre"
              placeholder="Ingresa tú Nombre"
              name="nombre"
              {...register("nombre")} // capturamos la información del campo
            />
            <br />
            <br />

            <div className="botones">
              <button className="botones-sistema" onClick={validate}>
                Ingresar al Servicio
              </button>
            </div>
            <br />
            <br />
          </form>
          <div className="button">
            {/*abrimos la ventana en mencion (/ es la ventana de inicio) */}
            <button className="botones-sistema" onClick={() => open("/")}>
              Inicio
            </button>
          </div>
          <br />
          <br />

          <Modal isOpen={isOpenRegistro} closeModal={closeRegistro}>
            <div>
              <img src={garras2} alt="iconos de garras mas pequeños" />
              <img src={garras} alt="iconos" />
              <img src={garras2} alt="iconos de garras mas pequeños" />
            </div>
            <div>
              <h2>Advertencia!!</h2>
              <p>Debes Elegir Una De Las Categorias De Servicios</p>
            </div>
            <div>
              <img src={garras2} alt="iconos de garras mas pequeños" />
              <img src={garras} alt="iconos" />
              <img src={garras2} alt="iconos de garras mas pequeños" />
            </div>
            <br />
          </Modal>
        </div>
      </div>
    </div>
  );
};
