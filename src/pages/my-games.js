import React from "react";
import Title from "../components/title";
import JobCards from "../components/my-job-cards";
import useIsMobile from "../hooks/useIsMobile";

function MyGames ({lang, translations}) {
  const isMobile = useIsMobile();
  return (
    <div className="galaxy-bg">
      {isMobile ? (
        <main>
          <Title title={translations[lang].gamestitle} />
          <section className="flex-column around">
            <JobCards lang={lang} translations={translations} link="https://blackjack-arena.com" image="img/blackjack.png" />
            <JobCards lang={lang} translations={translations}
              link="https://localchess.surge.sh"
              image="img/chess.png"
            />
          </section>
          
        </main>
      ) : (
        <div>
          <Title title={translations[lang].gamestitle} />
          <section className="flex around">
            <JobCards lang={lang} translations={translations} link="https://blackjack-arena.com" image="img/blackjack.png" />
            <JobCards lang={lang} translations={translations}
              link="https://localchess.surge.sh"
              image="img/chess.png"
            />
          </section>
          
        </div>
      )}
    </div>
  );
}

export default MyGames;