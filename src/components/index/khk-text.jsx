import H1Text from '../typo/h1';
import { fontSize, fontWeight } from '../typo/font';
import styled from 'styled-components';

const KHKText = () => {
  return (
    <KHKTextContainer>
      <H1Text
        text="UI/UX 디자인 경험을"
        mobileSize={fontSize[29]}
        tabletSize={fontSize[39]}
        desktopSize={fontSize[49]}
        weight={fontWeight[100]}
      />
      <H1Text
        text="공유합니다."
        mobileSize={fontSize[29]}
        tabletSize={fontSize[39]}
        desktopSize={fontSize[49]}
        weight={fontWeight[100]}
        marginTop="-0.1vh"
      />
    </KHKTextContainer>
  );
};

export default KHKText;

const KHKTextContainer = styled.section`
  text-align: center;
  margin-top: 16vh;
  margin-bottom: 36px;
`;
