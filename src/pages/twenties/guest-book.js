import Link from 'next/link';
import initFirebase from '../../../utils/auth/initFirebase';
import firebase from 'firebase/app';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import WriteGuestBook from './write-guest-book';

initFirebase();

const Index = () => {
  const [contents, setContents] = useState([]);
  const [writeMode, setWriteMode] = useState(false);

  const refOnFunc = () => {
    const ref = firebase.database().ref('guestBook');

    ref.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      // console.log(snapshot.key + ' was ' + Object.values(data));
      // Object.values() ---> 객체의 value값들만 반환
      data && setContents(Object.values(data));
    });

    return () => ref.off();
  };

  console.log(contents);

  useEffect(() => {
    if (!contents) {
      return;
    }
    refOnFunc();
    return () => refOnFunc();
  }, []);

  const showContents =
    writeMode === false &&
    contents.map((content, index) => <Test key={index}>{content}</Test>);

  const showWriteMode = () => {
    setWriteMode(writeMode === false ? true : false);
  };

  console.log(writeMode);

  const display =
    writeMode === true ? (
      <WriteGuestBook showWriteMode={showWriteMode} />
    ) : (
      <button onClick={showWriteMode}>
        <h1>방명록 쓰기</h1>
      </button>
    );

  return (
    <>
      {display}
      {/* <h1>
        <Link href="/twenties/write-guest-book">
          <a>방명록 쓰기</a>
        </Link>
      </h1> */}
      {showContents}
    </>
  );
};

export default Index;

const Test = styled.h1`
  font-size: 72px;
  color: white;
`;
