import initFirebase from '../../utils/auth/initFirebase';
import firebase from 'firebase/app';
import { useEffect } from 'react';

initFirebase();

const Count = () => {
  const countVisit = sessionStorage.getItem('count');
  console.log(`countVisit: ${countVisit}`);
  const firebaseDatabaseRef = firebase.database().ref('article/two-language');

  useEffect(() => {
    firebaseDatabaseRef.once('value', (snapshot) => {
      const data = snapshot.val();
      console.log(`data: ${data}`);
      countVisit || firebaseDatabaseRef.set(Number(data) + 1);
    });
  }, []);

  sessionStorage.setItem('count', 'visit');

  // 파이어베이스에서 해당하는 콘텐츠의 기존 방문자 수를 받아와 1을 더해준다.

  return <h1>테스트</h1>;
};

export default Count;
