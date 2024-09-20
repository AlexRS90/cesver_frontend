import React from "react";
import "../styles/options.css";
import { SERVICIO_SOCIAL } from "../data";

export default function ServicioSocial() {
  return (
    <section className="general-container">
      <div className="titulo-container">
        <h2 className="titulo">
          SERVICIO SOCIAL
        </h2>
      </div>
      <ul className="lista-container">
        {SERVICIO_SOCIAL.map((entry) => (
            <li key={entry.step} className="lista-pasos">
                <div className="lista-bullet">{entry.step}</div>
                <div className="lista-descripcion">
                  <p>
                    {entry.text}
                  </p>
                  {
                    entry.button_text != '' &&
                    <a 
                      className="button"
                      href={entry.url}
                      target="_blank"
                    >
                      {entry.button_text}
                    </a>
                  }
                </div>
            </li>
        ))}
      </ul>
      <p className="aviso">
        Nota:<br />
        Antes de entregar los documentos en original y dos copias, manda tus formatos
        para revisión a los siguientes correos: deycesver@hotmail.com y
        controlescolar@cesver.edu.mx
      </p>
    </section>
  );
}