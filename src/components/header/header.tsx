import styled from 'styled-components';
import { t } from '../../data/index/t';
import { mediaBreakPoint } from '../../styles/common';
import Router, { useRouter } from 'next/router';
import LangChangeToggle from './lang-change-toggle';
import PMedium700 from '../../foundation/typography/p-medium-700';

const Header = () => {
  const router = useRouter();
  const goHome = () => {
    router.pathname !== '/' && Router.push('/');
  };

  return (
    <>
      <HeaderContainer>
        <div className="header__wrap__zIndex">
          <Left onClick={goHome}>
            <PMedium700 text={t.shareDesign} color="gray1" />
          </Left>
          <LangChangeToggle />
        </div>
        <FillEmptySpace />
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  .header__wrap__zIndex {
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
    background-color: ${({ theme }) => theme.gray8};

    @media all and (max-width: ${mediaBreakPoint.first}) {
      height: 57px;
      padding: ${({ theme }) => theme.padding.MobileWrap};
    }

    @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
      padding: ${({ theme }) => theme.padding.TabletWrap};
    }

    @media all and (min-width: ${mediaBreakPoint.fourth}) {
      padding: ${({ theme }) => theme.padding.DesktopWrap};
    }
  }
`;

const Left = styled.button``;

// 아이폰 상단에 나타나는 빈 공간 채워주는 div
const FillEmptySpace = styled.div`
  display: block;
  z-index: ${({ theme }) => theme.zIndex.BarFillEmptySpace};
  position: fixed;
  top: -48px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.gray8};

  // iOS top safe area
  margin-top: calc(env(safe-area-inset-top));

  // 바뀌는 속성
  // iOS 상단 투명한 공간 대비
  /* height: 80px; // 72 + 8px */
  height: 120px; // 72 + 48px

  @media all and (max-width: ${mediaBreakPoint.first}) {
    /* height: 65px; // 57 + 8px */
    height: 105px; // 57 + 48px
  }
`;
