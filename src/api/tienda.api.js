import axios from "axios";

// Instancia con dirección back-end
const apiBase = axios.create({
    baseURL: 'http://127.0.0.1:8000/tienda/api/v1/'
});

// Petición GET para obtener usuarios registrados
export const usuarios_registrados = () => apiBase.get('cliente/');

// Petición POST al back-end para registrar un usuario
export const registrar_usuario = (usuario) => apiBase.post('cliente/', usuario);

// Petición GET para obtener departamentos
export const obtener_departamentos = () => apiBase.get('departamentos/');

// Petición GET para obtener ciudades
export const obtener_ciudades = () => apiBase.get('ciudades/');

// Petición GET para opciones documento
export const obtener_documento = () => apiBase.get('documento/');

// Petición POST para login
export const login_usuario = (credentials) => apiBase.post('login/', credentials);
