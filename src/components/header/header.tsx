import styled from 'styled-components';
import { t } from '../../data/index/t';
import { mediaBreakPoint } from '../../styles/common';
import LangChangeToggle from './lang-change-toggle';
import Link from 'next/link';
import H3Title700 from '../../foundation/typography/h3-title';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        {/* <div className="header__wrap__zIndex"> */}
        <Link href="/">
          <a>
            <H3Title700 text={t.shareDesign} color="gray0" />
          </a>
        </Link>
        <LangChangeToggle />
        {/* </div> */}
        {/* <FillEmptySpace /> */}
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  /* .header__wrap__zIndex { */
  // iOS top safe area
  margin-top: calc(env(safe-area-inset-top));

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.Bar};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  border-bottom: solid 1px ${({ theme }) => theme.gray7};
  background-color: ${({ theme }) => theme.gray9};
  padding: ${({ theme }) => theme.padding.LeftRightPadding}; // 좌우 기준 패딩

  /* h3 {
    font-size: 19px;
  } */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 56px;

    /* h3 {
      font-size: 18px;
    } */
  }
`;
