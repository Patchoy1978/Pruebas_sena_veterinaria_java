// importaos las librerias necesarias
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const PoliticaPrivacidad = () => {
  // usamos el useForm para manejar la validación de la politica
  const { register, handleSubmit } = useForm();
  // usamos el useNavigate para la navegabilidad
  const navigate = useNavigate();

  // creamos la función para la aceptación de la política
  const enviar = (data) => {
    console.log(data);
  };

  // creamos la función para la navegabilidad
  const open = (ruta) => {
    navigate(ruta);
  };

  // retornamos la página
  return (
    <div className="body">
      <div className="bienvenida">
        <div className="formulario_spa">
          <h1 className="titulo">Politica de Privacidad</h1>

          <p className="parrafos">
            En Dr. Care Veterinaria, valoramos profundamente la privacidad y la
            seguridad de los datos de nuestros clientes y visitantes en línea.
            <br />
            <br />
            Esta Política de Privacidad detalla cómo recopilamos, utilizamos,
            compartimos y protegemos la información que obtenemos a través de
            nuestro sitio web, así como en nuestras instalaciones físicas.
            <br />
            <br />
            Al utilizar nuestros servicios, usted acepta las prácticas descritas
            en esta política. Información que Recopilamos:
            <br />
            <br />
            Información Personal: <br />
            Recopilamos información personal que usted proporciona
            voluntariamente, como su nombre, identificación, fecha de
            nacimiento, dirección de correo electrónico, número de teléfono,
            dirección residencia, departamento y ciudad.
            <br />
            <br />
            Información de Mascotas: <br />
            También recopilamos información sobre sus mascotas, como nombre,
            especie, raza, edad, peso , vacunas, cantidad de vacunas,
            identificación del propietario, nombre del propietario, teléfono.
            <br />
            <br />
            Información de Uso del Sitio Web:
            <br />
            Recopilamos automáticamente cierta información sobre su dispositivo
            y su interacción con nuestro sitio web, utilizando cookies y
            tecnologías similares.
            <br />
            <br />
            Uso de la Información:
            <br />
            Utilizamos la información recopilada para brindar servicios
            veterinarios de alta calidad y personalizados, incluyendo citas,
            recordatorios de vacunas, comunicación sobre el estado de la salud
            de sus mascotas, y otros servicios relacionados. Utilizamos la
            información para mejorar continuamente nuestros servicios y
            personalizar su experiencia con nosotros. No vendemos ni alquilamos
            su información personal a terceros para fines de marketing sin su
            consentimiento explícito.
            <br />
            <br />
            Compartir Información:
            <br />
            Compartimos información personal solo con terceros que prestan
            servicios en nuestro nombre y que han acordado mantener la
            confidencialidad de la información. Podemos divulgar información
            personal en respuesta a procesos legales o cumplir con requisitos
            legales aplicables, como órdenes judiciales o citaciones.
            <br />
            <br />
            Protección de Datos:
            <br />
            Tomamos medidas razonables para proteger la información personal
            contra accesos no autorizados, divulgación, alteración o
            destrucción. Utilizamos medidas de seguridad físicas, electrónicas y
            administrativas para proteger la confidencialidad de la información.
            <br />
            <br />
            Sus Derechos:
            <br />
            Usted tiene derecho a acceder, corregir, actualizar o eliminar su
            información personal. Puede hacerlo contactando a nuestro equipo de
            atención al cliente. Tiene derecho a optar por no recibir
            comunicaciones de marketing directo.
            <br />
            <br />
            Niños:
            <br />
            No recopilamos intencionalmente información personal de niños
            menores de 13 años sin el consentimiento verificable de sus padres o
            tutores legales. Si descubrimos que hemos recopilado información
            personal de un niño sin consentimiento parental, tomaremos medidas
            para eliminar esa información lo antes posible.
            <br />
            <br />
            Cambios en esta Política:
            <br />
            Nos reservamos el derecho de modificar esta Política de Privacidad
            en cualquier momento. Cualquier cambio será efectivo inmediatamente
            después de su publicación en nuestro sitio web.
            <br />
            <br />
            Al utilizar nuestros servicios, usted reconoce haber leído y
            entendido esta Política de Privacidad. Si tiene alguna pregunta o
            inquietud sobre nuestras prácticas de privacidad, no dude en ponerse
            en contacto con nosotros. Gracias por confiar en Dr. Care
            Veterinaria para las necesidades de salud y bienestar de sus
            mascotas.
            <br />
            <br />
          </p>
          <form onSubmit={handleSubmit(enviar)}>
            <ul className="ul-menu1">
              <button className="privacidad">
                <input
                  type="checkbox"
                  id="privacidad"
                  name="privacidad"
                  {...register("privacidad")}
                />
                <label className="label-check1" htmlFor="privacidad">
                  Acepta Nuestra Politica de Privacidad
                </label>
              </button>
            </ul>
          </form>
          <br />
          <br />

          <div className="botones">
            {/* asignamos la funcionalidad al boton */}
            <button className="botones-sistema" onClick={() => open("/")}>
              Inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
