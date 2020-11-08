import initFirebase from '../../../utils/auth/initFirebase';
import firebase from 'firebase/app';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import WriteGuestBook from '../../components/twenties/view/write-guest-book';
import StaggerDots from '../../components/framer/loading/stagger-dots';

initFirebase();

const Index = () => {
  const [contents, setContents] = useState([]);
  const [writeMode, setWriteMode] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const showData = () => {
    setLoading(false);
    refOnFunc();
  };

  useEffect(() => {
    if (!contents) {
      return;
    }
    // refOnFunc();
    showData();
    return () => refOnFunc();
  }, []);

  const showContents =
    writeMode === false &&
    contents.map((content, index) => <Test key={index}>{content}</Test>);

  const showWriteMode = () => {
    setWriteMode(writeMode === false ? true : false);
  };

  // console.log(`VisitorBookWriteMode: ${writeMode}`);

  const display =
    writeMode === true ? (
      <WriteGuestBook showWriteMode={showWriteMode} />
    ) : (
      <button onClick={showWriteMode}>
        <h1>방명록 쓰기</h1>
      </button>
    );

  if (loading === true) {
    return (
      <>
        <StaggerDots />
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
