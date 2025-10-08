import React from "react";
import Title from "../components/title";
import useIsMobile from "../hooks/useIsMobile";

function ThePopcornPage({lang, translations}) {
  const isMobile = useIsMobile();
  return (
    <div className="space-bg">
      <Title title={translations[lang].knowme} />
      <main className={isMobile ? "flex-column" : "flex around"}>
        <section className={isMobile ? "mobile-knowme" : "flex-30"}>
          <div className="pere">
            <h4 className="team-name">Pere Martínez Ibar</h4>
            <p className="team-text">
              {translations[lang].about}
            </p>
          </div>
        </section>

        <section>
          <div className=" flex-column">
            <img className="img-group" src="img/pere.jpg" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default ThePopcornPage;
