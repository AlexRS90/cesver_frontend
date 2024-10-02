import React from "react";
import Image from "next/image";
import logoNavbar from '../styles/images/logo-navbar.png';
import "../styles/navbar.css";
import Link from "next/link";

export default function Navbar() {
  return(
    <header className="navbar">
      <nav>
        <ul className="navbar-ul">
          <li>
            <Link href="/">
              <Image
                src={logoNavbar}
                alt="logo"
                className="img-logo"
              />
            </Link>
          </li>
          <li>
              <ul className="menu-options">
                  <Link href="/nosotros"><li className="navbar-font">Nosotros</li></Link>
                  <Link href="/educacion"><li className="navbar-font">Educación</li></Link>
                  <Link href="/alumnos"><li className="navbar-font">Alumnos</li></Link>
                  <Link href="/contacto"><li className="navbar-font">Contacto</li></Link>
              </ul>
          </li>
          <Link href="https://moodle.cesver.edu.mx/login/index.php" target="blank_"><li className="navbar-font">Aula Virtual</li></Link>
        </ul>
      </nav>
    </header>
  );
}