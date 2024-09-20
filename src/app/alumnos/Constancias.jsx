import React from "react";
import "../styles/options.css";

export default function Constancia() {
  return (
    <section className="general-container">
      <div className="titulo-container">
        <h2 className="titulo">
          SOLICITA EN CONTROL ESCOLAR:
        </h2>
      </div>
      <ul className="general-bullets">
        <li>Constancia de estudio sencilla.<br />Tiempo estimado de entrega: 2 días hábiles.</li>
        <li>Constancia de estudios especial.<br />Tiempo estimado de entrega: 2 días hábiles.</li>
        <li>Constancia de estudios con calificaciones.<br />Tiempo estimado de entrega: 5 días hábiles.</li>
        <li>Carta de Pasante.<br />Tiempo estimado de entrega: 5 días hábiles.</li>
      </ul>
      <p className="aviso">
        Nota:<br />
        Para solicitar cualquier trámite primero se debe solicitar en el área
        de finanzas y llevar la solicitud al departamento de control escolar,
        en caso que el trámite se solicite en línea deberá informar al área
        de control escolar que tramite requiere y deberá mandar el
        baucher a los siguientes correos:
        deycesver@hotmail.com y controlescolar@cesver.edu.mx.
      </p>
    </section>
  );
}