import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/t-article-common';
import StaggerDots from '../../../elements/framer-motion/stagger-dots';
import { mediaBreakPoint } from '../../../styles/common';
import H3Title700 from '../../../elements/typography/h3-title-700';
import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import PMedium400 from '../../../elements/typography/p-medium-400';
import PMedium700 from '../../../elements/typography/p-medium-700';
import PSmall700 from '../../../elements/typography/p-small-700';
import Link from 'next/link';

const Comment = ({ showToast }: { showToast: Function }) => {
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [comments, setComments] = useState<object[]>([] || null);
  const router = useRouter();

  useEffect(() => {
    // 새롭게 추가되는 값까지 받기 위해 once 대신 on 메소드 활용
    firebase
      .database()
      .ref(`/Comment${router.pathname}`)
      .on('value', (snapshot) => {
        const objData = snapshot.val();
        const data = objData && Object.values(objData);
        data && setComments(data);
        setCommentsLoading(false);
      });

    return () => {
      setComments([]);
    };
  }, []);
  // 배열은 객체의 특수한 형태이기 때문에 아래처럼 배열인지 검사해야 함.
  // console.log(Array.isArray(comments));

  const checkIsComment = (): void => {
    const isComment = sessionStorage.getItem(
      `${router.pathname}/write-comment`
    );

    isComment === null
      ? router.push(
          '/article/[category]/[id]/write-comment',
          `${router.pathname}/write-comment`
        )
      : showToast(tArticleCommon().preventCommentToastMessage);
  };

  if (commentsLoading === true) {
    return (
      <>
        <LoadingContainer>
          <StaggerDots />
        </LoadingContainer>
      </>
    );
  } else {
    return (
      <>
        {comments.length > 0 && (
          <>
            <Divider />
            <H3Title700
              text={tArticleCommon().comment}
              color="gray1"
              marginTop="36px"
            />
            {comments.map((comment: any, index) => (
              <CommentDiv key={index}>
                <LeftDiv //
                  profileGradient={comment.profileGradient}
                >
                  <span />
                  <PSmall700
                    text={{
                      k: comment.when,
                      e: comment.when,
                    }}
                    color="gray2"
                  />
                </LeftDiv>
                <PMedium400
                  text={{
                    k: comment.newComment,
                    e: comment.newComment,
                  }}
                  color="gray2"
                  marginTop="8px"
                />
              </CommentDiv>
            ))}
          </>
        )}

        {/* 버튼 영역 */}
        <ButtonDiv>
          <a onClick={checkIsComment}>
            <PMedium700 text={tArticleCommon().writeComment} color="gray1" />
            <PMedium700 text={tArticleCommon().chevronRight} color="gray1" />
          </a>

          <div className="divider" />
          <a
            href="https://join.slack.com/t/sharedesignhq/shared_invite/zt-msweffq9-KGVi~KUf0rwr3b~LnUPz0Q"
            target="_blank"
          >
            <PMedium700 text={tArticleCommon().slack} color="gray1" />
            <PMedium700 text={tArticleCommon().chevronRight} color="gray1" />
          </a>
        </ButtonDiv>
      </>
    );
  }
};

export default Comment;

const LoadingContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  //바뀌는 요소
  margin-top: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    /* margin: ${({ theme }) => theme.margin.MobileWrap}; */
  }
`;

const Divider = styled.div`
  margin-top: 48px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray6};
`;

const CommentDiv = styled.div`
  margin-top: 36px;
`;

const LeftDiv = styled.div<{ profileGradient: string }>`
  display: flex;
  align-items: center;

  span {
    border-radius: 50%;
    background: linear-gradient(${({ profileGradient }) => profileGradient});

    /* 바뀌는 요소 */
    width: 32px;
    height: 32px;
    margin-right: 8px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      width: 28px;
      height: 28px;
      margin-right: 6px;
    }
  }
`;

const ButtonDiv = styled.div`
  position: relative;
  margin-top: 36px;
  padding: 12px 24px;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  background-color: ${({ theme }) => theme.gray6__30};

  .divider {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.gray6};
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0 24px;
    width: 100%;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 0 24px;
  }
`;
