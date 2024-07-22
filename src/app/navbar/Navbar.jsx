import React from "react";
import Image from "next/image";
import logoNavbar from '../styles/images/logo-navbar.png';
import "../styles/navbar.css";

export default function Navbar() {
  return(
    <header className="navbar">
      <nav>
        <ul className="navbar-ul">
          <li>
            <a>
              <Image
                src={logoNavbar}
                alt="logo"
                className="img-logo"
              />
            </a>
          </li>
          <li>
              <ul className="menu-options">
                  <li className="navbar-font">Nosotros</li>
                  <li className="navbar-font">Educación</li>
                  <li className="navbar-font">Alumnos</li>
                  <li className="navbar-font">Contacto</li>
              </ul>
          </li>
          <li className="navbar-font">Aula Virtual</li>
        </ul>
      </nav>
    </header>
  );
}