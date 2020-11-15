import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';

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
        mobileSize={fontSize.font18}
        tabletSize={fontSize.font21}
        desktopSize={fontSize.font25}
        weight={fontWeight.bold}
        color="backgroundColor"
      />
    </BtnStyle>
  );
};

export default LangChangeButton;

const BtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 60px;
  padding: 24px;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 1;
  border-radius: 18px;
`;
