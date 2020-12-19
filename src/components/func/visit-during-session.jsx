import firebase from 'firebase/app';
import { useEffect } from 'react';

export const VisitAndViewsDuringSession = (where) => {
  const visitDuringSession = sessionStorage.getItem('visitDuringSession');
  console.log('visitDuringSession');

  // visitDuringSession가 null이거나 undefined면
  visitDuringSession ?? VisitDuringSession();
  ViewsDuringSession(where);
};

const today = new Date();
const year = String(today.getFullYear());
const month = String(today.getMonth() + 1);
const date = String(today.getDate());
const when = `${year}${month}${date}`;

// 방문자
const VisitDuringSession = () => {
  useEffect(() => {
    // S of [가변] 날짜별 전체 방문자 수
    const firebaseDatabaseRefArticleTotal = firebase
      .database()
      .ref(`Number of Visitors/Total Visitors on ${when}`);

    firebaseDatabaseRefArticleTotal.once('value', (snapshot) => {
      const data = snapshot.val();
      firebaseDatabaseRefArticleTotal.set(Number(data) + 1);
    });
    // E of [가변] 날짜별 전체 방문자 수

    // S of [고정] 전체 방문자 수
    const firebaseDatabaseRefTotal = firebase
      .database()
      .ref('Number of Visitors/Total Visitors');

    firebaseDatabaseRefTotal.once('value', (snapshot) => {
      const data = snapshot.val();
      firebaseDatabaseRefTotal.set(Number(data) + 1);
    });
    // E of [고정] 전체 방문자 수

    sessionStorage.setItem('visitDuringSession', 'yes');
  }, []);
};

// 조회수
const ViewsDuringSession = (where) => {
  const viewsDuringSession = sessionStorage.getItem(
    `viewsDuringSession of ${where}`
  );
  console.log(`viewsDuringSession of ${where}`);

  // viewsDuringSession이 null이고 viewsDuringSession of ${where}의 Value가 ${where}과 같지 않을 때
  // (viewsDuringSession === null) & (String(viewsDuringSession) !== `${where}`) &&
  viewsDuringSession ??
    useEffect(() => {
      // S of [고정] 전체 방문수
      const firebaseDatabaseRefTotalAll = firebase
        .database()
        .ref('Number of Views/All Views/Total All');

      firebaseDatabaseRefTotalAll.once('value', (snapshot) => {
        const data = snapshot.val();
        firebaseDatabaseRefTotalAll.set(Number(data) + 1);
      });
      // E of [고정] 전체 방문수

      // S of [고정] 날짜별 전체 방문수
      const firebaseDatabaseRefTotalAllWhen = firebase
        .database()
        .ref(`Number of Views/All Views/Total on ${when}`);

      firebaseDatabaseRefTotalAllWhen.once('value', (snapshot) => {
        const data = snapshot.val();
        firebaseDatabaseRefTotalAllWhen.set(Number(data) + 1);
      });
      // E of [고정] 날짜별 전체 방문수

      const viewsIndex = () => {
        // S of [고정] Index 전체 방문수
        const firebaseDatabaseRefIndex = firebase
          .database()
          .ref('Number of Views/Index/Total All');

        firebaseDatabaseRefIndex.once('value', (snapshot) => {
          const data = snapshot.val();
          firebaseDatabaseRefIndex.set(Number(data) + 1);
        });
        // E of [고정] Index 전체 방문수

        // S of [고정] Index 날짜별 전체 방문수
        const firebaseDatabaseRefIndexWhen = firebase
          .database()
          .ref(`Number of Views/Index/Total on ${when}`);

        firebaseDatabaseRefIndexWhen.once('value', (snapshot) => {
          const data = snapshot.val();
          firebaseDatabaseRefIndexWhen.set(Number(data) + 1);
        });
        // E of [고정] Index 날짜별 전체 방문수
      };

      const viewsArticle = () => {
        // S of [고정] Article 전체 방문수
        const firebaseDatabaseRefArticleTotalAll = firebase
          .database()
          .ref('Number of Views/Article/All Articles/Total All');

        firebaseDatabaseRefArticleTotalAll.once('value', (snapshot) => {
          const data = snapshot.val();
          firebaseDatabaseRefArticleTotalAll.set(Number(data) + 1);
        });
        // E of [고정] Article 전체 방문수

        // S of [고정] Article 날짜별 전체 방문수
        const firebaseDatabaseRefArticleTotalAllWhen = firebase
          .database()
          .ref(`Number of Views/Article/All Articles/Total on ${when}`);

        firebaseDatabaseRefArticleTotalAllWhen.once('value', (snapshot) => {
          const data = snapshot.val();
          firebaseDatabaseRefArticleTotalAllWhen.set(Number(data) + 1);
        });
        // E of [고정] Article 날짜별 전체 방문수

        // S of [가변] 각 Article 전체 방문수
        const firebaseDatabaseRefArticleTotal = firebase
          .database()
          .ref(`Number of Views/Article/${where}/Total All`);

        firebaseDatabaseRefArticleTotal.once('value', (snapshot) => {
          const data = snapshot.val();
          firebaseDatabaseRefArticleTotal.set(Number(data) + 1);
        });
        // E of [가변] 각 Article 전체 방문수

        // S of [가변] 각 Article 날짜별 방문수
        const firebaseDatabaseRefArticleWhen = firebase
          .database()
          .ref(`Number of Views/Article/${where}/Total on ${when}`);

        firebaseDatabaseRefArticleWhen.once('value', (snapshot) => {
          const data = snapshot.val();
          firebaseDatabaseRefArticleWhen.set(Number(data) + 1);
        });
        // E of [가변] 각 Article 날짜별 방문수
      };

      where === 'Index' ? viewsIndex() : viewsArticle();
    }, []);

  sessionStorage.setItem(`viewsDuringSession of ${where}`, `${where}`);
};

// IDEA: 파이어베이스에서 해당하는 콘텐츠의 기존 방문자 수를 받아와, 세션 스토리지에 방문 기록이 없다면 1을 더해준다.

// Nullish Coalescing Operator(null 병합 연산자) '??'
// 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.
