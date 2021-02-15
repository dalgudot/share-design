import { useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { useMyRipple } from '../../../lib/hooks/useMyRipple';

const Comment = () => {
  const today = new Date(); // today는 Date의 Instance
  const year = String(today.getFullYear());
  // 한 자리 숫자일 경우 앞에 0을 붙여줘 순서대로 데이터가 나올 수 있도록
  const month =
    String(today.getMonth() + 1).length === 1
      ? '0' + String(today.getMonth() + 1)
      : String(today.getMonth() + 1);
  const date =
    String(today.getDate()).length === 1
      ? '0' + String(today.getDate())
      : String(today.getDate());
  const when = `${year}${month}${date}`;

  const firebaseDatabaseRef: any = firebase.database().ref(`Draft/${when}`);
  const firebaseSet: Function = () => {
    firebaseDatabaseRef.push().set(contents);
  };

  const textRef = useRef(null);
  const [contents, setContents] = useState('');

  const btnRef = useRef(null);
  useMyRipple(btnRef);

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
    color: ${({ theme }) => theme.gray2};
    border: solid ${({ theme }) => theme.gray2} 1px;
    border-radius: 20px;
    background-color: transparent;
    padding: 16px 28px;
  }
`;

const MultiLineTextField = styled.textarea`
  padding: 72px;
  font-size: 24px;
  background-color: ${({ theme }) => theme.gray8};
  border-radius: 16px;
  margin-top: 120px;
  caret-color: ${({ theme }) => theme.gray2};
  color: ${({ theme }) => theme.gray2};
  font-weight: 300;
  line-height: 1.9;

  :invalid {
    border: 1px solid ${({ theme }) => theme.gray8};
  }

  :valid {
    border: 1px solid ${({ theme }) => theme.gray8};
  }
`;
