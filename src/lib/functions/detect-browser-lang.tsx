import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';

export const DetectBrowserLang = () => {
  const lang = useSelector((state: any) => state.language);
  const userLanguageChange = useSelector(
    (state: any) => state.userLanguageChange
  );
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: 'LANGUAGE_CHANGE',
    });
  // console.log(`ReduxLang: ${lang}`);
  const userBrowserLanguage = navigator.language;

  useEffect(() => {
    userLanguageChangeFunc();
    setAttributeHtmlLang();
    // console.log('Only once');
    // lang === 'ko' ? Router.push(`/`) : Router.push(`/en`);
  }, []);

  const userLanguageChangeFunc = () => {
    // console.log(`userBrowserLang: ${userBrowserLanguage}`);
    const browserLanguage =
      userBrowserLanguage === 'ko' || // 크롬, edge
      userBrowserLanguage === 'ko-kr' || // 사파리
      userBrowserLanguage === 'ko-KR' || // 파이어폭스, 웨일
      userBrowserLanguage === 'KOR' // 기타
        ? 'ko'
        : 'en';

    // 사용자가 브라우저 언어와 다른 언어로 바꾼 경우에는 바꾼 언어로 유지.
    {
      userLanguageChange === 'no' &&
        // (userLanguage === lang ? null : languageChange());
        (browserLanguage === lang || languageChange());
    }
  };

  const setAttributeHtmlLang = () => {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
  };
};
