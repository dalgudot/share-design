import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { useRipple } from 'react-use-ripple';
import { useRef } from 'react';

const LangChangeButton = () => {
  const lang = useSelector((state: any) => state.language);
  const dispatch = useDispatch();
  const ref = useRef(null);
  useRipple(ref, {
    rippleColor: 'rgba(0, 0, 0, 0.23)',
    animationLength: 500,
    rippleSize: 2000,
  });

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

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
    // console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);

  return (
    <BtnStyle onClick={setLanguageChange} ref={ref}>
      <P
        text={`${lang}` === 'ko' ? 'View in English' : '한글로 보기'}
        mobileSize={fontSize[14]}
        tabletSize={fontSize[14]}
        desktopSize={fontSize[14]}
        weight={fontWeight[700]}
        color="gray1"
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
  background-color: ${({ theme }) => theme.gray5};
  /* background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply; */
`;
