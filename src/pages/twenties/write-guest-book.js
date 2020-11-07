import Link from 'next/link';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import initFirebase from '../../../utils/auth/initFirebase';
import firebase from 'firebase/app';

initFirebase();

const WriteGuestBook = ({ showWriteMode }) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [id, setId] = useState('');
  const textRef = useRef();

  const updateText = (e) => {
    setText(e.target.value);

    if (e.target.value.length > 8) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }

    console.log(`butDisabled: ${btnDisabled}`);
  };

  useEffect(() => {
    createRandomNumber();
    textRef.current.focus();
  }, []);

  const updateData = () => {
    firebase.database().ref(`guestBook/${id}`).set(text);
  };

  const cptWirteGuestBook = () => {
    showWriteMode();
    updateData();
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
    const replaceId = id.replace('.', '<->');
    const finalId = year + month + date + hours + minutes + seconds + replaceId;
    setId(finalId);
  };

  console.log(`id: ${id}`);

  return (
    <>
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
        <button onClick={cptWirteGuestBook} disabled={btnDisabled}>
          방명록 남기기
        </button>
      </h1>
      <h1>
        <button onClick={showWriteMode}>취소</button>
      </h1>
      {/* <h1>
        <Link href="/twenties/guest-book">
          <a>취소</a>
        </Link>
      </h1> */}
      {/* <h1>
        <Link href="/twenties/guest-book">
          <button onClick={updateData}>
            <a>방명록 남기기</a>
          </button>
        </Link>
      </h1> */}
    </>
  );
};

export default WriteGuestBook;

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

// 백업

// const createRandomNumber = () => {
//   // 오늘 날짜
//   const today = new Date();
//   const year = String(today.getFullYear()); // 년도
//   const month = String(today.getMonth() + 1); // 월
//   const date = String(today.getDate()); // 날짜
//   const hours = String(today.getHours()); // 시
//   const minutes = String(today.getMinutes()); // 분
//   const seconds = String(today.getSeconds()); // 초
//   // console.log(`today is ${year}/${month}/${date}`);
//   const min = 100000000;
//   const max = Math.floor(Number.MAX_VALUE); // floor 버림 ceil 올림
//   const randomId = Math.floor(Math.random() * (max - min) + min);
//   const id = String(randomId);
//   // console.log(`original id: ${id}`);
//   const randomNum = Math.floor(Math.random() * 100);
//   // console.log(`toChangeDotToRandomNum: ${randomNum}`);
//   const changeDotToRandomNum = String(randomNum);
//   const replaceId = id.replace('.', changeDotToRandomNum);
//   const finalId = year + month + date + hours + minutes + seconds + replaceId;
//   setId(finalId);
// };
