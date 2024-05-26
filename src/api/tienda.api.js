import axios from "axios"

//Instancia con direccion back-end
const apiUsuario = axios.create({
    baseURL:'http://127.0.0.1:8000/tienda/api/v1/cliente/'
})
//Petición POST al back-end
export const registrar_usuario = (usuario) =>  apiUsuario.post('/', usuario)