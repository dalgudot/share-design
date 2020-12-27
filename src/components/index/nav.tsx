import styled from 'styled-components';
import { HorizontalLine, VerticalLine } from './common-elements';
import H2 from '../typo/h2';
import { fontSize, fontWeight } from '../typo/font';

interface NavPropsType {
  order: string;
  name: string;
}

const Nav = ({ order, name }: NavPropsType) => {
  return (
    <>
      <HorizontalLine />
      <NavContainer>
        <H2
          text={order}
          mobileSize={fontSize[21]}
          tabletSize={fontSize[29]}
          desktopSize={fontSize[34]}
          weight={fontWeight[700]}
          letterSpacing="2px"
          opacity={0.8}
        ></H2>

        <H2
          text={name}
          mobileSize={fontSize[21]}
          tabletSize={fontSize[29]}
          desktopSize={fontSize[34]}
          weight={fontWeight[700]}
          marginTop="1vh"
          letterSpacing="2px"
        ></H2>
      </NavContainer>
      <HorizontalLine />
    </>
  );
};

export default Nav;

const NavContainer = styled.nav`
  margin: 8vh auto 9vh;
  text-align: center;
`;
