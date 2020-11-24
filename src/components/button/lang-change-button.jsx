import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { BtnStyle } from '../index/common-elements';

const LangChangeButton = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: 'CHANGELANGUAGE',
    });

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
    // console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);

  return (
    <>
      <BtnStyle onClick={languageChange}>
        <PText
          text={`${lang}` === 'ko' ? 'View in English' : '한글로 보기'}
          mobileSize={fontSize[14]}
          tabletSize={fontSize[14]}
          desktopSize={fontSize[14]}
          weight={fontWeight[700]}
          color="gray1"
        />
      </BtnStyle>
    </>
  );
};

export default LangChangeButton;
