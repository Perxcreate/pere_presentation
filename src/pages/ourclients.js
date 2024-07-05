import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import Title from "../components/title";
import Tooltip from "../components/tooltip";

function OurClientsPage({lang, translations}) {
  const isMobile = useIsMobile();
  return (
    <main>
      <Title title={translations[lang].clientstitle} />

      <div className="logos">
        <div
          className={
            isMobile ? "logos2 flex-column around" : "logos2 flex wrap around"
          }
        >
          <a href="https://itoldyou.surge.sh" target="_blank" rel="nofollow">
            <img className="logo-clients" src="img/logo-itoldyou.png" />
          </a>
          <a href="https://suntakabarcelona.com" target="_blank" rel="nofollow">
            <img className="logo-clients" src="img/logo-suntaka.png" />
          </a>
          <a href="https://lxryfootball.surge.sh" target="_blank" rel="nofollow">
            <img className="logo-clients2" src="img/logo-lxry.png" />
          </a>
          <Tooltip text={translations[lang].soon}>
            <img className="logo-clients" src="img/logo-drama.png" />
          </Tooltip>
        </div>
      </div>
    </main>
  );
}

export default OurClientsPage;
