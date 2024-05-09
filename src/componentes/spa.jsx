// realizamos las importaciones de librerias necesarias
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Spa = () => {
  // utlilzamos el useForm para el manejo del formulario
  const { register, handleSubmit } = useForm();

  // utilizamos el useNavigate para darle la funcionalidad a los botones
  const navigate = useNavigate();

  //  para enviar el formulario
  const enviar = (data) => {
    console.log(data);
  };

  //   funcion para la navegación
  const open = (ruta) => {
    navigate(ruta);
  };

  // retornamos la página
  return (
    <div className="body">
      <div className="bienvenida">
        <div className="formulario_spa">
          <form action="" onSubmit={handleSubmit(enviar)}>
            <h1 className="titulo">Agendar cita para Servicio de Spa</h1>
            <label htmlFor="identificacion" className="label">
              Identificación del Solicitante:{" "}
            </label>
            <br />
            <input
              type="number"
              className="input"
              id="identificacion"
              placeholder="Ingresa tú Número de Identificación"
              {...register("identificacion")}
            />
            {/*capturamos lo que el usuario ingresa en el input */}
            <br />
            <label htmlFor="nombre" className="label">
              Solicitante del Servicio:
            </label>
            <br />
            <input
              type="text"
              className="input"
              id="nombre"
              placeholder="Ingresa tú Nombre"
              {...register("nombre")}
            />
            {/*capturamos lo que el usuario ingresa en el input */}
            <br />
            <br />
            <div className="bienvenida-1-1">
              <div>
                <label htmlFor="fecha-servicio" className="label">
                  Fecha del Servicio:{" "}
                </label>
                <br />
                <input
                  className="input-1"
                  type="date"
                  name="fecha-servicio"
                  id="fecha-servicio"
                  {...register("fecha-servicio")}
                />
                {/*capturamos lo que el usuario ingresa en el input */}
              </div>

              <div>
                <label htmlFor="hora-servicio" className="label">
                  Hora del Servicio:
                </label>
                <br />
                <input
                  className="input-1"
                  type="time"
                  name="hora-servicio"
                  id="hora-servicio"
                  {...register("hora-servicio")}
                />
                {/*capturamos lo que el usuario ingresa en el input */}
              </div>
            </div>
            <label htmlFor="nombre-mascota" className="label">
              Nombre de la Mascota:{" "}
            </label>
            <br />
            <input
              type="text"
              className="input"
              id="nombre-mascota"
              placeholder="Ingresa el Nombre de la Mascota"
              {...register("nombre-mascota")}
            />{" "}
            {/*capturamos lo que el usuario ingresa en el input */}
            <br />
            <label htmlFor="valor-servicio" className="label">
              Valor del Servicio:{" "}
            </label>
            <br />
            <input
              type="number"
              className="input"
              id="valor-servicio"
              placeholder="valor del servicio"
              {...register("valor-servicio")}
            />{" "}
            {/*capturamos lo que el usuario ingresa en el input */}
            <br />
            <br />
            <div className="botones">
              <button className="botones-sistema">Generar Servicio</button>
            </div>
            <br />
          </form>
          <div className="botones">
            <button className="botones-sistema">Gestionar Pago</button>
            <button className="botones-sistema" onClick={() => open("/")}>
              Inicio
            </button>
            {/*implementamos la funcion open para navegar a la pagina correspondiente */}
          </div>
        </div>
      </div>
    </div>
  );
};
