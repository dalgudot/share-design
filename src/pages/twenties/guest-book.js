import { useState, useEffect } from 'react';
import styled from 'styled-components';
import WriteGuestBook from '../../components/twenties/view/write-guest-book';
import StaggerDots from '../../components/framer/loading/stagger-dots';
import firebase from 'firebase/app';
import GuestBookContent from '../../components/twenties/view/guest-book-content';

const Index = () => {
  const [contents, setContents] = useState([]);
  const [writeMode, setWriteMode] = useState(false);
  const [loading, setLoading] = useState(true);
  // console.log(`writeMode: ${writeMode}`);
  // console.log(`loading: ${loading}`);

  const refOnFunc = () => {
    firebase
      .database()
      .ref('guestBook')
      .ref.on('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(data);
        // console.log(snapshot.key);
        data && setContents(Object.values(data).reverse());
      });
    return () => ref.off();
  };

  useEffect(() => {
    if (!contents) {
      return;
    }
    refOnFunc();
    return () => refOnFunc();
  }, []);

  const showWriteMode = () => {
    setWriteMode(writeMode === false ? true : false);
  };

  const display =
    writeMode === true ? (
      <WriteGuestBook showWriteMode={showWriteMode} />
    ) : (
      <button onClick={showWriteMode}>
        <h1>방명록 쓰기</h1>
      </button>
    );

  const showContents =
    writeMode === false &&
    contents.map((content, index) => (
      <GuestBookContent
        key={index}
        keyNum={contents.reverse().indexOf(content)}
        content={content}
      />
    ));

  if (loading === true) {
    if (contents.length > 0) {
      setLoading(false);
    }
    return (
      <>
        <StaggerDots color="gray1" />
      </>
    );
  } else {
    return (
      <>
        {display}
        {showContents}
      </>
    );
  }
};

export default Index;

// Object.values() --> 배열 --> 객체의 value값들만 반환
// 배열.reverse() --> 역순으로 반환
