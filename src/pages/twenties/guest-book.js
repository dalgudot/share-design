import { useState, useEffect } from 'react';
import styled from 'styled-components';
import WriteGuestBook from '../../components/twenties/view/write-guest-book';
import StaggerDots from '../../components/framer/loading/stagger-dots';
import initFirebase from '../../../utils/auth/initFirebase';
import firebase from 'firebase/app';

initFirebase();

const Index = () => {
  const [contents, setContents] = useState([]);
  const [writeMode, setWriteMode] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log(`writeMode: ${writeMode}`);
  console.log(`loading: ${loading}`);

  const refOnFunc = () => {
    firebase
      .database()
      .ref('guestBook')
      .ref.on('value', (snapshot) => {
        const data = snapshot.val();
        // console.log(data);
        // console.log(snapshot.key);
        // Object.values() --> 배열 --> 객체의 value값들만 반환
        // 배열.reverse() --> 역순으로 반환
        data && setContents(Object.values(data).reverse());
      });

    return () => ref.off();
  };

  console.log(`guestBookDataValue: ${contents}`);

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
    contents.map((content, index) => <Test key={index}>{content}</Test>);

  if (loading === true) {
    if (contents.length > 0) {
      setLoading(false);
    }
    return (
      <>
        <StaggerDots color="white" />
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

const Test = styled.p`
  font-size: 24px;
  color: white;
`;
