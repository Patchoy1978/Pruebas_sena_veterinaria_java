import React, { useState } from 'react';
import "./mis_estilos.css";
import googleIcon from "../img/google-mas.png";
import facebookIcon from "../img/facebook.png";
import { Link, useNavigate } from 'react-router-dom';
import { login_usuario } from "../api/tienda.api";
import {toast} from 'react-hot-toast'

export const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
     // Verificar si email o password están vacíos
     if (!email || !password) {
      toast.error("Por favor ingresa tu usuario y/o contraseña");
      return;
    }
    try {
      // Imprimir la URL de la solicitud
    console.log('URL de la solicitud:', 'http://127.0.0.1:8000/tienda/api/v1/login/');
      const response = await login_usuario({ email, password });
      if (response.data && response.data.message) {
        setError(response.data.message);
      } else {
        toast.success("BIENVENIDO");
        navigate('/servicios');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Tu usuario y/o contraseña son incorrectos");
    }
  };
  

  //retornamos el codigo html para visualizar la página
  return (
    <div className='body'>
      <div className="bienvenida">
        <div className="formulario_spa">
          <form onSubmit={handleLogin}>
            <h1 className="titulo">Bienvenido</h1>
            <label htmlFor="email" className="label">Usuario: </label><br />
            <input type="email" className="input" id="email" placeholder="Ingresa tú Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label htmlFor="contrasena" className="label">Contraseña: </label><br />
            <input type="password" className="input" id="contrasena" placeholder="Ingresa tú contraseña" value={password} onChange={(e) => setContrasena(e.target.value)} />
            <br /><br />
            {error && <p className="error-message">{error}</p>}
            <div className="botones">
              <button className="botones-sistema" type="submit">Ingresar</button>
            </div>
            <br /><br />
            <p className="label-1">ó ingresa con</p>
            <ul className="ul-botones">
              <li><img src={googleIcon} alt="icono de google mas" /></li>
              <li><img src={facebookIcon} alt="icono de facebook" /></li>
            </ul>
            <br /><br />
          </form>
          <div className="botones">
            <Link to="/registrousuarios" className="links" id="registro-user">Registrarse</Link>
            <Link to="#" className="links">Olvido Contraseña</Link>
          </div>
          <dialog className="manejo-errores" title="Advertencia">
            <p className="texto-interno">La Contraseña o el Usuario no coinciden</p>
            <button className="salir-ventana-emergente">Salir</button>
          </dialog>
        </div>
      </div>
    </div>
  );
}
