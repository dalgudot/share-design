import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';
import H1Text from './h1';

// 하나의 컴포넌트만 수정하면 모든 텍스트 컴포넌트가 일괄적으로 바뀐다 -> 경우에 따라서 html 태그가 h1, h2, h3, p로 바뀐다

const Text = ({
  type,
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
}) => {
  Text.propTypes = {
    text: PropTypes.string.isRequired,
    mobileSize: PropTypes.string.isRequired,
    tabletSize: PropTypes.string.isRequired,
    desktopSize: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    lineHeight: PropTypes.number,
    letterSpacing: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.number,
    marginTop: PropTypes.string,
  };

  // const textType = () => {
  //   switch (type) {
  //     case 'h1':
  //       return (
  //         <H1
  //           text={text}
  //           mobileSize={mobileSize}
  //           tabletSize={tabletSize}
  //           desktopSize={desktopSize}
  //           weight={weight}
  //           lineHeight={lineHeight}
  //           letterSpacing={letterSpacing}
  //           color={color}
  //           opacity={opacity}
  //           marginTop={marginTop}
  //         />
  //       );

  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
      <H1
        text={text}
        mobileSize={mobileSize}
        tabletSize={tabletSize}
        desktopSize={desktopSize}
        weight={weight}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        color={color}
        opacity={opacity}
        marginTop={marginTop}
      />
    </>
  );
};

export default Text;

const H1 = styled.h1`
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  color: ${({ theme, color }) => theme[color]};
  opacity: ${({ opacity }) => opacity};
  margin-top: ${({ marginTop }) => marginTop};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    font-size: ${({ mobileSize }) => mobileSize};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    font-size: ${({ tabletSize }) => tabletSize};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    font-size: ${({ desktopSize }) => desktopSize};
  }
`;
