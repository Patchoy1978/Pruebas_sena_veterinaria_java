// importamos la librerias necesarias
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// creamos el componente
export const MedicamentosParaMascotas = () => {
  // usamos el useForm para el manejo del formulario
  const { register, handleSubmit } = useForm();

  // usamos el useNavigate para la navegación con los botones
  const navigate = useNavigate();

  // creamos la función para el manejo  del formulario
  const enviar = (data) => {
    console.log(data);
  };

  // creamos la función para dar funcinalidad a los botones
  const open = (ruta) => {
    navigate(ruta);
  };

  return (
    <div className="body">
      <div className="bienvenida">
        <div className="menu">
          <div>
            <label className="label">Filtros</label>

            <details>
              <summary className="opciones-menu">Categorías</summary>

              <nav className="menus">
                <ul className="ul-menu1" id="categorias">
                  <li>
                    <input type="checkbox" id="filtro-antipulgas" />
                    <label className="label-check1" htmlFor="filtro-antipulgas">
                      Antipulgas
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="filtro-antiparasitario" />
                    <label
                      className="label-check1"
                      htmlFor="filtro-antiparasitario"
                    >
                      Antiparasitario
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="filtro-vitaminas" />
                    <label className="label-check1" htmlFor="filtro-vitaminas">
                      Vitaminas
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="filtro-suplementos" />
                    <label
                      className="label-check1"
                      htmlFor="filtro-suplementos"
                    >
                      Suplementos
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="filtro-medicamentos" />
                    <label
                      className="label-check1"
                      htmlFor="filtro-medicamentos"
                    >
                      Medicamentos
                    </label>
                  </li>
                </ul>
              </nav>
            </details>

            <details>
              <summary className="opciones-menu">Marca</summary>

              <nav className="menus">
                <ul className="ul-menu1" id="marcas">
                  <li>
                    <input type="checkbox" id="filtro-hills" />
                    <label className="label-check1" htmlFor="filtro-hills">
                      Hills
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="filtro-bayer" />
                    <label className="label-check1" htmlFor="filtro-bayer">
                      Bayer
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="filtro-bistop" />
                    <label className="label-check1" htmlFor="filtro-bistop">
                      Bistop
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" id="filtro-baytril" />
                    <label className="label-check1" htmlFor="filtro-baytril">
                      Baytril
                    </label>
                  </li>
                </ul>
              </nav>
            </details>
          </div>
        </div>

        <div>
          <form
            action=""
            className="formulario"
            onSubmit={handleSubmit(enviar)}
          >
            <h1 className="titulo">Medicamentos Para Mascotas</h1>

            <label className="label">Selecciona el tipo de mascota: </label>
            <br />

            <select
              className="input"
              name="tipo-mascota"
              id="tipo-mascota"
              {...register("tipo-mascosta")}
            >
              {" "}
              {/* capturamos lo que ingresa el usuario */}
              <option value=""></option>
              <option value="Perros">Perros</option>
            </select>
            <br />
            <label htmlFor="identificacion" className="label">
              Identificación del Solicitante:{" "}
            </label>
            <br />
            <input
              type="number"
              className="input"
              id="identificacion"
              placeholder="Ingresa tú Número de Identificación"
              {...register("identificacion")} // capturamos lo que ingresa el usuario
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
              {...register("nombre")} // capturamos lo que ingresa el usuario
            />
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
                        src={require("../img/Traumeel_Caja_x_50_tabletas sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Traumeel Caja x 50 tabletas
                      </p>
                      <span className="precio">$ 87.741</span>
                    </div>
                  </div>

                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Zeel_Compositum_AD_US_VET_x_100_Tabletas sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Zeel Compositum AD US VET x 100 Tabletas
                      </p>
                      <span className="precio">$ 137.580</span>
                    </div>
                  </div>

                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Antiparasitario_Drontal_para_gatos sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Antiparasitario Drontal para gatos
                      </p>
                      <span className="precio">$ 20.814</span>
                    </div>
                  </div>

                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Galgocal_Antiparasitario_Interno_para_Perros_y_Gatos_200_x_2_Tabletas sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Galgocal Antiparasitario Interno para Perros y Gatos 200
                        x 2 Tabletas
                      </p>
                      <span className="precio">$ 3.335</span>
                    </div>
                  </div>
                </div>

                <div className="fila">
                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Credelio_Cat_por_48mg_para_gatos_de__2_a_8Kg__3_Tbls_Azul sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Credelio Cat por 48mg para gatos de (2 a 8Kg) 3 Tbls
                        Azul
                      </p>
                      <span className="precio">$ 77.056</span>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <dialog className="manejo-errores" title="Advertencia">
              <p className="texto-interno">
                El Alimento Solicitado No Está Disponible
              </p>
              <button className="salir-ventana-emergente">Salir</button>
            </dialog>
            <br />
            <br />

            <div className="botones">
              <button className="botones-sistema">Generar Servicio</button>
            </div>
            <br />
            <br />
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
