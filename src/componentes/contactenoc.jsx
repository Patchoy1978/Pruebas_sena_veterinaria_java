import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Contactenos = () => {
    const navigate = useNavigate();

    const open = (ruta) => {
        navigate(ruta);
    };
    return (
        <div className="body">
            <div className="bienvenida">
                <div className="formulario_spa">
                    <h1 className="titulo">Contactenos</h1>

                    <p className="parrafos">
                        En Dr. Care, estamos aquí para responder a tus preguntas,
                        preocupaciones y necesidades relacionadas con el cuidado de tus
                        mascotas. Ya sea que estés buscando programar una cita, consultar
                        sobre nuestros servicios o simplemente necesites orientación sobre
                        la salud de tu mascota, nuestro equipo está listo para ayudarte.
                        Puedes comunicarte con nosotros de varias maneras:
                    </p>
                    <br />
                    <br />
                    <p className="parrafos">
                        Visítanos en nuestra ubicación:<br />
                        <p className="parrafos2">
                            [Dirección de la clínica]
                        </p>
                    </p>
                    <br />
                    <br />
                    <p className="parrafos">
                        Llámanos al Teléfono:<br />
                        <p className="parrafos2">
                            [teléfono de la clínica]
                        </p>
                    </p>
                    <br />
                    <br />
                    <p className="parrafos">

                        Envíanos un correo electrónico:<br />
                        <p className="parrafos2">
                            [Dirección de correo electrónico]
                        </p>
                    </p>
                    <br />
                    <br />
                    <p className="parrafos">

                        Síguenos en las redes sociales:
                    </p>
                    <br />
                    <br />

                    <div className="footer-links">


                        <div className="social-links">
                            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#"><i className="fab fa-instagram"></i></Link>
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fab fa-linkedin"></i></Link>

                        </div>

                    </div>
                    <br />
                    <br />
                    <p className="parrafos">

                        No dudes en ponerte en
                        contacto con nosotros en cualquier momento. Estamos aquí para
                        brindarte el mejor cuidado posible para tus queridas mascotas.
                    </p>

                    <br />
                    <br />

                    <div className="botones">
                        <button className="botones-sistema" onClick={() => open("/")}>
                            Inicio
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};
