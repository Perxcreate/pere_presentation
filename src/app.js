import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import IndexPage from "./pages/index-page";
import Header from "./components/header";
import ContactPage from "./pages/contact";
import MyClientsPage from "./pages/my-clients";
import MyWorksPage from "./pages/my-works";
import AboutMePage from "./pages/about-me";
import Error404 from "./pages/error_404";
import MyGames from "./pages/my-games";
import translations from "./lib/translations-object";

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
        <Route exact path="/clients" element={<MyClientsPage lang={selectedLang} translations={translations} />} />
        <Route exact path="/myworks" element={<MyWorksPage lang={selectedLang} translations={translations} />} />
        <Route exact path="/aboutme" element={<AboutMePage lang={selectedLang} translations={translations} />} />
        <Route exact path="/mygames" element={<MyGames lang={selectedLang} translations={translations} />} />
        <Route path="*" element={<Error404 lang={selectedLang} translations={translations}/>} />
      </Routes>
    </div>
  );
}

export default App;
