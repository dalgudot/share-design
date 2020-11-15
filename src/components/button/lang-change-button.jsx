import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { BtnStyle } from '../index/elements';

const LangChangeButton = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: 'CHANGELANGUAGE',
    });

  // html "lang" attribute 변경
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');

    // console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);

  return (
    <BtnStyle onClick={languageChange}>
      <PText
        text={`${lang}` === 'ko' ? 'View in English' : '한글로 보기'}
        mobileSize={fontSize.font14}
        tabletSize={fontSize.font18}
        desktopSize={fontSize.font21}
        weight={fontWeight.bold}
        color="gray2"
      />
    </BtnStyle>
  );
};

export default LangChangeButton;
