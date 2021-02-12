import styled from 'styled-components';
import { t } from '../page/index/text/t';
import { mediaBreakPoint } from '../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Router, { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import LangChangeToggle from './lang-change-toggle';
import PMedium700 from '../../elements/typography/p-medium-700';
import { motion } from 'framer-motion';

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const modalActive = useSelector((state: any) => state.modalActive);

  const router = useRouter();
  const goHome = () => {
    router.pathname !== '/' && Router.push('/');
  };

  const headerDisplay = {
    display: router.pathname === '/list/[index]' ? 'none' : 'flex',
  };

  return (
    <>
      <HeaderContainer
        style={headerDisplay}
        variants={hideVariants}
        initial={false}
        animate={modalActive === true ? 'hide' : 'show'}
      >
        <Left onClick={goHome}>
          <PMedium700 text={t.shareDesign} color={themeContext.gray1} />
        </Left>
        <LangChangeToggle />
      </HeaderContainer>
      <FillEmptySpace
        style={headerDisplay}
        variants={hideVariants}
        initial={false}
        animate={modalActive === true ? 'hide' : 'show'}
      />
    </>
  );
};

export default Header;

const hideVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
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

const HeaderContainer = styled(motion.header)`
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

// 아이폰 상단에 나타나는 빈 공간 채워주는 div
const FillEmptySpace = styled(motion.div)`
  position: fixed;
  z-index: 9999;
  top: -8px;
  left: 0;
  width: 100%;
  height: 80px; // 72 + 8px
  background-color: ${({ theme }) => theme.gray8};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 65px; // 57 + 8px
  }
`;
