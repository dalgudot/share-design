import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { t } from '../index/lang/t';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { BtnStyle } from '../index/common-elements';

const ModeChangeButton = ({
  setMode,
  darkTheme,
  lightTheme,
  block,
}: {
  setMode: any;
  darkTheme: any;
  lightTheme: any;
  block?: string;
}) => {
  const theme = useSelector((state: any) => state.localMode);
  const dispatch = useDispatch();
  const themeChange = () =>
    dispatch({
      type: 'MODECHANGE',
    });

  const lang = useSelector((state: any) => state.language);

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
    <BtnStyle style={style} className="right__button" onClick={setTheme}>
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
        color="gray1"
      />
    </BtnStyle>
  );
};

export default ModeChangeButton;
