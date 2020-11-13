import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { k } from '../lang/index/ko-index';
import { e } from '../lang/index/en-index';

const ModeChangeButton = ({
  setMode,
  darkTheme,
  lightTheme,
  block,
  margin__left,
}) => {
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
    <button
      style={style}
      className="btn__common margin__left"
      onClick={setTheme}
    >
      {`${theme}` === 'darkTheme'
        ? `${lang}` === 'ko'
          ? k['LightMode']
          : e['LightMode']
        : `${lang}` === 'ko'
        ? k['DarkMode']
        : e['DarkMode']}
    </button>
  );
};

export default ModeChangeButton;
