import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HorizontalLine, VerticalLine } from './elements';
import H2Text from '../typo/h2';
import { fontSize, fontWeight } from '../typo/font';

const Nav = ({ order, name }) => {
  Nav.propTypes = {
    order: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  return (
    <>
      <HorizontalLine />
      <NavContainer>
        <H2Text
          text={order}
          mobileSize={fontSize.font21}
          tabletSize={fontSize.font29}
          desktopSize={fontSize.font34}
          weight={fontWeight.bold}
          letterSpacing="2px"
          opacity={0.8}
        ></H2Text>

        <H2Text
          text={name}
          mobileSize={fontSize.font29}
          tabletSize={fontSize.font49}
          desktopSize={fontSize.font59}
          weight={fontWeight.bold}
          marginTop="1vh"
          letterSpacing="2px"
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
`;
