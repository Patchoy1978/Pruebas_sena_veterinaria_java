// importamos las llibrerias necesarias
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AgendarCitaVeterinaria = () => {
  // utilicamos el useForm para el manejo del formulario
  const { register, handleSubmit } = useForm();

  // usamos el useNavigate para darle funcionalidad a los botones
  const navigate = useNavigate();

  // creamos la funcion para la navegabilidad
  const open = (ruta) => {
    navigate(ruta);
  };

  // creamos la función para el manejo del formulario
  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="body">
      <div className="bienvenida">
        <div className="formulario_spa">
          <form action="" onSubmit={handleSubmit(enviar)}>
            <h1 className="titulo">Agendar Cita Veterinaria</h1>

            <label htmlFor="identificacion" className="label">
              Identificacion
            </label>
            <input
              type="number"
              id="identificacion"
              className="input"
              {...register("identificacion")} // capturamos la información que ingresa el usuario
            />
            <br />
            <label htmlFor="nombre" className="label">
              Nombre Solicitante
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="input"
              placeholder="Ingresa tu nombre"
              {...register("nombre")} // capturamos la información que ingresa el usuario
            />
            <br />
            <label htmlFor="tipo_cita" className="label">
              Tipo De Cita
            </label>
            <br />
            <select
              name="tipo_cita"
              id="tipo_cita"
              className="input"
              {...register("tipo_cita")} // capturamos la información que ingresa el usuario
            >
              <option value=""></option>
              <option value="control">Control</option>
              <option value="vacunas">Vacunas</option>
              <option value="castrado">Castrado</option>
              <option value="desparacitado">Desparasitación</option>
              <option value="examenes">Exámenes</option>
            </select>
            <div className="bienvenida-1-1">
              <div>
                <label htmlFor="fecha_cita" className="label">
                  Fecha Cita
                </label>
                <br />
                <input
                  type="date"
                  className="input-1"
                  {...register("fecha_cita")} // capturamos la información que ingresa el usuario
                />
              </div>
              <div>
                <label htmlFor="hora_cita" className="label">
                  Hora Cita
                </label>
                <br />
                <input
                  type="time"
                  className="input-1"
                  {...register("hora_cita")} // capturamos la información que ingresa el usuario
                />
              </div>
            </div>
            <label htmlFor="nombre_macota" className="label">
              Nombre Mascota
            </label>
            <input
              type="text"
              className="input"
              {...register("nombre_mascota")} // capturamos la información que ingresa el usuario
            />
            <br />
            <br />
            <div className="botones">
              <button className="botones-sistema">Enviar solicitud</button>
            </div>
          </form>
          <br />
          <div className="botones">
            <buttom className="botones-sistema" onClick={() => open("/")}>
              Inicio
            </buttom>
          </div>
        </div>
      </div>
    </div>
  );
};
