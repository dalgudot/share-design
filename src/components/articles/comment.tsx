import { useRef, useState } from 'react';
import { useRipple } from 'react-use-ripple';
import styled from 'styled-components';
import firebase from 'firebase/app';

const Comment = () => {
  const today = new Date();
  const year = String(today.getFullYear());
  const month = String(today.getMonth() + 1);
  const date = String(today.getDate());
  const when = `${year}${month}${date}`;

  const firebaseDatabaseRef: any = firebase.database().ref(`Draft/${when}`);
  const firebaseSet: Function = () => {
    firebaseDatabaseRef.push().set(contents);
  };

  const textRef = useRef(null);
  const [contents, setContents] = useState('');

  const btnRef = useRef(null);
  useRipple(btnRef);

  return (
    <>
      {/* 댓글 남긴 날짜 */}
      <Container>
        <button ref={btnRef} onClick={() => firebaseSet()}>
          저장하기
        </button>
        <MultiLineTextField
          ref={textRef}
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          autoFocus={true}
          name="My Writing Space"
          placeholder="My Writing Space"
          rows={10000}
          cols={4000}
        />
      </Container>
    </>
  );
};

export default Comment;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;

  button {
    position: fixed;
    top: 120px;
    right: 20%;
    font-size: 24px;
    color: ${({ theme }) => theme.gray1};
    border: solid ${({ theme }) => theme.gray1} 1px;
    border-radius: 20px;
    background-color: transparent;
    padding: 16px 28px;
  }
`;

const MultiLineTextField = styled.textarea`
  padding: 72px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.gray7};
  border-radius: 16px;
  margin-top: 120px;
  caret-color: ${({ theme }) => theme.gray1};
  color: ${({ theme }) => theme.gray1};
  font-weight: 300;
  line-height: 1.9;

  :invalid {
    border: 1px solid ${({ theme }) => theme.gray7};
  }

  :valid {
    border: 1px solid ${({ theme }) => theme.gray7};
  }
`;
