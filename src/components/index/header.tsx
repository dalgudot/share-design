import styled from 'styled-components';
import Link from 'next/link';
import H3 from '../typo/h3';
import { fontSize, fontWeight } from '../typo/font';
import LangChangeButton from '../button/lang-change-button';
import { t } from './lang/t';
import languageFunc from '../func/language-func';
import { mediaBreakPoint } from '../../styles/common';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <Left>
            <H3
              text={languageFunc(t.shareDesign)}
              mobileSize={fontSize[20]}
              tabletSize={fontSize[20]}
              desktopSize={fontSize[20]}
              weight={fontWeight[700]}
            />
          </Left>
        </Link>
        <LangChangeButton />
      </HeaderContainer>
      <GlassMorphismBackground />
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* height 반응형으로 조절 필요 */
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.gray5};
  z-index: 10002;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4.5vw;
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  }
`;

const Left = styled.a``;

const GlassMorphismBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* height 반응형으로 조절 필요 */
  height: 72px;
  z-index: 10001;

  /* Grassmorphism */
  opacity: 0.999;
  color: ${({ theme }) => theme.backgroundColor};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
`;
