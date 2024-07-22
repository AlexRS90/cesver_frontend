import React from "react";
import Image from "next/image";
import homeBottom from "../styles/images/validez.png";
import "../styles/home.css";

export default function Home() {
  return (
    <main>
      <section className="home">
        <input
          type="button"
          className="preinscripcion-button"
          value={"Preinscripción"}
        />
      </section>
      <div className="home-banner">
        ¡RUMBO AL ÉXITO!
      </div>
      <article className="home-bottom">
        <figure>
          <Image
            src={homeBottom}
            alt="Alumna leyendo"
            className="image-home-bottom"
          />
        </figure>
        <ul className="home-list">
          <li className="list-titulo">
            En <span className="home-highlights">CESVER</span> todos sus estudios tienen validez oficial, RVOE de la SEV.
          </li>
          <li className="list-text">
            Una de las grandes fortalezas de <span className="home-highlights">CESVER</span> es que sus instalaciones son
            propias y en crecimiento, lo que favorece el poder ofrecer un pago de
            mensualidades accesibles. No omitimos mencionar que nuestros <span className="home-highlights">Títulos </span>
            son debidamente registrados ante la  <span className="home-highlights">Dirección General de Profesiones</span>,
            por lo cual nuestros estudios son válidos en cualquier parte de la
            República Mexicana.
          </li>
        </ul>
      </article>
    </main>
  );
}