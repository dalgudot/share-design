import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const H1Text = ({
  text,
  mobileSize,
  tabletSize,
  desktopSize,
  weight,
  lineHeight,
  letterSpacing,
  color,
  opacity,
  marginTop,
}: {
  text: string;
  mobileSize: string;
  tabletSize: string;
  desktopSize: string;
  weight: number;
  lineHeight?: number;
  letterSpacing?: string;
  color?: any;
  opacity?: number;
  marginTop?: string;
}) => {
  return (
    <H1
      mobileSize={mobileSize}
      tabletSize={tabletSize}
      desktopSize={desktopSize}
      weight={weight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      color={color}
      opacity={opacity}
      marginTop={marginTop}
    >
      {text}
    </H1>
  );
};

export default H1Text;

const H1 = styled.h1<{
  mobileSize: string;
  tabletSize: string;
  desktopSize: string;
  weight: number;
  lineHeight?: number;
  letterSpacing?: string;
  color?: any;
  opacity?: number;
  marginTop?: string;
}>`
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity};
  margin-top: ${({ marginTop }) => marginTop};

  @media screen and (max-width: ${mediaBreakPoint.first}) {
    font-size: ${({ mobileSize }) => mobileSize};
  }

  @media screen and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    font-size: ${({ tabletSize }) => tabletSize};
  }

  @media screen and (min-width: ${mediaBreakPoint.fourth}) {
    font-size: ${({ desktopSize }) => desktopSize};
  }
`;

// H1Text.propTypes = {
//   text: PropTypes.string.isRequired,
//   mobileSize: PropTypes.string.isRequired,
//   tabletSize: PropTypes.string.isRequired,
//   desktopSize: PropTypes.string.isRequired,
//   weight: PropTypes.number.isRequired,
//   lineHeight: PropTypes.number,
//   letterSpacing: PropTypes.string,
//   color: PropTypes.string,
//   opacity: PropTypes.number,
//   marginTop: PropTypes.string,
// };
