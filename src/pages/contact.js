import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import { Link } from "react-router-dom";

function ContactPage({lang, translations}) {
  const isMobile = useIsMobile();
  return (
    <div>
      <main
        className={
          isMobile ? "contact-container flex-column" : "contact-container flex"
        }
      >
        <section className={isMobile ? "flex-column" : "flex-1"}>
          <img className="contact-logo" src="img/firma.png" />

          <div className="contact-title">
            <h2 className="start-contact">{translations[lang].startto}</h2>
            <h2>{translations[lang].future}</h2>
          </div>
        </section>

        <section className={isMobile ? "flex-column" : "flex-1"}>
          <Link
            to="mailto:peredevelops@gmail.com"
            className="no-link footer-contacts"
          >
            peredevelops@gmail.com
          </Link>
          <br></br>
          <br></br>
          <Link to="tel:+34 671 75 32 80" className="no-link footer-contacts">
            (+34) 671 75 32 80
          </Link>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
