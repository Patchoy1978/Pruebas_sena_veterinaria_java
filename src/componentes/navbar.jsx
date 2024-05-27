//importamos lo necesario par el funcionamiento de la página
import React from "react";
import carritoIcon from "../img/tienda-online32.png";
import { Link } from "react-router-dom";

//creamos el componente del navegador que estará en todas las páginas
export const NavBar = () => {
  return (
    /*El div que retorna toda la visualización del menú */
    <div>
      <nav className="menus">
        <ul className="ul-menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="#">Registro</Link>
            <ul className="menu-oculto">
              <li>
                <Link to="/registrousuarios">Registro Usuario</Link>
              </li>
              <li>
                <Link to="/registromascota">Registro Mascotas</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
            <ul className="menu-oculto">
              <li>
                <Link to="/spa">Spa</Link>
              </li>
              <li>
                <Link to="/urgencias">Urgencias</Link>
              </li>
              <li>
                <Link to="/agendarcitaveterinaria">
                  Agendar Cita Veterinaria
                </Link>
              </li>
              <li>
                <Link to="/accesoriosmascotas">Accesorios Para Mascotas</Link>
              </li>
              <li>
                <Link to="/alimentosmascotas">Alimentos Para Mascotas</Link>
              </li>
              <li>
                <Link to="/medicamentosmascotas">
                  Medicamentos Para Mascotas
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contactenos">Contáctenos</Link>
          </li>
          <li>
            <Link to="#">Quienes Somos</Link>
            <ul className="menu-oculto">
              <li>
                <Link to="/mision">Misión</Link>
              </li>
              <li>
                <Link to="/vision">Visión</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#">
              <img src={carritoIcon} alt="carrito de compras" />
            </Link>
            <span></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
