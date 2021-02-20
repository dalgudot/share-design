import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import AloneButton from '../../button/alone-button';
import { tArticleCommon } from '../../../data/article/t-article-common';
import StaggerDots from '../../../elements/framer-motion/stagger-dots';

const WriteComment = () => {
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

  const router = useRouter();

  const firebaseSet: Function = () => {
    const firebaseDatabaseRef: any = firebase
      .database()
      .ref(`Comment${router.pathname}`);

    firebaseDatabaseRef.push().set([when, newComment]);
  };

  const textRef = useRef(null);
  const [newComment, setNewComment] = useState('');

  return (
    <>
      {/* 댓글 남긴 날짜 */}
      <Container>
        <MultiLineTextField
          ref={textRef}
          // value={newComment}

          onChange={(e) => setNewComment(e.target.value)}
          // autoFocus={true}
          name="Comments"
          placeholder="My Writing Space"
          rows={3}
          cols={40}
        />

        {/* 여러 번 클릭 방지해야 함. */}
        <button onClick={() => firebaseSet()}>
          <AloneButton size="small" btnText={tArticleCommon.welcomeText} />
        </button>
      </Container>
    </>
  );
};

export default WriteComment;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};
  margin: 0 auto;

  margin-top: 300px; // 임시

  p {
    color: white; // 임시
  }

  /* button {
    border-radius: 20px;
    padding: 16px 28px;
  } */
`;

const MultiLineTextField = styled.textarea`
  padding: 36px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  margin-top: 120px;
  caret-color: ${({ theme }) => theme.gray2};
  color: ${({ theme }) => theme.gray2};
  font-weight: 400;
  line-height: 1.7;
  resize: none; // 늘이고 줄이는 기능 없애기

  :invalid {
    border: 1px solid ${({ theme }) => theme.gray8};
  }

  :valid {
    border: 1px solid ${({ theme }) => theme.gray8};
  }
`;
