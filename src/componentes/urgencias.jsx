// importamos las librerias necesarias
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Urgencias = () => {
  // usamos el useNavigate para darle funcionalidad a los botones
  const navigate = useNavigate();

  // usamos el useForm para la interación con el formulario
  const { register, handleSubmit } = useForm();

  // creamos la función para el manejo del formulario
  const enviar = (data) => {
    console.log(data);
  };

  // creamos la funcion para la navegabilidad con los botones
  const open = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="body">
      <div className="bienvenida">
        <div className="formulario_spa">
          <form action="" onSubmit={handleSubmit(enviar)}>
            <h1 className="titulo">Urgencias</h1>
            <label htmlFor="identificacion" className="label">
              Identificación
            </label>
            <br />
            <input
              type="number"
              className="input"
              name="identificacion"
              {...register("identificacion")} // capturamos la información que el usuario ingresa
            />
            <br />
            <label htmlFor="nombre_propietario" className="label">
              Nombre Solicitante
            </label>
            <br />
            <input
              type="text"
              className="input"
              name="nombre_propietario"
              {...register("nombre_propietario")} // capturamos la información que el usuario ingresa
            />
            <br />
            <label htmlFor="nombre_mascota" className="label">
              Nombre Mascota
            </label>
            <br />
            <input
              type="text"
              className="input"
              name="nombre_mascota"
              {...register("nombre_mascota")} // capturamos la información que el usuario ingresa
            />
            <label htmlFor="tipo_urgencias" className="label">
              Tipo de Urgencias
            </label>
            <select
              name="tipo_urgencia"
              id="tipo_urgencia"
              className="input"
              {...register("tipo_urgencia")} // capturamos la información que el usuario ingresa
            >
              <option value=""></option>
              <option value="cortadas">Cortadas</option>
              <option value="ahogamiento">Ahogamiento</option>
              <option value="traumas">Trumas</option>
              <option value="intoxicacion">Intoxicación</option>
              <option value="golpes_Calor">Golpes de Calor</option>
            </select>
            <br />
            <br />
            <br />
            <div className="botones">
              <button className="botones-sistema">Enviar Solicitud</button>
            </div>
          </form>
          <br />
          <div className="botones">
            <button className="botones-sistema" onClick={() => open("/")}>
              Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
