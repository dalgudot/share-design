import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const DetectBrowserLang = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: "CHANGELANGUAGE",
    });

  console.log(`lang: ${lang}`);

  const userBrowserLanguage = navigator.language;

  // Browser Language Detect
  // ko-KR, ko, KOR
  useEffect(() => {
    console.log(`userBrowserLang: ${userBrowserLanguage}`);

    const userLanguage =
      userBrowserLanguage === "ko" || userBrowserLanguage === "ko-KR"
        ? "ko"
        : "en";

    const provideLang =
      userLanguage === lang
        ? console.log("No Language Change")
        : languageChange();
    console.log(provideLang);
  }, []);

  useEffect(() => {
    // html "lang" attribute 변경
    document.documentElement.setAttribute("lang", lang === "ko" ? "ko" : "en");

    console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);

  // console.log("End");
};
