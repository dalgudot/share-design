import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { k } from "../lang/index/ko-index";
import { e } from "../lang/index/en-index";

const ModeChangeButton = ({ setMode, darkTheme, lightTheme }) => {
  const theme = useSelector((state) => state.localMode);
  const dispatch = useDispatch();
  const themeChange = () =>
    dispatch({
      type: "MODECHANGE",
    });

  const lang = useSelector((state) => state.language);

  //초기 mode, 새로고침 mode 정의
  useEffect(() => {
    setMode(theme === "darkTheme" ? darkTheme : lightTheme);
  }, []);

  const setTheme = () => {
    themeChange();
    setMode(theme === "darkTheme" ? lightTheme : darkTheme);
  };

  // index에서만 ModeChangeButton 보여줌.
  const router = useRouter();
  const style = {
    display: router.pathname === "/" ? "block" : "none",
  };

  return (
    <ButtonMode style={style}>
      <button onClick={setTheme}>
        {`${theme}` === "darkTheme"
          ? `${lang}` === "ko"
            ? k["LightMode"]
            : e["LightMode"]
          : `${lang}` === "ko"
          ? k["DarkMode"]
          : e["DarkMode"]}
      </button>
    </ButtonMode>
  );
};

export default ModeChangeButton;

const ButtonMode = styled.div`
  position: absolute;
  top: 300px;
  left: 24px;

  button {
    font-size: 14px;
    font-weight: 100;
    padding: 6px 12px;
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.textPrimary};
  }
`;
