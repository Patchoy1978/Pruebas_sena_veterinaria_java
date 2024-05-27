// importamos las librerias necesarias
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AccesoriosParaMascotas = () => {
  // usamos el useForm para el manejo del formulario
  const { register, handleSubmit } = useForm();

  //   usamos el useNavigate para darle fucnionalidad a los botones
  const navigate = useNavigate();

  // creamos la funcion para la operabilidad de los botones
  const open = (ruta) => {
    navigate(ruta);
  };

  // creamos la función para el manejo del formulario y el retorno de la seleccion
  const enviar = (data) => {
    data.pelotas = data.pelotas ? "Pelotas" : "";
    data.con_cuerdas = data.con_cuerdas ? "Con cuerdas" : "";
    data.huesos = data.huesos ? "Huesos" : "";
    data.mordedores = data.mordedores ? "Mordedores" : "";
    data.peluches = data.peluches ? "Peluches" : "";
    data.hills = data.hills ? "Hills" : "";
    data.animals_factors = data.animals_factors ? "Animals Factors" : "";
    data.bamboo_pet = data.bamboo_pet ? "Bamboo Pet" : "";
    data.bios_pet = data.bios_pet ? "Bios Pet" : "";
    console.log(data);
  };

  //   retornamos la página
  return (
    <div className="body">
      <div className="bienvenida">
        <div className="menu">
          <label className="label">Filtros</label>
          <details>
            <summary className="opciones-menu">Categorías</summary>
            <nav className="menus">
              <ul className="ul-menu1" id="categorias">
                <li>
                  <input
                    type="checkbox"
                    id="Pelotas"
                    {...register("pelotas")}
                  />
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="Pelotas">
                    Pelotas
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Con Cuerdas"
                    {...register("con_cuerdas")}
                  />
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="Con Cuerdas">
                    Con Cuerdas
                  </label>
                </li>
                <li>
                  <input type="checkbox" id="huesos" {...register("huesos")} />
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="huesos">
                    Huesos
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="mordedores"
                    {...register("mordedores")}
                  />
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="mordedores">
                    Mordedores
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="Peluches"
                    {...register("peluches")}
                  />
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="Peluches">
                    Peluches
                  </label>
                </li>
              </ul>
            </nav>
          </details>
          <details>
            <summary className="opciones-menu">Marca</summary>
            <nav className="menus">
              <ul className="ul-menu1" id="categorias">
                <li>
                  <input type="checkbox" id="hills" {...register("hills")} />
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="hills">
                    Hills
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="animals factors"
                    {...register("animals_factors")}
                  />
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="animals factors">
                    Animals Factors
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bamboo pet"
                    {...register("bamboo_pet")}
                  />
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="bamboo pet">
                    Bamboo Pet
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="bios pet"
                    {...register("bios_pet")}
                  />{" "}
                  {/* capturamos lo que el cliente selecciona */}
                  <label className="label-check1" htmlFor="bios pet">
                    Bios Pet
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
            <h1 className="titulo">Accesorios Para Mascotas</h1>
            <label className="label">Selecciona el tipo de mascota: </label>
            <br />
            <select
              className="input"
              name="tipo-mascota"
              id="tipo-mascota"
              {...register("tipo-mascota")}
            >
              {/*capturamos lo ingresado por el usuario*/}
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
            {/*capturamos lo ingresado por el usuario*/}
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
            {/*capturamos lo ingresado por el usuario*/}
            <br />
            <br />
            <label className="label">Listado de Alimentos Según Mascota:</label>
            <br />
            {/* para ver los productos */}
            <fieldset className="productos" id="productos">
              <div className="mostrador" id="mostrador">
                <div className="fila">
                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Hueso_con_sonido_pequeño_para_perros sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Hueso con sonido pequeño para perros
                      </p>
                      <span className="precio">$ 9.992</span>
                    </div>
                  </div>

                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Juguete_erizo_vinilo_pequeño_para_perro sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Juguete erizo vinilo pequeño para perro
                      </p>
                      <span className="precio">$ 9.992</span>
                    </div>
                  </div>

                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Juguete_Muslo_de_Pollo._Vinilo sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Juguete Muslo de Pollo. Vinilo
                      </p>
                      <span className="precio">$ 9.992</span>
                    </div>
                  </div>

                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Juguete_Perro_Erizo_Sentado sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Juguete Perro Erizo Sentado
                      </p>
                      <span className="precio">$ 9.992</span>
                    </div>
                  </div>
                </div>

                <div className="fila">
                  <div className="item">
                    <div className="contenedor-foto">
                      <img
                        src={require("../img/Pelota_puntos_gigantes sin fondo.png")}
                        alt=""
                      />
                      <p className="descripcion-articulos">
                        Pelota puntos gigantes
                      </p>
                      <span className="precio">$ 16.851</span>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <br />
            <br />
            <div className="botones">
              <button className="botones-sistema">Generar Servicio</button>
              {/* para enviar el formulario */}
            </div>
          </form>
          <div className="botones">
            <button className="botones-sistema">Gestionar Pago</button>
            <button className="botones-sistema" onClick={() => open("/")}>
              Inicio
            </button>
            {/* para navegar a la pagina en mención */}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
