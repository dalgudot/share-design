import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const ModeChangeButton = () => {
  const mode = useSelector((state) => state.lightMode);
  const dispatch = useDispatch();
  const modeChange = () =>
    dispatch({
      type: "CHANGEMODE",
    });

    // useEffect(() => {
    //   document.body.style.backgroundColor = ${({theme}) => theme.lightTheme.backgroundColor};
    //   }, [mode])

  return (
    <ButtonMode>
      <button onClick={modeChange}>
        {`${mode}` === "dark" ? "Dark Mode" : "Light Mode"}
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
    border: solid 1px ${({theme}) => theme.darkTheme.textPrimary};
  }
`;
