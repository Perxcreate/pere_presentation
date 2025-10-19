import React from "react";
import Title from "../components/title";
import JobCards from "../components/my-job-cards";
import useIsMobile from "../hooks/useIsMobile";

function MyGames({ lang, translations }) {
  const isMobile = useIsMobile();
  return (
    <div className="galaxy-bg">
      {isMobile ? (
        <main>
          <Title title={translations[lang].gamestitle} />
          <section className="flex-column around">
            <JobCards
              lang={lang}
              translations={translations}
              link="https://blackjack-arena.com"
              image="img/blackjack_game_preview.png"
              alt={translations[lang].altblackjack}
            />
            <JobCards
              lang={lang}
              translations={translations}
              link="https://localchess.surge.sh"
              image="img/chess_game_preview.png"
              alt={translations[lang].altchess}
            />
          </section>
        </main>
      ) : (
        <div>
          <Title title={translations[lang].gamestitle} />
          <section className="flex around">
            <JobCards
              lang={lang}
              translations={translations}
              link="https://blackjack-arena.com"
              image="img/blackjack_game_preview.png"
              alt={translations[lang].altblackjack}
            />
            <JobCards
              lang={lang}
              translations={translations}
              link="https://localchess.surge.sh"
              image="img/chess_game_preview.png"
              alt={translations[lang].altchess}
            />
          </section>
        </div>
      )}
    </div>
  );
}

export default MyGames;
