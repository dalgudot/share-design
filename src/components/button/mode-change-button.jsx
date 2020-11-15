import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { k } from '../lang/index/ko-index';
import { e } from '../lang/index/en-index';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';

const ModeChangeButton = ({ setMode, darkTheme, lightTheme, block }) => {
  const theme = useSelector((state) => state.localMode);
  const dispatch = useDispatch();
  const themeChange = () =>
    dispatch({
      type: 'MODECHANGE',
    });

  const lang = useSelector((state) => state.language);

  //초기 mode, 새로고침 mode 정의
  useEffect(() => {
    setMode(theme === 'darkTheme' ? darkTheme : lightTheme);
  }, []);

  const setTheme = () => {
    themeChange();
    setMode(theme === 'darkTheme' ? lightTheme : darkTheme);
  };

  // index에서만 ModeChangeButton 보여줌.
  // const router = useRouter();
  const style = {
    // display: router.pathname === '/' ? 'block' : 'none',
    display: block || 'none',
  };

  return (
    <BtnStyle style={style} onClick={setTheme}>
      <PText
        text={
          `${theme}` === 'darkTheme'
            ? `${lang}` === 'ko'
              ? k['LightMode']
              : e['LightMode']
            : `${lang}` === 'ko'
            ? k['DarkMode']
            : e['DarkMode']
        }
        mobileSize={fontSize.font18}
        tabletSize={fontSize.font21}
        desktopSize={fontSize.font25}
        weight={fontWeight.bold}
        color="backgroundColor"
      />
    </BtnStyle>
  );
};

export default ModeChangeButton;

const BtnStyle = styled.button`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 60px;
  padding: 24px;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 1;
  border-radius: 18px;
`;
