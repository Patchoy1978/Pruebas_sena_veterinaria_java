// importamos las librerias necesarias
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import garras from "../img/icons8-huellas-de-garras-96.png";
import garras2 from "../img/icons8-huellas-de-garras-48.png";
import { useModal } from "./useModal";
import { Modal } from "./modal";

// creamos el componente
export const RegistroMascota = () => {
  // usamos el useForm
  const { register, handleSubmit } = useForm();
  // usamos el useModal personalizado
  const [isOpenRegistro, openRegistro, closeRegistro] = useModal(false);
  // usamos el useNavigate para la funcinalidad de los botones
  const navigate = useNavigate();
  // cramos la función par la navegación
  const Open = (ruta) => {
    navigate(ruta);
  };
  // creamos la función para el manejo  de los datos del formulario
  const enviar = (data) => {
    data.vacuna1 = data.vacuna1 ? "Rabia" : "";
    data.vacuna2 = data.vacuna2 ? "Parvovirosis" : "";

    console.log(data);
  };
  // retornamos la página
  return (
    <div className="body">
      <div className="bienvenida">
        <div className="formulario_spa">
          <form action="" onSubmit={handleSubmit(enviar)}>
            <h1 className="titulo">Registro de Mascotas</h1>

            <label className="label" htmlFor="nombre mascota">
              Nombre Mascota:
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="nombre mascota"
              placeholder="Ingresa el Nombre de la Mascota"
              {...register("nombre mascota")} //capturamos el valor introducido por el Usuario
            />
            <br />
            <label className="label" htmlFor="raza">
              Raza:
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="raza"
              placeholder="Ingresa la raza de la Mascota"
              {...register("raza")} //capturamos el valor introducido por el Usuario
            />
            <br />
            <label className="label" htmlFor="especie">
              Especie:
            </label>
            <br />
            <select
              className="input"
              name="Especie"
              id="especie"
              {...register("specie")} //capturamos el valor introducido por el Usuario
            >
              <option className="input" value=""></option>
              <option className="input" value="Perro">
                Perro
              </option>
              <option className="input" value="Gato">
                Gato
              </option>
              <option className="input" value="Conejo">
                Conejo
              </option>
              <option className="input" value="Cerdo">
                Cerdo
              </option>
            </select>
            <br />

            <div class="bienvenida-1">
              <label className="label" htmlFor="edad">
                Edad Mascota:
              </label>
              <label className="label-2" htmlFor="peso">
                Peso Mascota:
              </label>

              <div>
                <input
                  className="input-1"
                  type="number"
                  id="edad"
                  placeholder="Ingresa la Edad "
                  {...register("edad")} //capturamos el valor introducido por el Usuario
                />
                <span className="label" htmlFor="peso">
                  Años
                </span>
              </div>

              <div>
                <input
                  className="input-1"
                  type="number"
                  id="peso"
                  placeholder="Ingresa el Peso"
                  {...register("peso")} //capturamos el valor introducido por el Usuario
                />
                <span className="label" htmlFor="peso">
                  Kg
                </span>
              </div>
            </div>

            <div className="bienvenida-1">
              <label className="label" htmlFor="vacunas">
                Vacunas:
              </label>
              <label className="label-2" htmlFor="cant-vacunas">
                Cantidad Vacunas:
              </label>

              <input
                className="checkbox"
                type="checkbox"
                name="vacuna1"
                id="checkbox1"
                {...register("vacuna1")} //capturamos el valor introducido por el Usuario
              />
              <label className="label-check" htmlFor="checkbox1">
                Rabia
              </label>

              <select
                className="input-2"
                name="Cantidad Vacunas"
                id="checkbox1"
                {...register("cantidad1")} //capturamos el valor introducido por el Usuario
              >
                <option className="input-2" value=""></option>
                <option className="input-2" value="1">
                  1
                </option>
                <option className="input-2" value="2">
                  2
                </option>
                <option className="input-2" value="3">
                  3
                </option>
                <option className="input-2" value="4">
                  4
                </option>
              </select>

              <input
                className="checkbox"
                type="checkbox"
                name="checkbox2"
                id="checkbox2"
                {...register("vacuna2")} //capturamos el valor introducido por el Usuario
              />
              <label className="label-check" htmlFor="checkbox2">
                Parvovirosis
              </label>

              <select
                className="input-2"
                name="Cantidad Vacunas"
                id="checkbox2"
                {...register("cantidad2")} //capturamos el valor introducido por el Usuario
              >
                <option className="input-2" value=""></option>
                <option className="input-2" value="1">
                  1
                </option>
                <option className="input-2" value="2">
                  2
                </option>
                <option className="input-2" value="3">
                  3
                </option>
                <option className="input-2" value="4">
                  4
                </option>
              </select>
            </div>

            <label className="label" htmlFor="ident-propietario">
              Identificacón Propietario:
            </label>
            <br />
            <input
              className="input"
              type="number"
              id="ident-propietario"
              placeholder="Ingresa tú Identificación"
              {...register("identificacion")} //capturamos el valor introducido por el Usuario
            />
            <br />
            <label className="label" htmlFor="nom-propietario">
              Nombre Propietario:
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="nom-propietario"
              placeholder="Ingresa tú Nombre"
              {...register("nombrepropietario")} //capturamos el valor introducido por el Usuario
            />
            <br />
            <label className="label" htmlFor="telefono">
              Telefono:
            </label>
            <br />
            <input
              className="input"
              type="phone"
              id="telefono"
              placeholder="Ingresa tú Número de Teléfono"
              {...register("telefono")} //capturamos el valor introducido por el Usuario
            />
            <br />

            <div className="botones">
              <button className="botones-sistema" onClick={openRegistro}>
                Registrar Mascota
              </button>
            </div>
          </form>

          <br />

          <div className="button">
            <button className="botones-sistema" onClick={() => Open("/")}>
              {" "}
              {/*navegamos a la pagina en mención */}
              Inicio
            </button>
            <button
              className="botones-sistema"
              onClick={() => Open("/servicios")} //navegamos a la página en mención
            >
              Ingresar
            </button>
            {/* creamos la ventana modal */}
            <div>
              <Modal isOpen={isOpenRegistro} closeModal={closeRegistro}>
                <div>
                  <img src={garras2} alt="iconos de garras mas pequeños" />
                  <img src={garras} alt="iconos" />
                  <img src={garras2} alt="iconos de garras mas pequeños" />
                </div>
                <div>
                  <h2>Confirmación!!</h2>
                  <p>La Mascota Se Ha Creado Con Exito</p>
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
      </div>
    </div>
  );
};
