//importamos las librerias necesarias
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//creamos el componente de la página de alimentos
export const AlimentosParaMascotas = () => {
  // usamos el useForm para el manejo del formulario
  const { register, handleSubmit } = useForm();

  // usamos el useNavigate para la funcionalidad de  los botoes
  const navigate = useNavigate();

  // cremos la función para la navegabilidad con los botones
  const open = (ruta) => {
    navigate(ruta);
  };

  // creamos la funcion del manejo del formulario
  const enviar = (data) => {
    data.concentrados = data.concentrados ? "Concentrados" : "";
    data.trozos_humedos = data.trozos_humedos ? "Trozos Húmedos" : "";
    data.snacks = data.snacks ? "Snacks" : "";
    data.huesos = data.huesos ? "Huesos" : "";
    data.galletas = data.galletas ? "Galletas" : "";
    data.otros_alimentos = data.otros_alimentos ? "Otros Alimentos" : "";
    data.comida_max = data.comida_max ? "Comida Max" : "";
    data.comida_liver_care = data.comida_liver_care ? "Comida Liver Care" : "";
    data.comida_hills = data.comida_hills ? "Comida Hills" : "";
    data.comida_chunky = data.comida_chunky ? "Comida Chunky" : "";
    console.log(data);
  };
  return (
    //creamos el div que manejara todo el contenido de la página
    <div className="body">
      <div className="bienvenida">
        <div className="menu">
          <label className="label">Filtros</label>

          <details>
            <summary className="opciones-menu">Categorías</summary>
            <nav className="menus">
              <ul className="ul-menu1">
                <li>
                  <input
                    type="checkbox"
                    id="concentrados"
                    {...register("concentrados")}
                  />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="concentrados">
                    Concentrados
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="trozos_humedos"
                    {...register("trozos_humedos")}
                  />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="trozos_humedos">
                    Trozos Húmedos
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="snacks" {...register("snacks")} />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="snacks">
                    Snacks
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="huesos" {...register("huesos")} />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="huesos">
                    Huesos
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="galletas"
                    {...register("galletas")}
                  />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="galletas">
                    Galletas
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="otros_alimentos"
                    {...register("otros_alimentos")}
                  />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="otros_alimentos">
                    Otros alimentos
                  </label>
                </li>
              </ul>
            </nav>
          </details>
          <details>
            <summary className="opciones-menu">Marca</summary>
            <nav>
              <ul className="ul-menu1">
                <li>
                  <input
                    type="checkbox"
                    id="comida_max"
                    {...register("comida_max")}
                  />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="comida_max">
                    Comida Max
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="comida_liver-care"
                    {...register("comida_liver_care")}
                  />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="comida_liver-care">
                    Comida Liver Care
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="comida_hills"
                    {...register("comida_hills")}
                  />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="comida_hills">
                    Comida Hills
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="comida_chunky"
                    {...register("comida_chunky")}
                  />
                  {/*para capturar la información elegida por el usuario*/}
                  <label className="label-check1" htmlFor="comida_chunky">
                    Comida Chunky
                  </label>
                </li>
              </ul>
            </nav>
          </details>
        </div>

        <div>
          <form
            action=""
            className="formulario"
            onSubmit={handleSubmit(enviar)}
          >
            <h1 className="titulo">Alimento Para Mascotas</h1>
            <label htmlFor="tipo-mascota" className="label">
              Selecciona el tipo de mascota:
            </label>
            <br />
            <select
              className="input"
              name="tipo-mascota"
              id="tipo-mascota"
              {...register("tipo-mascota")}
            >
              {/*para capturar la información elegida por el usuario*/}
              <option value=""></option>
              <option value="Perros">Perros</option>
              <option value="Gatos">Gatos</option>
              <option value="Peces">Peces</option>
              <option value="Conejos">Conejos</option>
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
              {...register("identificacion")}
            />
            {/*para capturar la información elegida por el usuario*/}
            <br />
            <label htmlFor="nombre" className="label">
              Solicitante del Servicio:
            </label>
            <br />
            <input
              type="text"
              className="input"
              id="nombre"
              placeholder="Se Muestra tú Nombre"
              {...register("nombre")}
            />
            {/*para capturar la información elegida por el usuario*/}
            <br />
            <br />
            <label className="label">
              Listado de Alimentos Según Mascota:{" "}
            </label>
            <br />
            <fieldset className="productos" id="productos">
              <div className="mostrador" id="mostrador">
                <div className="fila">
                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/comida_max sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Max Performance Perros adultos Pollo y Arroz 20 Kg + 2
                        Kg
                      </p>
                      <span className="precio">$ 283.794</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/comida_chunky sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Chunky Perros Adultos Pollo 25 Kg
                      </p>
                      <span className="precio">$ 167.147</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/comida_liver-care sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Hills Prescription Diet Perros Liver Care l/d 17.6 Lb
                      </p>
                      <span className="precio">$ 312.073</span>
                    </div>
                  </div>
                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/comida_hills sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Hills Canine adult small bite 15 Lb
                      </p>
                      <span className="precio">$ 283.794</span>
                    </div>
                  </div>
                </div>
                <div className="fila">
                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/comida_weight_loss sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Hills Prescription Diet Perros Weight Reduction r/d 27.5
                        Lb
                      </p>
                      <span className="precio">$ 438.325</span>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <br />
            <br />
            <div className="botones">
              <button className="botones-sistema">Generar Servicio</button>
            </div>
          </form>
          <div className="botones">
            <button className="botones-sistema">Gestionar Pago</button>
            <button className="botones-sistema" onClick={() => open("/")}>
              Salir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
