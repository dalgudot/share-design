import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import Router, { useRouter } from 'next/router';
import { tArticleCommon } from '../../../../data/article/t-article-common';
import { useDate } from '../../../../library/hooks/useDate';
import { mediaBreakPoint } from '../../../../styles/common';
import { useSetLanguage } from '../../../../library/hooks/useSetLanguage';
import TextareaAutosize from 'react-textarea-autosize';
import PMedium700 from '../../../../foundation/typography/p-medium-700';
import { useMyRipple } from '../../../../library/hooks/useMyRipple';
import PSmall700 from '../../../../foundation/typography/p-small-700';
import { gradientGenerator } from '../../../../library/functions/gradient-generator';
import { motion } from 'framer-motion';
import { vibration } from '../../../../foundation/framer-motion/variants';
import { scrollTop } from '../../../../library/functions/scroll-top';
import React from 'react';

const WriteResponse = ({ showToast }: { showToast: Function }) => {
  const when = useDate().whenResponse;
  const router = useRouter();
  const { category, id } = router.query;
  const [profileGradient, setProfileGradient] = useState('');

  // 초기 색 설정
  useEffect(() => {
    setProfileGradient(gradientGenerator());

    return () => {}; // CleanUp Function
  }, []);
  scrollTop();

  const changeGradient = () => {
    setProfileGradient(gradientGenerator());
  };

  const [newResponse, setNewResponse] = useState('');
  const [btnDisbled, setBtnDisbled] = useState(true);
  const textLength: number = newResponse.length;
  const textLengthCondition: boolean = textLength > 6;

  const firebaseSet: Function = (): void => {
    const firebaseDatabaseRef: any = firebase
      .database()
      .ref(`Response/article/${category}/${id}`);

    firebaseDatabaseRef.push().set({ profileGradient, when, newResponse });
  };

  const setNewResponseAndQuitWriteResponseMode = (
    e: React.MouseEvent
  ): void => {
    e.preventDefault(); // 클릭 이벤트 발생 중단

    const isResponse = sessionStorage.getItem(`${router.asPath}`);

    if (isResponse === null) {
      firebaseSet();
      showToast(tArticleCommon().completePostResponse);

      // 연속으로 댓글 쓰는 일 방지하기 위한 Session Storage 활용
      sessionStorage.setItem(`${router.asPath}`, 'isResponse');
    } else {
      showToast(tArticleCommon().preventResponseToastMessage);
    }

    Router.push({
      pathname: `/article/${category}/${id}`,
      query: { CompleteResponse: 'true' },
    });
  };

  useEffect(() => {
    textLengthCondition ? setBtnDisbled(false) : setBtnDisbled(true);

    // CleanUp Function
    return () => {};
  }, [textLength]);

  const postBtnRef = useRef(null);
  useMyRipple(postBtnRef);

  return (
    <Main>
      <DivContainer>
        <AnonymousProfileArea>
          <LeftDiv profileGradient={profileGradient}>
            <span />
            <PSmall700
              text={{
                k: when,
                e: when,
              }}
              color="gray2"
            />
          </LeftDiv>
          <motion.button
            onClick={changeGradient}
            variants={vibration}
            animate="animate"
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <PSmall700 text={tArticleCommon().changeColor} color="gray2" />
          </motion.button>
        </AnonymousProfileArea>
        <MultiLineTextField
          onChange={(e) => setNewResponse(e.target.value)}
          placeholder={useSetLanguage(tArticleCommon().responsePlaceholder)}
          minRows={3}
          minLength={6}
          maxLength={3000}
        />

        <PostButton
          ref={postBtnRef}
          type="submit"
          onClick={(e) => setNewResponseAndQuitWriteResponseMode(e)}
          disabled={btnDisbled}
          textLengthCondition={textLengthCondition}
        >
          <PMedium700
            text={
              textLengthCondition
                ? tArticleCommon().postResponse
                : tArticleCommon().minimumResponseLength
            }
            color="gray2"
          />
        </PostButton>
      </DivContainer>
    </Main>
  );
};

export default React.memo(WriteResponse);

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
