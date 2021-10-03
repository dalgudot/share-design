import styled from 'styled-components';
import PLarge from '../../foundation/typography/p-large';
import { mediaBreakPoint } from '../../styles/common';

const Privacy = () => {
  const privacyText = {
    k: '디자인 공유하기는 개인 정보를 수집하지 않습니다.',
    e: 'SHARE DESIGN does not collect any privacy information.',
  };

  return (
    <Main>
      <PLarge text={privacyText} color="gray3" />
    </Main>
  );
};

export default Privacy;

const Main = styled.main`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  max-width: 280px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    max-width: 240px;
  }
`;
