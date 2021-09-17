import firebase from 'firebase/app';
import { getDate } from './get-date';

export const VisitsAndViewsDuringSession = (where: string) => {
  const statisticsOnOff: boolean = true;

  const statisticsFunction = () => {
    const visitsDuringSession = sessionStorage.getItem('visitsDuringSession');
    // console.log('visitsDuringSession');
    // visitsDuringSession이 null이거나 undefined면
    // 세션 동안 모든 페이지에서 1번만 기록됨 -> 방문자 수
    visitsDuringSession ?? VisitsDuringSession();

    const viewsDuringSession = sessionStorage.getItem(
      `viewsDuringSession of ${where}`
    );
    viewsDuringSession ?? ViewsDuringSession(where);
  };

  statisticsOnOff && statisticsFunction();
};

const firebaseFetchSet = (route: string) => {
  const firebaseDatabaseRef = firebase.database().ref(route);

  firebaseDatabaseRef.once('value', (snapshot) => {
    const data = snapshot.val();
    firebaseDatabaseRef.set(Number(data) + 1);
  });
};

const when = getDate().when;
const year = getDate().year;
const month = getDate().month;

// 방문자
const VisitsDuringSession = () => {
  const userBrowserLanguage = navigator.language;

  // S of 연도별 전체 방문자 수
  firebaseFetchSet(`Number of Visitors/Total Visitors/Total All on ${year}`);
  // E of 연도별 전체 방문자 수

  // S of 전체 방문자 수
  firebaseFetchSet('Number of Visitors/Total Visitors/Total All');

  // 브라우저 언어별 방문자 수
  firebaseFetchSet(
    `Number of Visitors/Total Visitors/userBrowserLanguage/${userBrowserLanguage}`
  );
  // E of 전체 방문자 수

  // S of 월별 전체 방문자 수
  firebaseFetchSet(`Number of Visitors/${year}/${month}/Total All`);
  // E of 월별 전체 방문자 수

  // S of 날짜별 전체 방문자 수
  firebaseFetchSet(
    `Number of Visitors/${year}/${month}/Total Visitors on ${when}`
  );
  // E of 날짜별 전체 방문자 수

  sessionStorage.setItem('visitsDuringSession', 'yes');
};

// 조회수
const ViewsDuringSession = (where: string) => {
  // Index - Home & Contact
  const views = () => {
    // S of Index 연도별 전체 조회수
    firebaseFetchSet(`Number of Views/${where}/Total All on ${year}`);
    // E of Index 연도별 전체 조회수

    // S of Index 전체 조회수
    firebaseFetchSet(`Number of Views/${where}/Total All`);
    // E of Index 전체 조회수

    // S of 월별 전체 조회수
    firebaseFetchSet(`Number of Views/${where}/${year}/${month}/Total All`);
    // E of 월별 전체 조회수

    // S of Index 날짜별 전체 조회수
    firebaseFetchSet(
      `Number of Views/${where}/${year}/${month}/Total on ${when}`
    );
    // E of Index 날짜별 전체 조회수
  };

  // Product
  const viewsProduct = () => {
    // S of Index 연도별 전체 조회수
    firebaseFetchSet(
      `Number of Views/Product/001 ${where}/Total All on ${year}`
    );
    // E of Index 연도별 전체 조회수

    // S of Index 전체 조회수
    firebaseFetchSet(`Number of Views/Product/001 ${where}/Total All`);
    // E of Index 전체 조회수

    // S of 월별 전체 조회수
    firebaseFetchSet(
      `Number of Views/Product/001 ${where}/${year}/${month}/Total All`
    );
    // E of 월별 전체 조회수

    // S of Index 날짜별 전체 조회수
    firebaseFetchSet(
      `Number of Views/Product/001 ${where}/${year}/${month}/Total on ${when}`
    );
    // E of Index 날짜별 전체 조회수
  };

  // Article
  const viewsArticle = () => {
    // S of Article 연도별 전체 조회수
    firebaseFetchSet(
      `Number of Views/Article/000 All Articles/Total All on ${year}`
    );
    // E of Article 연도별 전체 조회수

    // S of Article 전체 조회수
    firebaseFetchSet('Number of Views/Article/000 All Articles/Total All');
    // E of Article 전체 조회수

    // S of Article 월별 전체 조회수
    firebaseFetchSet(
      `Number of Views/Article/000 All Articles/${year}/${month}/Total All`
    );
    // E of Article 월별 전체 조회수

    // S of Article 날짜별 전체 조회수
    firebaseFetchSet(
      `Number of Views/Article/000 All Articles/${year}/${month}/Total on ${when}`
    );
    // E of Article 날짜별 전체 조회수

    /////////////////////////////////////////////////////////////////////////////////

    // S of [각] Article 연도별 전체 조회수
    firebaseFetchSet(`Number of Views/Article/${where}/Total All on ${year}`);
    // E of [각] Article 연도별 전체 조회수

    // S of [각] Article 전체 조회수
    firebaseFetchSet(`Number of Views/Article/${where}/Total All`);
    // E of [각] Article 전체 조회수

    // S of [각] Article 월별 전체 조회수
    firebaseFetchSet(
      `Number of Views/Article/${where}/${year}/${month}/Total All`
    );
    // E of [각] Article 월별 전체 조회수

    // S of [각] Article 날짜별 조회수
    firebaseFetchSet(
      `Number of Views/Article/${where}/${year}/${month}/Total on ${when}`
    );
    // E of [각] Article 날짜별 조회수
  };

  if (where === 'Home' || where === 'Product' || where === 'Contact') {
    views();
  } else if (where === 'SHARE PALETTE') {
    viewsProduct();
  } else {
    viewsArticle();
  }

  sessionStorage.setItem(`viewsDuringSession of ${where}`, `${where}`);
};

// IDEA: 파이어베이스에서 해당하는 콘텐츠의 기존 방문자 수를 받아와, 세션 스토리지에 방문 기록이 없다면 1을 더해준다.

// Nullish Coalescing Operator(null 병합 연산자) '??'
// 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자다.
