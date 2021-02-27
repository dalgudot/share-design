import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import Router, { useRouter } from 'next/router';
import { tArticleCommon } from '../../../../data/article/t-article-common';
import { useDate } from '../../../../lib/hooks/useDate';
import { mediaBreakPoint } from '../../../../styles/common';
import { useSetLanguage } from '../../../../lib/hooks/useSetLanguage';
import TextareaAutosize from 'react-textarea-autosize';
import PMedium700 from '../../../../elements/typography/p-medium-700';
import { useMyRipple } from '../../../../lib/hooks/useMyRipple';
import PSmall700 from '../../../../elements/typography/p-small-700';
import { gradientGenerator } from '../../../../lib/functions/gradient-generator';

const WriteComment = ({ showToast }: { showToast: Function }) => {
  const when = useDate().whenComment;
  const router = useRouter();
  const { category, id } = router.query;
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
  const textLength: number = newComment.length;
  const textLengthCondition: boolean = textLength > 6;

  const firebaseSet: Function = (): void => {
    const firebaseDatabaseRef: any = firebase
      .database()
      .ref(`Comment/article/${category}/${id}`);

    firebaseDatabaseRef.push().set({ profileGradient, when, newComment });
  };

  const setNewCommentAndQuitWriteCommentMode = (e: React.MouseEvent): void => {
    e.preventDefault(); // 클릭 이벤트 발생 중단
    firebaseSet();
    showToast(tArticleCommon().completePostComment);
    // 연속으로 댓글 쓰는 일 방지하기 위한 Session Storage 활용
    sessionStorage.setItem(`${router.asPath}`, 'isComment');
    Router.push(`/article/${category}/${id}`);
  };

  useEffect(() => {
    textLengthCondition ? setBtnDisbled(false) : setBtnDisbled(true);

    return () => {
      setBtnDisbled(true);
    };
  }, [textLength]);

  const postBtnRef = useRef(null);
  useMyRipple(postBtnRef);

  return (
    <Main>
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
          minLength={6}
          maxLength={3000}
        />

        <PostButton
          ref={postBtnRef}
          type="submit"
          onClick={(e) => setNewCommentAndQuitWriteCommentMode(e)}
          disabled={btnDisbled}
          textLengthCondition={textLengthCondition}
        >
          <PMedium700
            text={
              textLengthCondition
                ? tArticleCommon().postComment
                : tArticleCommon().minimumCommentLength
            }
            color="gray2"
          />
        </PostButton>
      </DivContainer>
    </Main>
  );
};

export default WriteComment;

const Main = styled.main`
  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: ${({ theme }) => theme.padding.TabletWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: ${({ theme }) => theme.padding.DesktopWrap};
  }
`;

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

const PostButton = styled.button<{ textLengthCondition: boolean }>`
  width: 100%;
  padding: 14px 0;
  border-radius: ${({ theme }) => theme.borderRadius.R13};

  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  // 버튼 활성화 & 비활성화
  border: 1px solid
    ${({ textLengthCondition, theme }) =>
      textLengthCondition ? theme.gray2 : theme.gray6};
  -webkit-transition: border 0.23s ease-in-out;
  transition: border 0.23s ease-in-out;

  /* PMedium700에 override */
  p {
    color: ${({ textLengthCondition, theme }) =>
      textLengthCondition ? theme.gray2 : theme.gray5};
    font-weight: ${({ textLengthCondition }) =>
      textLengthCondition ? 700 : 400};
    -webkit-transition: color 0.23s ease-in-out, font-weight 0.23s ease-in-out;
    transition: color 0.23s ease-in-out, font-weight 0.23s ease-in-out;
  }
`;
