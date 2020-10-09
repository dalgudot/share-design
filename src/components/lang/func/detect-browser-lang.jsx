import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const DetectBrowserLang = () => {
    const lang = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const languageChange = () =>
    dispatch({
      type: "CHANGELANGUAGE",
    });
    const userBrowserLanguage = navigator.language; 
  
  // Browser Language Detect
  // ko-KR, ko, KOR
  useEffect(() => {
  console.log(userBrowserLanguage);
  console.log(lang);
  
  const userLanguage = userBrowserLanguage === "ko" ? "ko" : "en"
  console.log(userLanguage);
  
  const provideLang = userLanguage === lang ? console.log("No Language Change") : languageChange()
  console.log(provideLang)
  }, [])
  
  // html "lang" attribute 변경
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === "ko" ? "ko" : "en");
     }, [lang])
}