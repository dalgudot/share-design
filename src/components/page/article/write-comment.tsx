import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import { tArticleCommon } from '../../../data/article/t-article-common';
import StaggerDots from '../../../elements/framer-motion/stagger-dots';
import { useDate } from '../../../lib/hooks/useDate';
import { mediaBreakPoint } from '../../../styles/common';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import TextareaAutosize from 'react-textarea-autosize';
import PMedium700 from '../../../elements/typography/p-medium-700';
import { useMyRipple } from '../../../lib/hooks/useMyRipple';
import PSmall700 from '../../../elements/typography/p-small-700';
import { gradientGenerator } from '../../../lib/functions/gradient-generator';

const WriteComment = ({
  setWriteCommentMode,
  showToast,
}: // newComment,
// setNewComment,
// profileGradient,
// setProfileGradient,
{
  setWriteCommentMode: Function;
  showToast: Function;
  // newComment: string;
  // setNewComment: Function;
  // profileGradient: string;
  // setProfileGradient: Function;
}) => {
  const when = useDate().whenComment;
  const router = useRouter();
  const [profileGradient, setProfileGradient] = useState('');

  // 초기 색 설정
  useEffect(() => {
    setProfileGradient(gradientGenerator());
    return () => {
      setProfileGradient('');
    };
  }, []);

  const changeGradient = () => {
    setProfileGradient(gradientGenerator());
  };

  const [newComment, setNewComment] = useState('');
  const [btnDisbled, setBtnDisbled] = useState(true);

  const firebaseSet: Function = () => {
    const firebaseDatabaseRef: any = firebase
      .database()
      .ref(`Comment${router.pathname}`);

    // firebaseDatabaseRef.push().set([profileGradient, when, newComment]);
    firebaseDatabaseRef.push().set({ profileGradient, when, newComment });
    // firebaseDatabaseRef.push().set(profileGradient);
  };

  const setNewCommentAndQuitWriteCommentMode = (e: React.MouseEvent) => {
    e.preventDefault(); // 클릭 이벤트 발생 중단
    firebaseSet();
    showToast(tArticleCommon().completePostComment);
    setWriteCommentMode(false);
  };

  const textLength = newComment.length;
  useEffect(() => {
    textLength > 7 ? setBtnDisbled(false) : setBtnDisbled(true);

    return () => {
      setBtnDisbled(true);
    };
  }, [textLength]);

  const postBtnRef = useRef(null);
  useMyRipple(postBtnRef);

  return (
    <>
      <DivContainer>
        <AnonymousProfileArea>
          <LeftDiv profileGradient={profileGradient}>
            <span />
            <time>
              <PSmall700
                text={{
                  k: when,
                  e: when,
                }}
                color="gray2"
              />
            </time>
          </LeftDiv>
          <button onClick={changeGradient}>
            <PSmall700 text={tArticleCommon().changeColor} color="gray2" />
          </button>
        </AnonymousProfileArea>
        <MultiLineTextField
          ref={function (ref) {
            if (ref !== null) {
              ref.focus();
            }
          }}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={useSetLanguage(tArticleCommon().commentPlaceholder)}
          minRows={3}
          minLength={7}
          maxLength={3000}
        />

        <PostButton
          ref={postBtnRef}
          type="submit"
          onClick={(e) => setNewCommentAndQuitWriteCommentMode(e)}
          disabled={btnDisbled}
          textLength={textLength}
        >
          <PMedium700
            text={
              textLength > 7
                ? tArticleCommon().postComment
                : tArticleCommon().minimumCommentLength
            }
            color="gray2"
          />
        </PostButton>
      </DivContainer>
    </>
  );
};

export default WriteComment;

const DivContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};
  margin: ${({ theme }) => theme.margin.DesktopWrap};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: ${({ theme }) => theme.margin.MobileWrap};
  }
`;

const AnonymousProfileArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-right: 2px; // 시각 보정
  }
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

const MultiLineTextField = styled(TextareaAutosize)`
  overflow: hidden;
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.gray6} !important; // 안드로이드 삼성 인터넷에서 작동 안 해서 !important
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  resize: none; // 늘이고 줄이는 기능 없애기
  margin-top: 16px;

  /* text */
  caret-color: ${({ theme }) => theme.gray2};
  color: ${({ theme }) => theme.gray2};
  font-weight: 400;
  line-height: 1.7;

  // 바뀌는 속성
  padding: 24px 36px;
  font-size: 21px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 24px;
    font-size: 18px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.gray5};
  }
`;

const PostButton = styled.button<{ textLength: number }>`
  width: 100%;
  padding: 14px 0;
  border-radius: ${({ theme }) => theme.borderRadius.R13};

  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  // 버튼 활성화 & 비활성화
  border: 1px solid
    ${({ textLength, theme }) => (textLength > 7 ? theme.gray2 : theme.gray6)};
  -webkit-transition: border 0.23s ease-in-out;
  transition: border 0.23s ease-in-out;

  /* PMedium700에 override */
  p {
    color: ${({ textLength, theme }) =>
      textLength > 7 ? theme.gray2 : theme.gray5};
    font-weight: ${({ textLength }) => (textLength > 7 ? 700 : 400)};
    -webkit-transition: color 0.23s ease-in-out, font-weight 0.23s ease-in-out;
    transition: color 0.23s ease-in-out, font-weight 0.23s ease-in-out;
  }
`;
