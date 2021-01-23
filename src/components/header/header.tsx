import styled from 'styled-components';
import TextStyle from '../typography/atoms/text-style';
import { fontWeight } from '../typography/atoms/font';
import LangChangeButton from './lang-change-button';
import { t } from '../index/lang/t';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { mediaBreakPoint } from '../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Router, { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import LangChangeToggle from './lang-change-toggle';
import PBody700 from '../typography/p-body-700';

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const tabToggle = useSelector((state: any) => state.tabNavBar);
  const dispatch = useDispatch();
  const TAB_NAV_CHANGE = () =>
    dispatch({
      type: 'TAB_NAV_CHANGE',
    });

  const goHome = () => {
    tabToggle !== 'home' && TAB_NAV_CHANGE();
    Router.push('/');
  };

  // const router = useRouter();
  // const style = {
  //   display: router.pathname === '/subscribe' ? 'block' : 'none',
  // };

  return (
    <>
      <HeaderContainer>
        <Left onClick={goHome}>
          <PBody700 text={t.shareDesign} color={themeContext.gray1} />
        </Left>
        <LangChangeToggle />
      </HeaderContainer>
      {/* 상단에 나타나는 빈 공간 채워주는 div */}
      <FillEmptySpace />
      {/* <GlassMorphismBackground /> */}
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.gray7};
  z-index: 10000;
  background-color: ${({ theme }) => theme.gray8};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 57px;
    padding: 0 4.5vw;
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  }
`;

const Left = styled.button``;

// 아이콘 상단에 나타나는 빈 공간 채워주는 div
const FillEmptySpace = styled.div`
  position: fixed;
  z-index: 9999;
  top: -8px;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.gray8};
`;

// const GlassMorphismBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 72px;
//   z-index: 9999;

//   @media all and (max-width: ${mediaBreakPoint.first}) {
//     height: 57px;
//   }

//   background-color: ${({ theme }) => theme.gray8};

//   /* Grassmorphism */
//   opacity: 0.999;
//   color: ${({ theme }) => theme.gray8};
//   -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
//     hue-rotate(10deg);
//   backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

//   -webkit-transition: color 0.11s ease-in-out,
//     -webkit-backdrop-filter 0.11s ease-in-out;
//   transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
// `;
