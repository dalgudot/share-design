import react from 'react';
import initFirebase from '../../utils/auth/initFirebase';
import firebase from 'firebase/app';
import { useEffect } from 'react';

initFirebase();

const Count = () => {
  const countVisit = sessionStorage.getItem('count');

  countVisit || firebase.database().ref('visitCount/count').set(countVisit);

  sessionStorage.setItem('count', 'visit');

  // 파이어베이스에서 해당하는 콘텐츠의 기존 방문자 수를 받아와 1을 더해준다.

  return <h1>test</h1>;
};

export default Count;
