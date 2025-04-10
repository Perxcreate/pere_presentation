import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
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
        jobtitle:"My works",
        clientstitle:"Clients",
        contacttitle:"Contact me",
        blackjacktitle:"BlackJack Simulator",
        knowme:"Know me",
        quote:"Programmer specialized in web page development",
        errorback:"Back to home",
        startto:"Start designing",
        future: "your future",
        about:"Programming has allowed me to develop an organized and methodical approach to problem solving. I enjoy the continuous learning process and the satisfaction of seeing how my constant efforts translate into efficient solutions. My passion for programming is based on discipline and persistence, always looking to improve and optimize each project."
      },
      es: {
        soon: "Próximamente",
        hometitle: "Inicio",
        jobtitle:"Mis trabajos",
        clientstitle:"Clientes",
        contacttitle:"Contáctame",
        blackjacktitle:"Simulador de BlackJack",
        knowme:"Conóceme",
        quote:"Programador especializado en el desarrollo de páginas web",
        errorback:"Volver al inicio",
        startto:"Empieza a",
        future: "diseñar tu futuro",
        about:"La programación me ha permitido desarrollar un enfoque organizado y metódico para resolver problemas. Disfruto del proceso de aprendizaje continuo y la satisfacción de ver cómo mis esfuerzos constantes se traducen en soluciones eficientes. Mi pasión por la programación se basa en la disciplina y la persistencia, siempre buscando mejorar y optimizar cada proyecto."
        },
      ca: {
        soon: "Properament",
        hometitle: "Inici",
        jobtitle:"La meva feina",
        clientstitle:"Clients",
        contacttitle:"Contacta'm",
        blackjacktitle:"Simulador de BlackJack",
        knowme:"Coneix-me",
        quote:"Programador especialitzat en el desenvolupament de pàgines web",
        errorback:"Tornar al inici",
        startto:"Comença a",
        future: "dissenyar el teu futur",
        about:"La programació m'ha permès desenvolupar un enfocament organitzat i metòdic per a resoldre problemes. Gaudeixo del procés d'aprenentatge continu i la satisfacció de veure com els meus esforços constants es tradueixen en solucions eficients. La meva passió per la programació es basa en la disciplina i la persistència, sempre buscant millorar i optimitzar cada projecte."
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
