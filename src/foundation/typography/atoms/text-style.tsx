import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';

const TextStyle = ({
  type, // 기본값은 Styled-components에서 p
  text,
  color,
  weight,
  textSize,
  lineHeight,
  letterSpacing,
  marginTop,
  opacity,
  className,
}: {
  type: any;
  text: string;
  color: string;
  weight: number;
  textSize: {
    desktop: string;
    mobile: string;
  };
  lineHeight: {
    desktop: string;
    mobile: string;
  };
  letterSpacing: {
    desktop: string;
    mobile: string;
  };
  marginTop?: string;
  opacity?: number;
  className?: string;
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
      textColor={textColor}
      weight={weight}
      desktopFontSize={textSize.desktop}
      mobileFontSize={textSize.mobile}
      desktopLineHeight={lineHeight.desktop}
      mobileLineHeight={lineHeight.mobile}
      desktopLetterSpacing={letterSpacing.desktop}
      mobileLetterSpacing={letterSpacing.mobile}
      marginTop={marginTop}
      opacity={opacity}
      className={className}
    >
      {text}
    </Text>
  );
};

export default TextStyle;

const Text = styled.p<TextType>`
  color: ${({ textColor }) => textColor};
  font-weight: ${({ weight }) => weight};
  //
  font-size: ${({ desktopFontSize }) => desktopFontSize};
  line-height: ${({ desktopLineHeight }) => desktopLineHeight};
  letter-spacing: ${({ desktopLetterSpacing }) => desktopLetterSpacing};
  //
  margin-top: ${({ marginTop }) => marginTop};
  opacity: ${({ opacity }) => opacity};

  @media screen and (max-width: ${mediaBreakPoint.first}) {
    font-size: ${({ mobileFontSize }) => mobileFontSize};
    line-height: ${({ mobileLineHeight }) => mobileLineHeight};
    letter-spacing: ${({ mobileLetterSpacing }) => mobileLetterSpacing};
  }
`;

type TextType = {
  textColor: any;
  weight: number;
  desktopFontSize: string;
  mobileFontSize: string;
  desktopLineHeight: string;
  mobileLineHeight: string;
  desktopLetterSpacing: string;
  mobileLetterSpacing: string;
  marginTop?: string;
  opacity?: number;
};
