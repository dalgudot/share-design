import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { t } from '../index/lang/t';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import IconLanguage24 from '../svg/icon_language_24';
import PBody700 from '../typography/p-body-700';

const LangChangeToggle = () => {
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

  // setAttribute lang
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
    // console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);

  return (
    <Container onClick={setLanguageChange}>
      <IconLanguage24 color={themeContext.gray2} />
      <motion.div>
        <PBody700
          text={t.header.langChangeToggleKo}
          color={themeContext.gray2}
        />
      </motion.div>
      <Divider />
      <motion.div>
        <PBody700
          text={t.header.langChangeToggleEn}
          color={themeContext.gray5}
        />
      </motion.div>
    </Container>
  );
};

export default LangChangeToggle;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 12px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};

  div {
    margin-left: 6px;
    padding-bottom: 2px;
  }
`;

const Divider = styled.div`
  height: 12px;
  width: 1px;
  margin-top: 2px;
  background-color: ${({ theme }) => theme.gray6};
`;
