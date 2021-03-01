import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const detectBrowserLang = () => {
  const router = useRouter();

  const visited = useSelector((state: any) => state.visited);
  const dispatch = useDispatch();
  const visitedCheck = () =>
    dispatch({
      type: 'WAS_VISITED',
    });
  // console.log(`visited: ${visited}`);

  useEffect(() => {
    // 방문 기록 없을 때만 Browser Language 체크(최초 1회)
    visited === false && setInitialLanguage();
  }, []);

  const setInitialLanguage = () => {
    const userBrowserLanguage = navigator.language;
    // console.log(`userBrowserLanguage: ${userBrowserLanguage}`);

    const lang =
      userBrowserLanguage === 'ko' || // 크롬, edge
      userBrowserLanguage === 'ko-kr' || // 사파리
      userBrowserLanguage === 'ko-KR' || // 파이어폭스, 웨일
      userBrowserLanguage === 'KOR' // 기타
        ? 'ko'
        : 'en';
    // console.log(`lang: ${lang}`);

    if (router.query === {}) {
      lang === 'ko'
        ? router.push(router.pathname, router.pathname, { locale: 'ko' })
        : router.push(router.pathname, router.pathname, { locale: 'en' });
    } else if (router.query !== {}) {
      // dynamic routing 고려한 조건
      lang === 'ko'
        ? router.push(router.asPath, router.asPath, { locale: 'ko' })
        : router.push(router.asPath, router.asPath, { locale: 'en' });
    }

    visitedCheck(); // 최초 1회 방문 시에만 체크하기 위해 필요한 redux-persist dispatch 함수
  };
};
