import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import { fontSize } from '../typography/font';

// 코드로 디자인을 하기 위한 Text Component
// 나중에 Design System이 만들어지더라도 코드로 디자인을 위해 계속 쓰면 좋을 Component
const TextStyle = ({
  type, // 기본값은 Styled-components에서 p
  text,
  textSize,
  weight,
  lineHeight,
  letterSpacing,
  color,
  opacity,
  marginTop,
}: {
  type: any;
  text: string;
  textSize: string;
  weight: number;
  lineHeight?: number;
  letterSpacing?: string;
  color: any;
  opacity?: number;
  marginTop?: string;
}) => {
  return (
    <Text
      as={type} // 태그 결정
      mobileSize={fontSize.mobile[textSize]}
      tabletSize={fontSize.tablet[textSize]}
      desktopSize={fontSize.desktop[textSize]}
      weight={weight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      color={color}
      opacity={opacity}
      marginTop={marginTop}
    >
      {text}
    </Text>
  );
};

export default TextStyle;

const Text = styled.p<{
  mobileSize: string;
  tabletSize: string;
  desktopSize: string;
  weight: number;
  lineHeight?: number;
  letterSpacing?: string;
  color: any;
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
