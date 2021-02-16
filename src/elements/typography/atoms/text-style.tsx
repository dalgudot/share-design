import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import { fontSize } from './font';

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
  color: string;
  opacity?: number;
  marginTop?: string;
}) => {
  const themeContext = useContext(ThemeContext);
  const textColorFunc = () => {
    if (color === 'gray1') {
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
    }
  };
  const textColor = textColorFunc();

  return (
    <Text
      as={type} // HTML 태그 결정
      mobileSize={fontSize.mobile[textSize]}
      tabletSize={fontSize.tablet[textSize]}
      desktopSize={fontSize.desktop[textSize]}
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

type TextType = {
  mobileSize: string;
  tabletSize: string;
  desktopSize: string;
  weight: number;
  lineHeight?: number;
  letterSpacing?: string;
  textColor: any;
  opacity?: number;
  marginTop?: string;
};
