import React, { useState, useEffect } from "react";
import { Routes, Route,useParams, useLocation } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Header from "./components/header";
import ContactPage from "./pages/contact";
import OurClientsPage from "./pages/ourclients";
import OurJobPage from "./pages/ourjob";
import ThePopcornPage from "./pages/thepopcorn";
import Error404 from "./pages/Error404";

const translations = {
    en: {
        soon: "Soon",
        hometitle: "Home",
        jobtitle:"My job",
        clientstitle:"Clients",
        contacttitle:"Contact me",
        knowme:"Know me",
        quote:"Programmer specialized in web page development",
        errorback:"Back to home",
        startto:"Start designing",
        future: "your future",
        about:"I delved into the zeros and ones. It will be because of the infinite learning that programming offers, because of the instant satisfaction it gives me when I get it to work, or because it doesn't feel like work when I'm immersed; but I have found the job that deserves my passion."
        },
      es: {
        soon: "Próximamente",
        hometitle: "Inicio",
        jobtitle:"Mi trabajo",
        clientstitle:"Clientes",
        contacttitle:"Contáctame",
        knowme:"Conóceme",
        quote:"Programador especializado en el desarrollo de páginas web",
        errorback:"Volver al inicio",
        startto:"Empieza a",
        future: "diseñar tu futuro",
        about:"Me adentré en los ceros y unos. Será por el aprendizaje infinito que ofrece la programación, por la satisfacción instantánea que me brinda cuando consigo hacerlo funcionar, o porque no parece un trabajo cuando estoy inmerso; pero he encontrado el oficio que merece mi pasión."
        },
      ca: {
        soon: "Properament",
        hometitle: "Inici",
        jobtitle:"La meva feina",
        clientstitle:"Clients",
        contacttitle:"Contacta'm",
        knowme:"Coneix-me",
        quote:"Programador especialitzat en el desenvolupament de pàgines web",
        errorback:"Tornar al inici",
        startto:"Comença a",
        future: "dissenyar el teu futur",
        about:"Em vaig endinsar als zeros i uns. Serà per l'aprenentatge infinit que ofereix la programació, per la satisfacció instantània que em brinda quan aconsegueixo fer-ho funcionar, o perquè no sembla una feina quan estic immers; però he trobat l'ofici que mereix la passió."
        }
};

function App () {
  const { lang } = useParams();
  const [selectedLang, setSelectedLang] = useState(lang || 'en');
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setSelectedLang(lang || 'en');
  }, [lang]);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  function changeLanguage (languageCode) {
    setSelectedLang(languageCode);
    window.history.pushState(null, '', `${currentPath}?lang=${languageCode}`);
  };
  return (
    <div>
      <Header lang={selectedLang} translations={translations} changeLanguage={changeLanguage}/>
      <Routes>
        <Route exact path="/" element={<IndexPage lang={selectedLang} translations={translations} />} />
        <Route exact path="/contact" element={<ContactPage lang={selectedLang} translations={translations} />} />
        <Route exact path="/clients" element={<OurClientsPage lang={selectedLang} translations={translations} />} />
        <Route exact path="/myjob" element={<OurJobPage lang={selectedLang} translations={translations} />} />
        <Route exact path="/peremartinezibar" element={<ThePopcornPage lang={selectedLang} translations={translations} />} />
        <Route path="*" element={<Error404 lang={selectedLang} translations={translations}/>} />
      </Routes>
    </div>
  );
}

export default App;
