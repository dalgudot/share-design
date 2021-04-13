import styled from 'styled-components';
import { t } from '../../data/index/t';
import { mediaBreakPoint } from '../../styles/common';
import Router, { useRouter } from 'next/router';
import LangChangeToggle from './lang-change-toggle';
import PMedium700 from '../../elements/typography/p-medium-700';

const Header = () => {
  const router = useRouter();
  const goHome = () => {
    router.pathname !== '/' && Router.push('/');
  };

  const HeaderDisplay = () => {
    // if (router.pathname === '/list/interactionDesignGuide') {
    //   return false;
    // } else if (router.pathname === '/list/eCommerceDesignGuide') {
    //   return false;
    // } else {
    //   return true;
    // }
    return true; // 나중에 Header 숨기는 곳 대비
  };
  const isShow = HeaderDisplay();

  return (
    <>
      <HeaderContainer isShow={isShow}>
        <Left onClick={goHome}>
          <PMedium700 text={t.shareDesign} color="gray1" />
        </Left>
        <LangChangeToggle />
      </HeaderContainer>
      <FillEmptySpace isShow={isShow} />
    </>
  );
};

export default Header;

type isShowtype = {
  isShow: boolean;
};

const HeaderContainer = styled.header<isShowtype>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;

  border-bottom: solid 1px ${({ theme }) => theme.gray7};
  z-index: ${({ theme }) => theme.zIndex.Bar};
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
`;

const Left = styled.button``;

// 아이폰 상단에 나타나는 빈 공간 채워주는 div
const FillEmptySpace = styled.div<isShowtype>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  z-index: ${({ theme }) => theme.zIndex.BarFillEmptySpace};
  position: fixed;
  top: -48px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.gray8};

  // 바뀌는 속성
  /* height: 80px; // 72 + 8px */
  height: 120px; // 72 + 48px

  @media all and (max-width: ${mediaBreakPoint.first}) {
    /* height: 65px; // 57 + 8px */
    height: 105px; // 57 + 48px
  }
`;

const hideVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
      delay: 0.1,
    },
  },

  hide: {
    y: -500,
    opacity: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
};
