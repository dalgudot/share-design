import PropTypes from 'prop-types';
import styled from 'styled-components';

const H3Text = ({
  text,
  mobileSize,
  tabletSize,
  desktopSize,
  weight,
  letterSpacing,
  color,
  opacity,
  marginTop,
}) => {
  H3Text.propTypes = {
    text: PropTypes.string.isRequired,
    mobileSize: PropTypes.string.isRequired,
    tabletSize: PropTypes.string.isRequired,
    desktopSize: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    letterSpacing: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.number,
    marginTop: PropTypes.string,
  };

  return (
    <H3
      mobileSize={mobileSize}
      tabletSize={tabletSize}
      desktopSize={desktopSize}
      weight={weight}
      letterSpacing={letterSpacing}
      color={color}
      opacity={opacity}
      marginTop={marginTop}
    >
      {text}
    </H3>
  );
};

export default H3Text;

const H3 = styled.h3`
  font-weight: ${({ weight }) => weight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  color: ${({ theme, color }) => theme[color]};
  opacity: ${({ opacity }) => opacity};
  margin-top: ${({ marginTop }) => marginTop};

  @media screen and (max-width: 812px) {
    font-size: ${({ mobileSize }) => mobileSize};
  }

  @media screen and (min-width: 813px) and (max-width: 1200px) {
    font-size: ${({ tabletSize }) => tabletSize};
  }

  @media screen and (min-width: 1201px) {
    font-size: ${({ desktopSize }) => desktopSize};
  }
`;
