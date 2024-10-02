import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../educacion/Header";
import Form from "./Form";
import Footer from "../footer/Footer";

export default function Contacto() {
  return(
    <section>
      <Navbar />
      <Header props="CONTACTO" />
      <Form />
      <Footer />
    </section>
  );
}