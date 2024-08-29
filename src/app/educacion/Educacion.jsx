import React from "react";
import { EDUCACION } from "../data";
import "../styles/educacion.css";
import Image from "next/image";
import Link from "next/link";
import Header from "./Header";

export default function Educacion({props}) {
  let planes_estudio = [];
  if (props === "LICENCIATURAS") {
    planes_estudio = EDUCACION.filter((value) => value.maestria === false);
  } else {
    planes_estudio = EDUCACION.filter((value) => value.maestria);
  }

  return (
    <section>
      <Header props={props} />
      <section className="cards-container">
        {planes_estudio.map((entry) => (
          <div key={entry.rvoe} className="card">
            <Image
              src={entry.imagen}
              alt={`${props.toLowerCase().slice(0, -1)} en ${entry.nombre}`}
              className="card-image"
            />
            <p className="card-name">{entry.nombre.toUpperCase()}</p>
            <p className="rvoe-label">{entry.rvoe}</p>
            <Link href={`educacion/${entry.url}`} className="button-ver">VER</Link>
          </div>
        ))}
      </section>
    </section>
  )
}