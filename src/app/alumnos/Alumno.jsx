'use client'
import React from "react";
import "../styles/alumno.css";
import Inscripcion from "./Inscripcion";
import Constancia from "./Constancias";
import Finanzas from "./Finanzas";
import ServicioSocial from "./Servicio";

export default function Alumno() {
  const [inscripcion, setInscripcion,] = React.useState('on');
  const [constancia, setConstancia] = React.useState('off');
  const [finanzas, setFinanzas] = React.useState('off');
  const [servicio, setServicio] = React.useState('off');
  const [currentSection, setCurrentSection] = React.useState(1);

  function togle(section) {
    switch(section) {
      case 1:
        setInscripcion('on');
        setConstancia('off');
        setFinanzas('off');
        setServicio('off');
        setCurrentSection(1);
        break;
      case 2:
        setInscripcion('off');
        setConstancia('on');
        setFinanzas('off');
        setServicio('off');
        setCurrentSection(2);
        break;
      case 3:
        setInscripcion('off');
        setConstancia('off');
        setFinanzas('on');
        setServicio('off');
        setCurrentSection(3);
        break;
      case 4:
        setInscripcion('off');
        setConstancia('off');
        setFinanzas('off');
        setServicio('on');
        setCurrentSection(4);
        break;
    }
  }
  return(
    <section>
      <h1 className="banner">TRÁMITES Y SERVICIOS</h1>
      <ul className="menu-buttons-container">
        <li className="button-cards">
          <button className={`menu-button inscripcion-${inscripcion}`} onClick={() => togle(1)} />
          <p className={`button-text ${inscripcion}`}>INSCRIPCIÓN</p>
        </li>
        <li className="button-cards">
          <button className={`menu-button constancias-${constancia}`} onClick={() => togle(2)} />
          <p className={`button-text ${constancia}`}>CONSTANCIAS</p>
        </li>
        <li className="button-cards">
          <button className={`menu-button finanzas-${finanzas}`} onClick={() => togle(3)} />
          <p className={`button-text ${finanzas}`}>FINANZAS</p>
        </li>
        <li className="button-cards">
          <button className={`menu-button servicio-social-${servicio}`} onClick={() => togle(4)} />
          <p className={`button-text ${servicio}`}>SERVICIO SOCIAL</p>
        </li>
      </ul>
      {currentSection == 1 &&
        <Inscripcion />
      }
      {currentSection == 2 &&
        <Constancia />
      }
      {currentSection == 3 &&
        <Finanzas />
      }
      {currentSection == 4 &&
        <ServicioSocial />
      }
    </section>
  );
}