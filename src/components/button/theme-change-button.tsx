import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { t } from '../index/lang/t';
import TextStyle from '../typography/atoms/text-style';
import { fontWeight } from '../typography/atoms/font';

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

  return (
    <BtnStyle style={style} onClick={setMode}>
      <TextStyle
        type="p"
        text="나중에 아래 타입 정하기"
        // text={
        //   `${theme}` === 'darkTheme'
        //     ? `${lang}` === 'ko'
        //       ? t[themeMode[k]]
        //       : t[themeMode[e]]
        //     : `${lang}` === 'ko'
        //     ? t[themeMode[k]]
        //     : t[themeMode[e]]
        // }
        textSize="body"
        weight={fontWeight[700]}
        color="gray2"
      />
    </BtnStyle>
  );
};

export default ThemeChangeButton;

const BtnStyle = styled.button``;

// const ThemeChangeButton = ({
//   setMode,
//   darkTheme,
//   lightTheme,
//   block,
// }: {
//   setMode: any;
//   darkTheme: any;
//   lightTheme: any;
//   block?: string;
// }) => {
//   const theme = useSelector((state: any) => state.themeMode);
//   const dispatch = useDispatch();
//   const themeChange = () =>
//     dispatch({
//       type: 'MODE_CHANGE',
//     });

//   const lang = useSelector((state: any) => state.language);

//   //초기 mode, 새로고침 mode 정의
//   useEffect(() => {
//     setMode(theme === 'darkTheme' ? darkTheme : lightTheme);
//   }, []);

//   const setTheme = () => {
//     themeChange();
//     setMode(theme === 'darkTheme' ? lightTheme : darkTheme);
//   };

//   // index에서만 MODE_CHANGEButton 보여줌.
//   // const router = useRouter();
//   const style = {
//     // display: router.pathname === '/' ? 'block' : 'none',
//     display: block || 'none',
//   };

//   return (
//     <BtnStyle onClick={setTheme}>
//       <TextStyle
//         type="p"
//         text="나중에 아래 타입 정하기"
//         // text={
//         //   `${theme}` === 'darkTheme'
//         //     ? `${lang}` === 'ko'
//         //       ? t[themeMode[k]]
//         //       : t[themeMode[e]]
//         //     : `${lang}` === 'ko'
//         //     ? t[themeMode[k]]
//         //     : t[themeMode[e]]
//         // }
//         textSize="body"
//         weight={fontWeight[700]}
//         color="gray2"
//       />
//     </BtnStyle>
//   );
// };
