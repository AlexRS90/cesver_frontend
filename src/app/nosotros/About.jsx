'use client'
import React from "react";
import Image from "next/image";
import "../styles/about.css";
import escudo from "../styles/images/escudo-about.png";
import { ABOUT } from "../data";



export default function About() {
  const [about, setAbout] = React.useState(0);
  function carrusel() {
    about === 2 ? setAbout(0) : setAbout(about + 1);
  }
  return(
    <section>
      <figure
        className={`about-img img-${ABOUT[about].image}`}
      />  
      <article className="about-container">
        <Image
          src={escudo}
          alt="Escudo CESVER"
          className="escudo-about"
        />
        <section className="valores-container">
          <h1>{ABOUT[about].title}</h1>
          <p>
            {ABOUT[about].info}
          </p>
        </section>
        <button onClick={()=> carrusel()} className="button-right">
          <svg className="w-6 h-6 text-gray-800 dark:text-white right-arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="150" height="200" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
          </svg>
        </button>
      </article>
    </section>
  );
}