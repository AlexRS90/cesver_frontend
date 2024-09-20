import React from "react";
import "../styles/options.css";

export default function Inscripcion() {
  return (
    <section className="general-container">
      <div className="titulo-container">
        <h2 className="titulo">
          REQUISITOS DE INSCRIPCIÓN
        </h2>
      </div>
      <ul className="general-bullets">
        <li>Acta de Nacimiento Original (Certificada) y dos copias.</li>
        <li>Certificado de Secundaria Original y dos copias.</li>
        <li>
          Certificado de Bachillerato Original y dos copias.<br />
          – Nota. En caso de ser procedente de otro estado debe estar<br />
          legalizado y acompañado de una carta de autenticidad.
        </li>
        <li>CURP (certificada y verificada con el registro civil) dos copias.</li>
        <li>4 fotografías tamaño infantil en blanco y negro.</li>
        <li>Pagar aranceles vigentes en la institución</li>
        <li>Contar con un correo electrónico y teléfono para contacto.</li>
      </ul>
      <div className="titulo-container">
        <h2 className="titulo">
          REQUISITOS DE PREINSCRIPCIÓN
        </h2>
      </div>
      <ul className="general-bullets">
        <li>Pagar arancel vigente por concepto de reinscripción en la institución.</li>
        <li>Llenar formato de reinscripción en el área de control escolar.</li>
      </ul>
    </section>
  );
}