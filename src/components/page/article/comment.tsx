import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import AloneButton from '../../button/alone-button';
import { tArticle } from '../../../data/article/t-article';
import loadConfig from 'next/dist/next-server/server/config';
import StaggerDots from '../../../elements/framer-motion/stagger-dots';

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

  const router = useRouter();

  const firebaseSet: Function = () => {
    const firebaseDatabaseRef: any = firebase
      .database()
      .ref(`Comment${router.pathname}`);

    firebaseDatabaseRef.push().set([when, newComment]);
  };

  const textRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

  const setCommentsFunc = () => {
    // 새롭게 추가되는 값까지 받기 위해 once 대신 on 메소드 활용
    firebase
      .database()
      .ref(`/Comment${router.pathname}`)
      .on('value', (snapshot) => {
        const objData = snapshot.val();
        const data: any = Object.values(objData);
        console.log(data);
        data && setComments(data);
        setLoading(false);
        console.log('[Success]Firebase Realtime Database');
      });

    // .catch(() => {
    //   console.error('[Error]Firebase Realtime Database');
    // });
  };

  // 기존 댓글 가져오기
  useEffect(() => {
    setCommentsFunc();
  }, []);

  if (loading === true) {
    return (
      <>
        <Container>
          <StaggerDots />
        </Container>
      </>
    );
  } else {
    return (
      <>
        {/* 댓글 남긴 날짜 */}
        <Container>
          {/* p 태그 임시 */}
          <p>{comments}</p>
          <MultiLineTextField
            ref={textRef}
            // value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            autoFocus={true}
            name="Comments"
            placeholder="My Writing Space"
            rows={3}
            cols={40}
          />

          {/* 여러 번 클릭 방지해야 함. */}
          <button onClick={() => firebaseSet()}>
            <AloneButton size="small" btnText={tArticle.welcomeText} />
          </button>
        </Container>
      </>
    );
  }
};

export default Comment;

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

  :invalid {
    border: 1px solid ${({ theme }) => theme.gray8};
  }

  :valid {
    border: 1px solid ${({ theme }) => theme.gray8};
  }
`;
