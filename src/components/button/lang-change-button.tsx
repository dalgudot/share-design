import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { useRipple } from 'react-use-ripple';
import { useRef } from 'react';
import { t } from '../index/lang/t';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const LangChangeButton = () => {
  // Redux, Language Change
  const lang = useSelector((state: any) => state.language);
  const dispatch = useDispatch();
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
  };

  const themeContext = useContext(ThemeContext);

  // useRipple
  const btnRef = useRef(null);
  useRipple(btnRef, {
    rippleColor: 'rgba(0, 0, 0, 0.3)',
    animationLength: 600,
    rippleSize: 2000,
  });

  // setAttribute HTML Attribute
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
    // console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);

  return (
    <motion.button
      onClick={setLanguageChange}
      ref={btnRef}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
    >
      <BtnStyle>
        <TextStyle
          type="p"
          text={useSetLanguage(t.langChagneButton)}
          textSize="single14"
          weight={fontWeight[700]}
          color={themeContext.whitePrimary}
        />
      </BtnStyle>
    </motion.button>
  );
};

export default LangChangeButton;

const BtnStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 40px;
  border-radius: var(--border-radius-primary);
  background-color: ${({ theme }) => theme.gray6};
  /* border: solid 1px ${({ theme }) => theme.gray5}; */
`;
