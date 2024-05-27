import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registrar_usuario, obtener_departamentos, obtener_ciudades } from "../api/tienda.api";

export const RegistroUsuarios = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [departamentos, setDepartamentos] = useState([]);
    const [ciudades, setCiudades] = useState([]);

    useEffect(() => {
        // Obtener los departamentos
        obtener_departamentos()
            .then(response => {
                setDepartamentos(response.data);
            })
            .catch(error => {
                console.error("Error fetching departamentos:", error);
            });

        // Obtener las ciudades
        obtener_ciudades()
            .then(response => {
                setCiudades(response.data);
            })
            .catch(error => {
                console.error("Error fetching ciudades:", error);
            });
    }, []);

    const enviar = handleSubmit(async data => {
        try {
            const fechaNacimiento = new Date(data.fecha_nacimiento);
            data.fecha_nacimiento = fechaNacimiento.toISOString().split('T')[0];
    
            console.log("Datos enviados:", data);
    
            const res = await registrar_usuario(data);
            console.log(res);
    
            // Si el registro es exitoso, mostrar un mensaje de alerta
            alert("Registro exitoso");
    
        } catch (error) {
            if (error.response) {
                console.error("Error response:", error.response.data);
            } else if (error.request) {
                console.error("Error request:", error.request);
            } else {
                console.error("Error message:", error.message);
            }
            console.error("Error config:", error.config);
        }
    });
    

    const open = (ruta) => {
        navigate(ruta);
    };

    return (
        <div className='body'>
            <div className="bienvenida">
                <div className="formulario_spa">
                    <form onSubmit={enviar}>
                        <h1 className="titulo">Registro de Usuario</h1>

                        <label className="label" htmlFor="primer_nombre">Primer Nombre:</label>
                        <br />
                        <input className="input" type="text" id="primer_nombre" placeholder="Ingresa tu Primer Nombre" {...register("primer_nombre", { required: true })}/>
                        {errors.primer_nombre && <span>Este campo es requerido</span>}
                        <br />

                        <label className="label" htmlFor="segundo_nombre">Segundo Nombre:</label>
                        <br />
                        <input className="input" type="text" id="segundo_nombre" placeholder="Ingresa tu Segundo Nombre" {...register("segundo_nombre")}/>
                        <br />

                        <label className="label" htmlFor="primer_apellido">Primer Apellido:</label>
                        <br />
                        <input className="input" type="text" id="primer_apellido" placeholder="Ingresa tu Primer Apellido" {...register("primer_apellido", { required: true })}/>
                        {errors.primer_apellido && <span>Este campo es requerido</span>}
                        <br />

                        <label className="label" htmlFor="segundo_apellido">Segundo Apellido:</label>
                        <br />
                        <input className="input" type="text" id="segundo_apellido" placeholder="Ingresa tu Segundo Apellido" {...register("segundo_apellido")}/>
                        <br />

                        <label className="label" htmlFor="tipo_documento">Tipo de Documento:</label>
                        <br />

                        
                        <select className="input" id="tipo_documento" {...register("tipo_documento", { required: true })}>
                            <option value="CC">Cédula</option>
                            <option value="CX">Cédula de Extranjería</option>
                            <option value="PA">Pasaporte</option>
                        </select>
                        {errors.tipo_documento && <span>Este campo es requerido</span>}
                        <br />

                        <label className="label" htmlFor="numero_documento">Número de Documento:</label>
                        <br />
                        <input className="input" type="text" id="numero_documento" placeholder="Ingresa tu Número de Documento" {...register("numero_documento", { required: true })}/>
                        {errors.numero_documento && <span>Este campo es requerido</span>}
                        <br />

                        <label className="label" htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                        <br />
                        <input className="input" type="date" id="fecha_nacimiento" placeholder="Ingresa tu Fecha de Nacimiento" {...register("fecha_nacimiento", { required: true })}/>
                        {errors.fecha_nacimiento && <span>Este campo es requerido</span>}
                        <br />

                        <label className="label" htmlFor="email">Correo Electrónico:</label>
                        <br />
                        <input className="input" type="email" id="email" placeholder="Ingresa tu Correo Electrónico" {...register("email", { required: true })}/>
                        {errors.email && <span>Este campo es requerido</span>}
                        <br />

                        <label className="label" htmlFor="telefono">Número Telefónico:</label>
                        <br />
                        <input className="input" type="text" id="telefono" placeholder="Ingresa tu Número de Teléfono" {...register("telefono", { required: true })}/>
                        {errors.telefono && <span>Este campo es requerido</span>}
                        <br />

                        <label className="label" htmlFor="direccion">Dirección Residencia:</label>
                        <br />
                        <input className="input" type="text" id="direccion" placeholder="Ingresa tu Dirección" {...register("direccion", { required: true })}/>
                        {errors.direccion && <span>Este campo es requerido</span>}
                        <br />

                        <label className="label" htmlFor="departamento">Departamento Residencia:</label>
                        <br />
                        <select className="input" id="departamento" {...register("departamento", { required: true })}>
                        <option value="">Seleccione un departamento</option>
                        {departamentos.map(departamento => (
                        <option key={departamento.id} value={departamento.id}>{departamento.nombre_departamento}</option>
                        ))}
                        </select>
                        {errors.departamento && <span>Debes seleccionar un departamento</span>}
                        <br />

                        <label className="label" htmlFor="ciudad">Ciudad Residencia:</label>
                        <br />
                        <select className="input" id="ciudad" {...register("ciudad", { required: true })}>
                            <option value="">Seleccione una ciudad</option>
                            {ciudades.map(ciudad => (
                                <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre_ciudad}</option>
                            ))}
                        </select>
                        {errors.ciudad && <span>Debes seleccionar una ciudad</span>}

                        <label className="label" htmlFor="contrasena">establece contrasena:</label>
                        <br />
                        <input className="input" type="text" id="contrasena" placeholder="Ingresa tu contrasena" {...register("contrasena", { required: true })}/>
                        {errors.contrasena && <span>Este campo es requerido</span>}
                        <br />
                        <br /><br />

                        <div className="botones">
                            <button className="botones-sistema">Registrarse</button>
                        </div>
                    </form>
                    <br />
                    <div className="button">
                        <button className="botones-sistema" onClick={() => open("/registromascota")}>Registrar Mascota</button>
                        <button className="botones-sistema" onClick={() => open("/")}>Inicio</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
