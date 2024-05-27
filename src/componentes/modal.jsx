// importamos los librerias necesarias
import React from "react";

// creamos el componente, y usamos el prop children
export const Modal = ({
  children,
  //   mostrarBotonCerrar = true,
  isOpen,
  closeModal,
}) => {
  // usamos el stop propagación para que podamos interactuar si se requiere en una ventana modal
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    // en el classname usamos el objeto para que las ventanas modales no se abran automaticamente
    <article className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        {/* llamamos la prop children que es la que trae el contenido de cada ventana modal y asi se hace con interactividad */}
        {children}
        {/* {mostrarBotonCerrar && ( */}
        {/*boton para cerrar las ventanas modales */}
        <button className="botones-sistema" onClick={closeModal}>
          Cerrar
        </button>
        {/* )} */}
      </div>
    </article>
  );
};
