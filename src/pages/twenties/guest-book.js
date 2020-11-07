import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import initFirebase from '../../../utils/auth/initFirebase';
import firebase from 'firebase/app';

initFirebase();

const GuestBook = () => {
  const [text, setText] = useState('');
  const textRef = useRef();

  // text가 업데이트되면 파이어베이스로 보낼 데이터 객체 or 클래스에 저장

  // https://firebase.google.com/docs/rules/rules-and-auth?authuser=0

  const updateText = (e) => {
    setText(e.target.value);
  };
  console.log(text);

  useEffect(() => {
    firebase.database().ref('name').set(text);
  }, [text]);

  useEffect(() => {
    textRef.current.focus();
  }, []);

  return (
    <>
      <MultiLineTextField
        ref={textRef}
        onChange={updateText}
        name="Visit Book"
        placeholder="방명록"
        rows="5"
        cols="33"
        autoComplete="off"
      />
    </>
  );
};

export default GuestBook;

const MultiLineTextField = styled.textarea`
  resize: none;
  padding: 24px;
`;
