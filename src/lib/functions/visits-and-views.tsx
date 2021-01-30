import firebase from 'firebase/app';

export const VisitsAndViewsDuringSession = (where: string) => {
  const statisticsOnOff: boolean = false;

  const statisticsFunction = () => {
    const visitsDuringSession = sessionStorage.getItem('visitsDuringSession');
    // console.log('visitsDuringSession');
    // visitsDuringSession가 null이거나 undefined면
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

const today = new Date(); // today는 Date의 Instance
const year = String(today.getFullYear());
// 한 자리 숫자일 경우 앞에 0을 붙여줘 순서대로 데이터가 나올 수 있도록
const month =
  String(today.getMonth() + 1).length === 1
    ? '0' + String(today.getMonth() + 1)
    : String(today.getMonth() + 1);
const date =
  String(today.getDate()).length === 1
    ? '0' + String(today.getDate())
    : String(today.getDate());
const when = `${year}${month}${date}`;

// 방문자
const VisitsDuringSession = () => {
  const userBrowserLanguage = navigator.language;

  // S of 전체 방문자 수
  firebaseFetchSet('Number of Visitors/Total Visitors/Total All');

  // 브라우저 언어별 방문자 수
  firebaseFetchSet(`Number of Visitors/Total Visitors/${userBrowserLanguage}`);
  // E of 전체 방문자 수

  // S of 날짜별 전체 방문자 수
  firebaseFetchSet(`Number of Visitors/Total Visitors on ${when}`);
  // E of 날짜별 전체 방문자 수

  sessionStorage.setItem('visitsDuringSession', 'yes');
};

// 조회수
const ViewsDuringSession = (where: string) => {
  // Index - Home & Contact
  const viewsHome = () => {
    // S of Index 전체 조회수
    firebaseFetchSet(`Number of Views/${where}/Total All`);
    // E of Index 전체 조회수

    // S of Index 날짜별 전체 조회수
    firebaseFetchSet(`Number of Views/${where}/Total on ${when}`);
    // E of Index 날짜별 전체 조회수
  };

  // Article
  const viewsArticle = () => {
    // S of Article 전체 조회수
    firebaseFetchSet('Number of Views/Article/000 All Articles/Total All');
    // E of Article 전체 조회수

    // S of Article 날짜별 전체 조회수
    firebaseFetchSet(
      `Number of Views/Article/000 All Articles/Total on ${when}`
    );
    // E of Article 날짜별 전체 조회수

    // S of [각] Article 전체 조회수
    firebaseFetchSet(`Number of Views/Article/${where}/Total All`);
    // E of [각] Article 전체 조회수

    // S of [각] Article 날짜별 조회수
    firebaseFetchSet(`Number of Views/Article/${where}/Total on ${when}`);
    // E of [각] Article 날짜별 조회수
  };

  if (where === 'Home' || where == 'Contact') {
    viewsHome();
  } else {
    viewsArticle();
  }

  sessionStorage.setItem(`viewsDuringSession of ${where}`, `${where}`);
};

// IDEA: 파이어베이스에서 해당하는 콘텐츠의 기존 방문자 수를 받아와, 세션 스토리지에 방문 기록이 없다면 1을 더해준다.

// Nullish Coalescing Operator(null 병합 연산자) '??'
// 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.