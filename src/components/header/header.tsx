import styled from 'styled-components';
import { t } from '../../data/index/t';
import { mediaBreakPoint } from '../../styles/common';
import LangChangeToggle from './lang-change-toggle';
import Link from 'next/link';
import H4Title700 from '../../foundation/typography/h4-title';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <a>
            <H4Title700 text={t.shareDesign} color="gray0" />
          </a>
        </Link>
        <LangChangeToggle />
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.Bar};
  border-bottom: solid 1px ${({ theme }) => theme.gray7};
  background-color: ${({ theme }) => theme.gray9};
  padding: ${({ theme }) => theme.padding.LeftRightPadding};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  // Properties that change
  height: ${({ theme }) => theme.margin.DesktopTop};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: ${({ theme }) => theme.margin.MobileTop};
  }

  // iOS top safe area
  margin-top: calc(env(safe-area-inset-top));
`;
