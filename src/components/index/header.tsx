import styled from 'styled-components';
import TextStyle from '../typography/atoms/text-style';
import { fontWeight } from '../typography/atoms/font';
import LangChangeButton from '../button/lang-change-button';
import { t } from './lang/t';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { mediaBreakPoint } from '../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

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

  return (
    <>
      <HeaderContainer>
        <Left onClick={goHome}>
          <TextStyle
            type="h3"
            text={useSetLanguage(t.shareDesign)}
            textSize="body"
            weight={fontWeight[700]}
            color={themeContext.whitePrimary}
          />
        </Left>
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
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.gray6};
  z-index: 10000;

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

const GlassMorphismBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 72px;
  z-index: 9999;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 57px;
  }

  /* Grassmorphism */
  opacity: 0.999;
  color: ${({ theme }) => theme.blackPrimary};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
`;
