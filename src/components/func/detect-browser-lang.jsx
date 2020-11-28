import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const DetectBrowserLang = () => {
  const lang = useSelector((state) => state.language);
  const userLanguageChange = useSelector((state) => state.userLanguageChange);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: 'CHANGELANGUAGE',
    });
  // console.log(`ReduxLang: ${lang}`);
  const userBrowserLanguage = navigator.language;

  useEffect(() => {
    console.log(`userBrowserLang: ${userBrowserLanguage}`);
    const userLanguage =
      userBrowserLanguage === 'ko' || // 크롬
      userBrowserLanguage === 'ko-kr' || // 사파리
      userBrowserLanguage === 'ko-KR' || // 파이어폭스, 웨일
      userBrowserLanguage === 'KOR' // 기타 가능성
        ? 'ko'
        : 'en';

    // 사용자가 언어를 브라우저 언어를 다른 언어로 바꾼 경우에는 바꾼 언어로 유지.
    {
      userLanguageChange === 'no' &&
        (userLanguage === lang
          ? console.log('No Language Change')
          : languageChange());
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');

    // console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);
};
