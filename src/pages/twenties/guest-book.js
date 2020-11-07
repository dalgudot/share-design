import Link from 'next/link';
import initFirebase from '../../../utils/auth/initFirebase';
import firebase from 'firebase/app';
import { useEffect } from 'react';

initFirebase();

const Index = () => {
  let contents = [];

  const refFunc = () => {
    firebase
      .database()
      .ref('guestBook')
      .once('value')
      .then(function (snapshot) {
        const data = snapshot.val();
        console.log(data);

        // Object.values() ---> 객체의 value값들만 반환
        console.log(snapshot.key + ' was ' + Object.values(data));

        contents = Object.values(data);

        console.log(contents);
      });
  };

  useEffect(() => {
    refFunc();
  }, []);

  return (
    <>
      <h1>
        <Link href="/twenties/write-guest-book">
          <a>방명록 쓰기</a>
        </Link>
      </h1>
      <h1>
        {contents.map((content) => {
          content;
        })}
      </h1>
    </>
  );
};

export default Index;
