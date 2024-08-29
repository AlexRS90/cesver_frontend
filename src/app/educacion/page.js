import React from "react";
import Navbar from "../navbar/Navbar";
import Educacion from "./Educacion";
import Footer from "../footer/Footer";

export default function Nosotros() {
    return (
      <main>
        <Navbar />
        <Educacion props="LICENCIATURAS" />
        <Educacion props="MAESTRÍAS" />
        <Footer />
      </main>
    );
  }