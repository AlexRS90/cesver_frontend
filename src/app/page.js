import React from "react";
import Navbar from "./navbar/Navbar";
import Homepage from "./home/Home";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
}
