import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import initFirebase from '../../../utils/auth/initFirebase';
import firebase from 'firebase/app';

initFirebase();

const WriteGuestBook = ({ showWriteMode }) => {
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const textRef = useRef();
  const btnRef = useRef();

  const updateText = (e) => {
    setText(e.target.value);
    firebase.database().ref(`guestBook/${id}`).set(text);
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

  // console.log(`id: ${id}`);

  useEffect(() => {
    createRandomNumber();
    textRef.current.focus();
  }, []);

  useEffect(() => {
    btnRef.current.disabled.true;
  }, []);

  return (
    <Form>
      <MultiLineTextField
        ref={textRef}
        onKeyUp={updateText}
        name="Visit Book"
        placeholder="10자 이상 부탁드릴게요 🙏"
        rows="10"
        cols="33"
        minlength="10"
        autoComplete="on"
      />
      <h1>
        {/* <button ref="btnRef" onClick={showWriteMode}>
          방명록 남기기
        </button> */}
        <Link href="/twenties/guest-book">
          <a>
            <button ref={btnRef}>방명록 남기기</button>
          </a>
        </Link>
      </h1>
    </Form>
  );
};

export default WriteGuestBook;

const Form = styled.form`
button.disabled = true
`;

const MultiLineTextField = styled.textarea`
  resize: none;
  padding: 24px;

  :invalid {
    border: 2px dashed red;
  }

  :valid {
    border: 2px solid lime;
  }
`;
