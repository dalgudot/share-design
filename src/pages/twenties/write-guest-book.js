import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import initFirebase from '../../../utils/auth/initFirebase';
import firebase from 'firebase/app';

initFirebase();

const WriteGuestBook = () => {
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const textRef = useRef();

  const updateText = (e) => {
    setText(e.target.value);
  };

  const createRandomNumber = () => {
    // 오늘 날짜
    const today = new Date();
    const year = String(today.getFullYear()); // 년도
    const month = String(today.getMonth() + 1); // 월
    const date = String(today.getDate()); // 날짜
    const hours = String(today.getHours()); // 시
    const minutes = String(today.getMinutes()); // 분
    const seconds = String(today.getSeconds()); // 초
    // console.log(`today is ${year}/${month}/${date}`);
    const min = 100000000;
    const max = Math.floor(Number.MAX_VALUE); // floor 버림 ceil 올림
    const randomId = Math.floor(Math.random() * (max - min) + min);
    const id = String(randomId);
    console.log(`original id: ${id}`);
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`toChangeDotToRandomNum: ${randomNum}`);
    const changeDotToRandomNum = String(randomNum);
    const replaceId = id.replace('.', changeDotToRandomNum);
    const finalId = year + month + date + hours + minutes + seconds + replaceId;
    setId(finalId);
  };

  console.log(`id: ${id}`);

  useEffect(() => {
    createRandomNumber();
    textRef.current.focus();
  }, []);

  // const syncGuestBook = () => {
  //   const ref = firebase.database().ref('guestBook');
  //   ref.on('value', (snapshot) => {
  //     const value = snapshot.val();
  //     value && updateText(value);
  //   });

  //   return () => ref.off();
  // };

  // useEffect(() => {
  //   if (!id) {
  //     return;
  //   }
  //   syncGuestBook();

  //   // 컴포넌트 unmount됐을 때
  //   return () => {
  //     syncGuestBook();
  //   };
  // }, [id]);

  useEffect(() => {
    firebase.database().ref(`guestBook/${id}`).set(text);
  }, [text]);

  return (
    <>
      <MultiLineTextField
        ref={textRef}
        onChange={updateText}
        name="Visit Book"
        placeholder="방명록"
        rows="10"
        cols="33"
        autoComplete="off"
      />
      <button onClick={createRandomNumber}>
        <h1>방명록 쓰기</h1>
      </button>
    </>
  );
};

export default WriteGuestBook;

const MultiLineTextField = styled.textarea`
  resize: none;
  padding: 24px;
`;
