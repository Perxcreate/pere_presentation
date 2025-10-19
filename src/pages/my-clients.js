import React from "react";
import useIsMobile from "../hooks/useIsMobile";
import Title from "../components/title";
import Tooltip from "../components/tooltip";

function MyClientsPage({lang, translations}) {
  const isMobile = useIsMobile();
  return (
    <main className="nevulosa-bg">
      <Title title={translations[lang].clientstitle} />

      <div className="logos">
        <div
          className={
            isMobile ? "logos2 flex-column around" : "logos2 flex wrap around"
          }
        >
          <a href="https://itoldyou.surge.sh" target="_blank" rel="nofollow">
            <img className="logo-clients" src="img/logo_itoldyou.png" alt={translations[lang].altitoldyoulogo}/>
          </a>
          <a href="https://suntakabarcelona.com" target="_blank" rel="nofollow">
            <img className="logo-clients" src="img/logo_suntaka.png" alt={translations[lang].altsuntakalogo}/>
          </a>
          <Tooltip text={translations[lang].soon}>
            <img className="logo-clients3" src="img/logo_drama_new.png" alt={translations[lang].altdramalogo}/>
          </Tooltip>
          <a href="https://lxryfootball.surge.sh" target="_blank" rel="nofollow">
            <img className="logo-clients2" src="img/logo_lxry.png" alt={translations[lang].altlxrylogo}/>
          </a>
          <a href="https://farocastelldefels.com" target="_blank" rel="nofollow">
            <img className="logo-clients" src="img/logo_faro_azul.png" alt={translations[lang].altfarologo}/>
            </a>
        </div>
      </div>
    </main>
  );
}

export default MyClientsPage;
