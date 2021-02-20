import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import AloneButton from '../../button/alone-button';
import { tArticleCommon } from '../../../data/article/t-article-common';
import StaggerDots from '../../../elements/framer-motion/stagger-dots';
import { useDate } from '../../../lib/hooks/useDate';

const Comment = () => {
  const when = useDate();
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
        const data: any = objData && Object.values(objData);
        console.log(data);
        data && setComments(data);
        setLoading(false);
      });
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
          <p>안녕{comments}</p>
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
