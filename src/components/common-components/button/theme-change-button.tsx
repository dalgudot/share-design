import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { t } from '../../../data/index/t-index';
import TextStyle from '../../../foundation/typography/atoms/text-style';

const ThemeChangeButton = ({ setTheme, darkTheme, lightTheme }: any) => {
  const mode = useSelector((state: any) => state.themeMode);
  const dispatch = useDispatch();
  const themeChange = () =>
    dispatch({
      type: 'MODE_CHANGE',
    });

  // 1)초기 mode  2)새로고침 mode 정의
  useEffect(() => {
    setTheme(mode === 'darkTheme' ? darkTheme : lightTheme);
  }, []);

  const setMode = () => {
    themeChange();
    setTheme(mode === 'darkTheme' ? lightTheme : darkTheme);
  };

  // index에서만 MODE_CHANGEButton 보여줌.
  const router = useRouter();
  const style = {
    display: router.pathname === '/subscribe' ? 'block' : 'none',
    // display: block || 'none',
  };

  return <BtnStyle style={style} onClick={setMode}></BtnStyle>;
};

export default ThemeChangeButton;

const BtnStyle = styled.button``;
