import H1Text from '../typo/h1';
import { fontSize, fontWeight } from '../typo/font';
import styled from 'styled-components';

const KHKText = () => {
  return (
    <KHKTextContainer>
      <H1Text
        text="UI/UX 디자인 경험을"
        mobileSize={fontSize.font29}
        tabletSize={fontSize.font49}
        desktopSize={fontSize.font59}
        weight={fontWeight.bold}
      ></H1Text>
      <H1Text
        text="공유합니다."
        mobileSize={fontSize.font29}
        tabletSize={fontSize.font49}
        desktopSize={fontSize.font59}
        weight={fontWeight.bold}
      ></H1Text>
    </KHKTextContainer>
  );
};

export default KHKText;

const KHKTextContainer = styled.section`
  text-align: center;
  margin-top: 16vh;
  margin-bottom: 16vh;

  /* @media screen and (max-width: 812px) {
    text-align: center;
  }

  @media screen and (min-width: 813px) and (max-width: 1200px) {
    text-align: center;
  }

  @media screen and (min-width: 1201px) {
    text-align: left;
  } */
`;
