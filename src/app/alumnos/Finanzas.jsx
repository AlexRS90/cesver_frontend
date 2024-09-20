import React from "react";
import "../styles/options.css";

export default function Finanzas() {
  return (
    <section className="general-container">
      <div className="titulo-container">
        <h2 className="titulo">PAGOS</h2>
      </div>
      <p className="general-text">
        Para realizar un pago de servicio (colegiatura, reinscripción,
        constancia, etc) puede acudir al departamento de finanzas o
        pagar vía transferencia bancaria y poner en referencia el nombre y
        concepto que este pagando y enviarlo escaneado al correo de
        finanzas@cesver.edu.mx.
      </p>
      <section className="footer-section">
        <div className="titulo-container">
          <h2 className="titulo">CUENTA BANCARIA</h2>
        </div>
        <div className="datos-bancarios">
          <p>BANCO:<br />Banamex</p>
          <p>Instituto Técnico de Educación Superior S.C.</p>
          <div className="cuenta-container">
            <p>CUENTA:<br />3816258</p>
            <p>SUCURSAL:<br />974</p>
          </div>
          <p>CLABE:<br />002840097438162587</p>
        </div>
      </section>
      
    </section>
  );
}