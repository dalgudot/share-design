import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/app';

const WriteGuestBook = ({ showWriteMode }) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false);
  const textRef = useRef();

  const updateText = (e) => {
    setText(e.target.value);
    // 글자수 제한
    // if (e.target.value.length > 8) {
    //   setBtnDisabled(false);
    // } else {
    //   setBtnDisabled(true);
    // }
    // console.log(`butDisabled: ${btnDisabled}`);
  };

  useEffect(() => {
    textRef.current.focus();
  }, []);

  const updateData = () => {
    firebase.database().ref(`guestBook`).push().set(text);
    firebase.database().ref(`backUp/guestBook`).push().set(text);
  };

  const cptWirteGuestBook = () => {
    showWriteMode();
    updateData();
  };

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

// push()
// Create a new post reference with an auto-generated id
// ---> push() 메서드는 지정된 Firebase 참조에 새 하위 항목이 추가될 때마다 고유 키를 생성합니다. 목록의 새 요소마다 이러한 자동 생성 키를 사용하면 여러 클라이언트에서 쓰기 충돌 없이 동시에 같은 위치에 하위 항목을 추가할 수 있습니다. push()가 생성하는 고유 키는 타임스탬프에 기반하므로 목록 항목은 시간순으로 자동 정렬됩니다.
// https://firebase.google.com/docs/database/web/lists-of-data?hl=ko

// 날짜로 아이디 만들기 백업

// const [id, setId] = useState('');

// const createRandomNumber = () => {
//   // 오늘 날짜
//   const today = new Date();
//   const year = String(today.getFullYear()); // 년도
//   const month = String(today.getMonth() + 1); // 월
//   const date = String(today.getDate()); // 날짜
//   const hours = String(today.getHours()); // 시
//   const minutes = String(today.getMinutes()); // 분
//   const seconds = String(today.getSeconds()); // 초
//   console.log(`today is ${year}/${month}/${date}/${hours}`);
//   const min = 100000000;
//   const max = Math.floor(Number.MAX_VALUE); // floor 버림 ceil 올림
//   const randomId = Math.floor(Math.random() * (max - min) + min);
//   const id = String(randomId);
//   const replaceId = id.replace('.', '<->');
//   const finalId = year + month + date + hours + minutes + seconds + replaceId;
//   setId(finalId);
// };

// console.log(`id: ${id}`);
