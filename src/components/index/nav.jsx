import styled from 'styled-components';
import { HorizontalLine, VerticalLine } from './elements';
import H2Text from '../typo/h2';
import { fontSize, fontWeight } from '../typo/font';

const Nav = () => {
  return (
    <>
      <HorizontalLine />
      <NavContainer>
        <H2Text
          text="첫 번째"
          mobileSize={fontSize.font14}
          tabletSize={fontSize.font49}
          desktopSize={fontSize.font24}
          weight={fontWeight.regular}
          opacity={0.7}
          letterSpacing="2.5px"
        ></H2Text>

        <H2Text
          text="20대를 남기다"
          mobileSize={fontSize.font29}
          tabletSize={fontSize.font49}
          desktopSize={fontSize.font24}
          weight={fontWeight.bold}
          opacity={1}
          marginTop="1vh"
          letterSpacing="6px"
        ></H2Text>
      </NavContainer>
      <HorizontalLine />
    </>
  );
};

export default Nav;

const NavContainer = styled.nav`
  margin: 8vh auto 9vh;
  text-align: center;
  position: relative;
`;
