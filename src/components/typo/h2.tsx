import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

const H2 = ({
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
    <H2Text
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
    </H2Text>
  );
};

export default H2;

const H2Text = styled.h2<{
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
