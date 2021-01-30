import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { t } from '../index/lang/t';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import IconLanguage24 from '../svg/icon_language_24';
import PMedium700 from '../typography/p-medium-700';
import { useWindowWidth } from '../../lib/hooks/useWindowWidth';
import Router, { useRouter } from 'next/router';

const LangChangeToggle = () => {
  // Redux, Language Change
  const lang = useSelector((state: any) => state.language);
  const dispatch = useDispatch();

  const router = useRouter();

  // const pathString = path.replace('/', '');
  // console.log(pathString);

  const languageChange = () =>
    dispatch({
      type: 'LANGUAGE_CHANGE',
    });

  const detectUserLanguageChange = () =>
    dispatch({
      type: 'USER_LANGUAGE_CHANGE_CHANGE',
    });

  const setLanguageChange = () => {
    languageChange();
    detectUserLanguageChange();

    // const path = router.pathname;
    // console.log(path);

    // if (path === '/') {
    //   lang === 'ko' ? Router.push('/en') : Router.push('/');
    // }

    // if (path === '/en') {
    //   lang === 'ko' ? Router.push('/en') : Router.push('/');
    // }

    // if (path === '/article/portfolio/1') {
    //   lang === 'ko'
    //     ? Router.push('/en/article/portfolio/1')
    //     : Router.push('/article/portfolio/1');
    // }

    // if (path === '/en/article/portfolio/1') {
    //   lang === 'ko'
    //     ? Router.push('/en/article/portfolio/1')
    //     : Router.push('/article/portfolio/1');
    // }
  };

  const themeContext = useContext(ThemeContext);

  // setAttribute lang
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
    // console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);

  // 768을 기준으로 토글 글씨의 크기가 바뀌고, 그에 따라 글씨의 너비가 바뀌기 때문에 움직이는 x 좌표의 거리도 바뀐다.
  const width: number = useWindowWidth();

  return (
    <Container onClick={setLanguageChange}>
      <IconLanguage24 color={themeContext.gray2} />
      <motion.div //
        variants={koVariants(width)}
        animate={lang === 'ko' ? 'on' : 'off'}
      >
        <PMedium700
          text={t.header.langChangeToggleKo}
          color={lang === 'ko' ? themeContext.gray2 : themeContext.gray5}
        />
      </motion.div>
      <Divider />
      <motion.div //
        variants={enVariants(width)}
        animate={lang === 'en' ? 'on' : 'off'}
      >
        <PMedium700
          text={t.header.langChangeToggleEn}
          color={lang === 'en' ? themeContext.gray2 : themeContext.gray5}
        />
      </motion.div>
    </Container>
  );
};

export default LangChangeToggle;

// Framer Motion
const koVariants = (width: number) => {
  if (width < 768) {
    return {
      on: { x: 0 },
      off: { x: 32 },
    };
  } else {
    return {
      on: { x: 0 },
      off: { x: 35 },
    };
  }
};

const enVariants = (width: number) => {
  if (width < 768) {
    return {
      on: { x: -32 },
      off: { x: 0 },
    };
  } else {
    return {
      on: { x: -35 },
      off: { x: 0 },
    };
  }
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 12px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};

  div {
    margin-left: 6px;
    margin-bottom: 2px;
  }
`;

const Divider = styled.span`
  height: 12px;
  width: 1px;
  margin-top: 2px;
  margin-left: 6px;
  background-color: ${({ theme }) => theme.gray6};
`;
