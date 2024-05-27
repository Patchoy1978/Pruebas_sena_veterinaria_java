// oportaos las librerias necesarias
import { useState } from "react";

// creamos el componente personalizado
export const useModal = (initialValue = false) => {
  // inicializamos el estado
  const [isOpen, setIsOpen] = useState(initialValue);
  // creamos las funciones para los estados de las ventanas modales
  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);
  // retornamos las clases en variables
  return [isOpen, openModal, closeModal];
};
