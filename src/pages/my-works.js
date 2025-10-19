import React from "react";
import Title from "../components/title";
import JobCards from "../components/my-job-cards";
import useIsMobile from "../hooks/useIsMobile";

function MyWorksPage({ lang, translations }) {
  const isMobile = useIsMobile();
  return (
    <div className="space-bg">
      {isMobile ? (
        <main>
          <Title title={translations[lang].jobtitle} />
          <section className="flex-column around">
            <JobCards
              lang={lang}
              translations={translations}
              link="https://heydolfin.com"
              image="/img/dolfin_website_preview.PNG"
              alt={translations[lang].altdolfinpreview}
            />
            <JobCards
              lang={lang}
              translations={translations}
              link="https://suntakabarcelona.com"
              image="/img/suntaka_website_preview.PNG"
              alt={translations[lang].altsuntakapreview}
            />
          </section>
          <section className="flex-column around">
            <JobCards
              lang={lang}
              translations={translations}
              link="https://itoldyou.surge.sh"
              image="/img/itoldyou_website_preview.PNG"
              alt={translations[lang].altitoldyoupreview}
            />
            <JobCards
              lang={lang}
              translations={translations}
              image="/img/drama_website_preview.jpg"
              alt={translations[lang].altdramapreview}
            />
          </section>
          <section className="flex-column around">
            <JobCards
              lang={lang}
              translations={translations}
              link="https://lxryfootball.surge.sh"
              image="/img/lxry_website_preview.PNG"
              alt={translations[lang].altlxrypreview}
            />
            <JobCards
              link="https://farocastelldefels.com"
              lang={lang}
              translations={translations}
              image="/img/faro_website_preview.PNG"
              alt={translations[lang].altfaropreview}
            />
          </section>
        </main>
      ) : (
        <div>
          <Title title={translations[lang].jobtitle} />
          <section className="flex around">
            <JobCards
              lang={lang}
              translations={translations}
              link="https://heydolfin.com"
              image="/img/dolfin_website_preview.PNG"
              alt={translations[lang].altdolfinpreview}
            />
            <JobCards
              lang={lang}
              translations={translations}
              link="https://suntakabarcelona.com"
              image="/img/suntaka_website_preview.PNG"
              alt={translations[lang].altsuntakapreview}
            />
          </section>
          <section className="flex around">
            <JobCards
              lang={lang}
              translations={translations}
              link="https://itoldyou.surge.sh"
              image="/img/itoldyou_website_preview.PNG"
              alt={translations[lang].altitoldyoupreview}
            />
            <JobCards
              lang={lang}
              translations={translations}
              image="/img/drama_website_preview.jpg"
              alt={translations[lang].altdramapreview}
            />
          </section>
          <section className="flex around">
            <JobCards
              lang={lang}
              translations={translations}
              link="https://lxryfootball.surge.sh"
              image="/img/lxry_website_preview.PNG"
              alt={translations[lang].altlxrypreview}
            />
            <JobCards
              lang={lang}
              translations={translations}
              image="/img/faro_website_preview.PNG"
              link="https://farocastelldefels.com"
              alt={translations[lang].altfaropreview}
            />
          </section>
        </div>
      )}
    </div>
  );
}

export default MyWorksPage;
