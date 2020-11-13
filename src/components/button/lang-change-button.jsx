import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
    <button className="btn__common" onClick={languageChange}>
      {`${lang}` === 'ko' ? 'View in English' : '한글로 보기'}
    </button>
  );
};

export default LangChangeButton;
