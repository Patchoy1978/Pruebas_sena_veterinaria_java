// importamos las llibrerias necesarias
import React from "react";
import { useNavigate } from "react-router-dom";

export const Mision = () => {
  // usamos el useNavigate para poder dar la navegación a los botones
  const navigate = useNavigate();

  // creamos la función para la navegación
  const open = (ruta) => {
    navigate(ruta);
  };
  // retornamos la página
  return (
    <div className="body">
      <div className="bienvenida">
        <div className="formulario_spa">
          <h1 className="titulo">Misión</h1>

          <p className="parrafos">
            En Dr. Care, nuestra misión es proporcionar atención veterinaria
            integral y compasiva para mejorar la salud y el bienestar de las
            mascotas, brindando servicios de calidad excepcional respaldados por
            un equipo altamente capacitado y apasionado. Nos comprometemos a
            establecer relaciones duraderas con nuestros pacientes y sus
            familias, basadas en la confianza, el respeto y la comunicación
            abierta. Buscamos ser un recurso confiable para la comunidad,
            promoviendo la educación y la conciencia sobre el cuidado
            responsable de las mascotas.
          </p>
          <br />
          <br />

          <div className="botones">
            {/* damos la navegación al boton */}
            <button className="botones-sistema" onClick={() => open("/")}>
              Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
