import React from "react";
import Title from "../components/title";
import JobCards from "../components/my-job-cards";
import useIsMobile from "../hooks/useIsMobile";

function OurJobPage({lang, translations}) {
  const isMobile = useIsMobile();
  return (
    <div>
      {isMobile ? (
        <main>
          <Title title={translations[lang].jobtitle} />
          <section className="flex-column around">
            <JobCards lang={lang} translations={translations} link="https://heydolfin.com" image="img/dolfin.PNG" />
            <JobCards lang={lang} translations={translations}
              link="https://suntakabarcelona.com"
              image="img/suntaka.PNG"
            />
          </section>
          <section className="flex-column around">
            <JobCards lang={lang} translations={translations}
              link="https://itoldyou.surge.sh"
              image="img/itoldyou.PNG"
            />
            <JobCards lang={lang} translations={translations} image="img/drama.PNG" />
          </section>
          <section className="flex-column around">
            <JobCards lang={lang} translations={translations}
              link="https://lxryfootball.surge.sh"
              image="img/lxry.PNG"
            />
             <JobCards link="https://farocastelldefels.com" lang={lang} translations={translations} image="img/faro.PNG" />
          </section>
        </main>
      ) : (
        <div>
          <Title title={translations[lang].jobtitle} />
          <section className="flex around">
            <JobCards lang={lang} translations={translations} link="https://heydolfin.com" image="img/dolfin.PNG" />
            <JobCards lang={lang} translations={translations}
              link="https://suntakabarcelona.com"
              image="img/suntaka.PNG"
            />
          </section>
          <section className="flex around">
            <JobCards lang={lang} translations={translations}
              link="https://itoldyou.surge.sh"
              image="img/itoldyou.PNG"
            />
            <JobCards lang={lang} translations={translations} image="img/drama.PNG" />
          </section>
          <section className="flex around">
            <JobCards lang={lang} translations={translations}
              link="https://lxryfootball.surge.sh"
              image="img/lxry.PNG"
            />
            <JobCards lang={lang} translations={translations} image="img/faro.PNG"
              link="https://farocastelldefels.com" 
             />
          </section>
        </div>
      )}
    </div>
  );
}

export default OurJobPage;
