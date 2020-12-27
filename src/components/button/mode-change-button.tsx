import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { t } from '../index/lang/t';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
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
      <PText
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
        mobileSize={fontSize[14]}
        tabletSize={fontSize[18]}
        desktopSize={fontSize[21]}
        weight={fontWeight[700]}
        color="gray2"
      />
    </BtnStyle>
  );
};

export default ModeChangeButton;
