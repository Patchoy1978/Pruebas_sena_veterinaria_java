import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";



export const RegistroUsuarios = () => {

    const {register, handleSubmit, formState: {
        errors
    }} = useForm();

    const navigate = useNavigate();

    const enviar = (data) => {

        console.log(data)

    }

    const open = (ruta) => {

        navigate(ruta);
    
    }

    
    return ( 

        <div className='body'>

            <div className="bienvenida">

                <div className="formulario_spa">
                
                    <form action=""  onSubmit={ handleSubmit(enviar) }>
                        
                        <h1 className="titulo">Registro de Usuario</h1>

                        <label className="label" htmlFor="primernombre">Primer Nombre:</label>
                        <br />
                        <input className="input" type="text" id="primernombre" placeholder="Ingresa tu Primer Nombre" {...register("primernombre", { required: true})}/>
                        {errors.primernombre && <span>Este campo es requerido</span>}
                        <br/>
                        <label className="label" htmlFor="segundonombre">Segundo Nombre:</label>
                        <br />
                        <input className="input" type="text" id="segundonombre" placeholder="Ingresa tu Segundo Nombre" {...register("segundonombre", )}/>
                        <br />
                        <label className="label" htmlFor="primerapellido">Primer Apellido: </label>
                        <br />
                        <input className="input" type="text" id="primerapellido" placeholder="Ingresa tu Primer Apellido" {...register("primerapellido", { required: true})}/>
                        {errors.primerapellido && <span>Este campo es requerido</span>}
                        <br/>
                        <label className="label" htmlFor="segundoapellido">Segundo Apellido: </label>
                        <br />
                        <input className="input" type="text" id="segundoapellido" placeholder="Ingresa tu Segundo Apellido" {...register("segundoapellido")}/>
                        <br />
                        <label className="label" htmlFor="identificacion">Identificación:</label>
                        <br />
                        <input className="input" type="number" id="identificacion" placeholder="Ingresa tú número de Identificación" {...register("identificacion", { required: true})}/>
                        {errors.identificacion && <span>Este campo es requerido</span>}
                        <br />
                        <label className="label" htmlFor="fech-nacimiento">Fecha de Nacimiento:</label> 
                        <br />
                        <input className="input" type="date" id="fech-nacimiento" placeholder="Ingresa tú fecha de Nacimiento" {...register("fechanacimiento", { required: true})}/>
                        {errors.fechanacimiento && <span>Este campo es requerido</span>}
                        <br />
                        <label className="label" htmlFor="email">Correo Electrónico:</label>
                        <br />
                        <input className="input" type="email" id="email" placeholder="Ingresa tú correo electronico" {...register("email", { required: true})}/>
                        {errors.email && <span>Este campo es requerido</span>}
                        <br />
                        <label className="label" htmlFor="telefono">Número Telefónico:</label>
                        <br />
                        <input className="input" type="phone" id="telefono" placeholder="Ingresa tú Número de Telefono" {...register("telefono", { required: true})}/>
                        {errors.telefono && <span>Este campo es requerido</span>}
                        <br />
                        <label className="label" htmlFor="direccion">Dirección Residencia:</label>
                        <br />
                        <input className="input" type="text" id="direccion" placeholder="Ingresa tú dirección" {...register("direccion", { required: true})}/>
                        {errors.direccion && <span>Este campo es requerido</span>}
                        <br />
                        <label className="label" htmlFor="departamento">Departamento Residencia:</label>
                        <br />
                        <input className="input" type="text" id="departamento" placeholder="Ingresa el departamento de Residencia" {...register("departamento", { required: true})}/>
                        {errors.departamento && <span>Debes seleccionar un departament</span>}
                        <br/>
                        <label className="label" htmlFor="ciudad">Ciudad Residencia:</label>
                        <br />
                        <input className="input" type="text" id="ciudad" placeholder="Ingresa la Ciudad de Residencia" {...register("ciudad", { required: true})}/>
                        {errors.ciudad && <span>Debes seleccionar una ciudad</span>}
                        <br /><br />
                        <div className="botones">
                            <button className="botones-sistema">Registrarse</button>
                        </div>
                    </form>
                    <br/>
                    <div className="button">
                        <button className="botones-sistema" onClick={() => open("/registromascota")}>Registrar Mascota</button>
                        <button className="botones-sistema" onClick={() => open("/")}>Inicio</button>
                    </div>

                </div>

                
            </div>

        </div>

    );
}
 
