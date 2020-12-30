import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { useRipple } from 'react-use-ripple';
import { useRef } from 'react';
import { t } from '../index/lang/t';
import languageFunc from '../func/language-func';

const LangChangeButton = ({ theme }: any) => {
  // Redux, Language Change
  const lang = useSelector((state: any) => state.language);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: 'CHANGELANGUAGE',
    });

  const detectUserLanguageChange = () =>
    dispatch({
      type: 'CHANGEUSERLANGUAGE',
    });

  const setLanguageChange = () => {
    languageChange();
    detectUserLanguageChange();
  };

  // useRipple
  const ref = useRef(null);
  useRipple(ref, {
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
    <BtnStyle onClick={setLanguageChange} ref={ref}>
      <TextStyle
        type="p"
        text={languageFunc(t.langChagneButton)}
        textSize="small"
        weight={fontWeight[700]}
        color={theme.blackPrimary}
      />
    </BtnStyle>
  );
};

export default LangChangeButton;

const BtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 40px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.whitePrimary};
`;
