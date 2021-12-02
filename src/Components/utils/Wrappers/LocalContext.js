import React, { createContext, useState, useEffect, useContext } from "react";
import { IntlProvider } from "react-intl";
// import nl from "../i18n/nl.json";
// import fr from "../i18n/fr.json";

const messages = {
  fr: "fr",
  nl: "nl",
};

export const LocaleContext = createContext();
export const useLocale = () => useContext(LocaleContext);
const LocaleContextProvider = (props) => {
  const [texts, setTexts] = useState("");
  const [locale, setLocale] = useState(() => {
    const localData = localStorage.getItem("locale");
    let res;
    if (localData) {
      res = JSON.parse(localData);
    } else {
      const language = navigator.language.split(/[-_]/)[0];
      res = messages.hasOwnProperty(language) ? language : "en";
    }
    return res;
  });

  useEffect(() => {
    setTexts(messages[locale]);
    localStorage.setItem("locale", JSON.stringify(locale));
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ setLocale, texts }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {props.children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;
