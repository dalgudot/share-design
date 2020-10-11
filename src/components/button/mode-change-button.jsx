import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ModeChangeButton = ({ setMode, darkTheme, lightTheme }) => {
  const theme = useSelector((state) => state.localMode);
  const dispatch = useDispatch();
  const themeChange = () =>
    dispatch({
      type: "MODECHANGE",
    });

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
    <ButtonMode>
      <button style={style} onClick={setTheme}>
        MODE
      </button>
    </ButtonMode>
  );
};

export default ModeChangeButton;

const ButtonMode = styled.section`
  position: fixed;
  top: 24px;
  right: 24px;

  button {
    font-size: 14px;
    font-weight: 100;
    padding: 6px 12px;
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.textPrimary};
  }
`;
