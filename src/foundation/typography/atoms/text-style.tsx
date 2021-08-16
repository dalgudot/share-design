import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';

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
  textSize: {
    mobile: string;
    desktop: string;
  };
  weight: number;
  lineHeight?: number;
  letterSpacing?: string;
  color: string;
  opacity?: number;
  marginTop?: string;
}) => {
  const themeContext = useContext(ThemeContext);
  const textColorFunc = () => {
    if (color === 'gray0') {
      return themeContext['gray0'];
    } else if (color === 'gray1') {
      return themeContext['gray1'];
    } else if (color === 'gray2') {
      return themeContext['gray2'];
    } else if (color === 'gray3') {
      return themeContext['gray3'];
    } else if (color === 'gray4') {
      return themeContext['gray4'];
    } else if (color === 'gray5') {
      return themeContext['gray5'];
    } else if (color === 'gray6') {
      return themeContext['gray6'];
    } else if (color === 'gray7') {
      return themeContext['gray7'];
    } else if (color === 'gray8') {
      return themeContext['gray8'];
    } else if (color === 'gray9') {
      return themeContext['gray9'];
    }
  };
  const textColor = textColorFunc();

  return (
    <Text
      as={type} // HTML 태그 결정
      mobileSize={textSize.mobile}
      desktopSize={textSize.desktop}
      weight={weight}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textColor={textColor}
      opacity={opacity}
      marginTop={marginTop}
    >
      {text}
    </Text>
  );
};

export default TextStyle;

const Text = styled.p<TextType>`
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  color: ${({ textColor }) => textColor};
  opacity: ${({ opacity }) => opacity};
  margin-top: ${({ marginTop }) => marginTop};

  // 바뀌는 속성
  font-size: ${({ desktopSize }) => desktopSize};

  @media screen and (max-width: ${mediaBreakPoint.first}) {
    font-size: ${({ mobileSize }) => mobileSize};
  }
`;

type TextType = {
  mobileSize: string;
  desktopSize: string;
  weight: number;
  lineHeight?: number;
  letterSpacing?: string;
  textColor: any;
  opacity?: number;
  marginTop?: string;
};
