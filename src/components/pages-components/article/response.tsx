import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/common/t-article-common';
import { mediaBreakPoint } from '../../../styles/common';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import { useRouter } from 'next/router';
import PLarge from '../../../foundation/typography/p-large';
import AloneButton from '../../common-components/button/alone-button';
import H2Title from '../../../foundation/typography/h2-title';
import WaveLoading from '../../canvas-components/wave-loading/wave-loading';
import PMedium from '../../../foundation/typography/p-medium';

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
    return <WaveLoading marginTop="48px" />;
  } else {
    return (
      <>
        <Container>
          <H2Title text={tArticleCommon().responses} color="gray1" />
          {response.length > 0 && (
            <ContentsContainer>
              {response.map((response: any, idx) => (
                <ResponseDiv key={idx}>
                  <LeftDiv //
                    profileGradient={response.profileGradient}
                  >
                    <span />
                    <PMedium
                      text={{
                        k: response.when,
                        e: response.when,
                      }}
                      color="gray4"
                      weight={700}
                    />
                  </LeftDiv>
                  <PLarge
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
            btnText={tArticleCommon().writeResponse}
          />
        </A>
      </>
    );
  }
};

export default Response;

const Container = styled.div`
  margin-top: 144px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 96px;
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
    margin-right: 10px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      width: 28px;
      height: 28px;
      margin-right: 8px;
    }
  }
`;

const A = styled.a`
  margin: 72px auto 0;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 48px auto 0;
  }
`;
