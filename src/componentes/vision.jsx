// impportamos las librerias necesarias
import React from "react";
import { useNavigate } from "react-router-dom";

export const Vision = () => {
  // usamos el useNavigate para darle la navegabilidad a los botones
  const navigate = useNavigate();

  // creamos la función para la navegavilidad
  const open = (ruta) => {
    navigate(ruta);
  };
  // retornamos la página
  return (
    <div className="body">
      <div className="bienvenida">
        <div className="formulario_spa">
          <h1 className="titulo">Visión</h1>

          <p className="parrafos">
            Nuestra visión en Dr. Care es ser reconocidos como líderes en el
            cuidado veterinario, siendo el destino preferido para aquellos que
            buscan atención excepcional para sus mascotas. Nos esforzamos por
            avanzar constantemente en la medicina veterinaria, adoptando
            tecnologías innovadoras y técnicas actualizadas para garantizar el
            mejor tratamiento posible para cada paciente. Aspiramos a ser un
            modelo de excelencia en la industria, inspirando a otros a seguir
            nuestros estándares de calidad y ética profesional. A través de
            nuestro compromiso con la excelencia, buscamos mejorar continuamente
            la calidad de vida de las mascotas y fortalecer el vínculo
            humano-animal en nuestra comunidad.
          </p>
          <br />
          <br />

          <div className="botones">
            {/* aplicamos la navegabilidad al boton */}
            <button className="botones-sistema" onClick={() => open("/")}>
              Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
