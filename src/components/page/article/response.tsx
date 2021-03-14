import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/t-article-common';
import StaggerDots from '../../../elements/framer-motion/stagger-dots';
import { mediaBreakPoint } from '../../../styles/common';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import PMedium400 from '../../../elements/typography/p-medium-400';
import PSmall700 from '../../../elements/typography/p-small-700';
import AloneButton from '../../button/alone-button';
import H2Title700 from '../../../elements/typography/h2-title-700';

const Response = ({
  showToast,
  response,
  setResponse,
  responseLoading,
  setResponseLoading,
}: {
  showToast: any;
  response: object[];
  setResponse: Function;
  responseLoading: boolean;
  setResponseLoading: Function;
}) => {
  const router = useRouter();

  useEffect(() => {
    // 새롭게 추가되는 값까지 받기 위해 once 대신 on 메소드 활용
    firebase
      .database()
      .ref(`/Response${router.pathname}`)
      .on('value', (snapshot) => {
        const objData = snapshot.val();
        const data = objData && Object.values(objData);
        data && setResponse(data);
        setResponseLoading(false);
      });

    return () => setResponseLoading(true); // CleanUp Function
  }, []);

  const checkIsResponse = (): void => {
    const isResponse = sessionStorage.getItem(
      `${router.pathname}/write-response`
    );

    isResponse === null
      ? router.push(
          '/article/[category]/[id]/write-response',
          `${router.pathname}/write-response`
        )
      : showToast(tArticleCommon().preventResponseToastMessage);
  };

  if (responseLoading === true) {
    return (
      <LoadingContainer>
        <StaggerDots />
      </LoadingContainer>
    );
  } else {
    return (
      <>
        <Container>
          <H2Title700 text={tArticleCommon().responses} color="gray1" />
          {response.length > 0 && (
            <ContentsContainer>
              {response.map((response: any, idx) => (
                <ResponseDiv key={idx}>
                  <LeftDiv //
                    profileGradient={response.profileGradient}
                  >
                    <span />
                    <PSmall700
                      text={{
                        k: response.when,
                        e: response.when,
                      }}
                      color="gray2"
                    />
                  </LeftDiv>
                  <PMedium400
                    text={{
                      k: response.newResponse,
                      e: response.newResponse,
                    }}
                    color="gray2"
                    marginTop="8px"
                  />
                </ResponseDiv>
              ))}
            </ContentsContainer>
          )}
        </Container>

        {/* 버튼 영역 */}
        <A onClick={checkIsResponse}>
          <AloneButton //
            size="medium"
            btnText={tArticleCommon().writeResponse}
            color="gray6__30"
          />
        </A>
      </>
    );
  }
};

export default Response;

const Container = styled.div`
  margin-top: 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 48px;
  }
`;

const ContentsContainer = styled.div`
  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: -12px;
  }
`;

const ResponseDiv = styled.div`
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

const A = styled.a`
  margin: 48px auto 0;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 36px auto 0;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`;
