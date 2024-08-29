'use client';
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Header from "../Header";
import Navbar from "@/app/navbar/Navbar";
import Footer from "@/app/footer/Footer";
import { EDUCACION } from "@/app/data";
import "../../styles/educacion.css";
import Link from "next/link";


export default function EducacionDescription () {
  const pathName = usePathname().slice(11);
  const header = 
    pathName === 'derecho-procesal-penal-acusatorio' || pathName === 'maestria-ciencias-de-la-educacion' 
    ? 'MAESTRÍA' 
    : 'LICENCIATURA';
  let educacionInfo = {};
  switch (pathName) {
    case 'pedagogia':
      educacionInfo = EDUCACION[0];
      break;
    case 'contaduria-publica':
      educacionInfo = EDUCACION[1];
      break;
    case 'derecho':
      educacionInfo = EDUCACION[2];
      break;
    case 'ciencias-de-la-educacion':
      educacionInfo = EDUCACION[3];
      break;
    case 'derecho-procesal-penal-acusatorio':
      educacionInfo = EDUCACION[4];
      break;
    case 'maestria-ciencias-de-la-educacion':
      educacionInfo = EDUCACION[5];
      break;
  }
  return (
    <section>
      <Navbar />
      <Header props={header} />
      <section className="body-container">
        <aside className="lateral-container">
          <Image
            src={educacionInfo.imagen}
            alt={`${header.toLowerCase()} en ${educacionInfo.nombre}`}
            className="card-image"
          />
          <p className="card-name">{educacionInfo.nombre.toUpperCase()}</p>
          <p className="rvoe-label">{educacionInfo.rvoe}</p>
        </aside>
        <article className="info-container">
          <h1 className="educacion-titulo">{educacionInfo.nombre.toUpperCase()}</h1>
          <Link href="" className="button-ver button-mapa">VER MAPA CURRICULAR</Link>
          <p className="educacion-slogan">{educacionInfo.info.slogan}</p>
          <ul className="info-bullets">
            {educacionInfo.info.bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </article>
      </section>
      <Footer />
    </section>
  )
}