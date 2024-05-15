// importamos las librerias necesarias
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  // retornamos la página
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-row">
          <div className="footer-links">
            <h4>Compañia</h4>

            <ul>
              <li>
                <Link to="/mision">Misión</Link>
              </li>
              <li>
                <Link to="/vision">Visión</Link>
              </li>
              <li>
                <Link to="/politicaprivacidad">Politica de Privacidad</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Ayuda</h4>

            <ul>
              <li>
                <Link to="#">Preguntas</Link>
              </li>
              <li>
                <Link to="#">Compras</Link>
              </li>
              <li>
                <Link to="#">Pagos</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Tienda</h4>

            <ul>
              <li>
                <Link to="/spa">Spa</Link>
              </li>
              <li>
                <Link to="/agendarcitaveterinaria">
                  Agendar Cita Veterinaria
                </Link>
              </li>
              <li>
                <Link to="/alimentosmascotas">Alimentos para Mascotas</Link>
              </li>
              <li>
                <Link to="/accesoriosmascotas">Accesorios para Mascotas</Link>
              </li>
              <li>
                <Link to="/medicamentosmascotas">
                  Medicamentos para Mascotas
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Siguenos</h4>

            <div className="social-links">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
