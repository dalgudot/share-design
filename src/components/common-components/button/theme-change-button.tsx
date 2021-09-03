import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ThemeChangeButton = ({ setTheme, darkTheme, lightTheme }: any) => {
  const mode = useSelector((state: any) => state.themeMode);
  const dispatch = useDispatch();
  const themeChange = () =>
    dispatch({
      type: 'MODE_CHANGE',
    });

  // const mode = localStorage.getItem('mode');
  // const themeChange = () => {
  //   localStorage.setItem(
  //     'mode',
  //     mode === 'darkTheme' ? 'lightTheme' : 'darkTheme'
  //   );
  // };

  // 1)초기 mode  2)새로고침 mode 정의
  useEffect(() => {
    setTheme(mode === 'darkTheme' ? darkTheme : lightTheme);
  }, []);

  const setMode = () => {
    themeChange();
    setTheme(mode === 'darkTheme' ? lightTheme : darkTheme);
  };

  return <BtnStyle onClick={setMode}></BtnStyle>;
};

export default ThemeChangeButton;

const BtnStyle = styled.button`
  background-color: white;
  width: 100px;
  height: 100px;
  position: fixed;
  left: 45%;
  top: 45%;
`;
