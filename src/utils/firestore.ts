import firebase from 'firebase/app';
import 'firebase/firestore';

require('firebase/firestore');

export const db = firebase.firestore();

// 예시
const firestoreSet = () => {
  const data: any = {
    en: '1',
    ko: '2',
  };

  db.collection('subscribe').doc('email').set(data);

  db.collection('subscribe')
    .add({
      one: 5,
      two: 6,
    })
    .then(() => {
      console.log('성공');
    })
    .catch(() => {
      console.error('에러');
    });
};
