import React from "react";
import ContactForm from "./contact-form";
import "../styles/contacto.css";

export default function Form() {
  return(
    <section className="general-container-contacto">
      <h2 className="titulo-contacto">Queremos escucharte</h2>
      <div className="contacto-container">
        <ul className="info-list">
          <li>
            CORREO INSTITUCIONAL<br />
            <span className="span-contacto">Único contacto oficial.</span>
          </li>
          <li>
            CONTROL ESCOLAR <br />
            <span className="span-contacto">controlescolar@cesver.edu.mx</span>
          </li>
          <li>
            FINANZAS<br />
            <span className="span-contacto">finanzar@cesver.edu.mx</span>
          </li>
          <li>
            INFORMES<br />
            <span className="span-contacto">informes@cesver.edu.mx</span>
          </li>
          <li>
            WhatsApp<br />
            <span className="span-contacto">+52 (228) 615 2720</span>
          </li>
        </ul>
        <ContactForm />
      </div>
      <section className="mapa">
        <iframe
          className="google-maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15042.00316926222!2d-96.9101815!3d19.520101999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db320da5ad2661%3A0x364a9414faade938!2sUNIVERSIDAD%20CESVER!5e0!3m2!1ses!2smx!4v1727892695849!5m2!1ses!2smx"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </section>
    </section>
  );
}