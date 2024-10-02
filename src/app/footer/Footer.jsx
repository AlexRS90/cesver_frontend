import React from "react";
import "../styles/footer.css";
import Image from "next/image";
import whatsApp from "../styles/images/whats-app.png";
import face from "../styles/images/facebook.png";
import logo from "../styles/images/logo-cesver-footer.png";

export default function Footer() {
  return(
    <footer className="footer">
      <section className="footer-info">
        <div className="footer-info-up">
          <ul className="cesver-address">
            <li>
              Centro de Estudios Superiores de Veracruz<br />
              Serafín Olarte #43 Col. Martires de Chicago<br />
              C.P. 91090. Xalapa-Enríquez, Ver.
            </li>
            <li className="oculto">s</li>
            <li className="cesver-phone">
              Tel. 228 8182038/39
            </li>
          </ul>
          <ul className="cesver-rvoe">
            <li>
              INCORPORADO A LA SEV
            </li>
            <li>
              CCT 498403694506
            </li>
            <li>
              C.I. 23490687
            </li>
          </ul>
        </div>
        <div className="footer-info-down">
          <p className="copy-right">
            Copyright © 2024 CESVER
          </p>
          <ul className="social-networks">
            <li>
              <a href="https://wa.me/522286152720?text=Me%20podría%20brindar%20información%20por%20favor." target="_blank">
                <Image
                  src={whatsApp}
                  alt="What's App"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Cesver.Xalapa.Oficial" target="_blank">
                <Image
                  src={face}
                  alt="facebook"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <figure className="cesver-logo">
        <Image
          src={logo}
          alt="cesver-logo"
        />
      </figure>
    </footer>
  );
}