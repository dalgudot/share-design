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
  z-index: 10000;

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
  width: 100%;
  /* height 반응형으로 조절 필요 */
  height: 72px;
  z-index: 9999;

  /* Glassmorphism */
  opacity: 0.999;
  /* position: fixed;
  display: flex; */
  /* flex-flow: column nowrap; */
  /* width: 100vw; */

  /* -------------------------------------------------- */
  /* background-color 아닌 color로 해야 글씨까지 표현됨 */
  /* -------------------------------------------------- */
  /* background-color: ${({ theme }) => theme.backgroundColor}; */
  color: ${({ theme }) => theme.backgroundColor};
  /* -------------------------------------------------- */
  /* background-color 아닌 color로 해야 글씨까지 표현됨 */
  /* -------------------------------------------------- */

  /* contain: layout; */
  /* transition: color 0.12s, -webkit-backdrop-filter 0.12s;
  transition: color 0.12s, backdrop-filter 0.12s;
  transition: color 0.12s, backdrop-filter 0.12s, -webkit-backdrop-filter 0.12s; */
  backdrop-filter: blur(100px) saturate(120%);
  /* -webkit-backdrop-filter: blur(42px) saturate(120%); */

  /* word-break: break-word;
  text-rendering: optimizeLegibility; */
`;
