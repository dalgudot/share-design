import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const LangChangeButton = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: "CHANGELANGUAGE",
    });

  // html "lang" attribute 변경
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang === "ko" ? "ko" : "en");

    console.log(`HtmlLang: ${document.documentElement.lang}`);
  }, [lang]);

  return (
    <Button_Language>
      <button onClick={languageChange}>
        {`${lang}` === "ko" ? "View in English" : "한글로 보기"}
      </button>
    </Button_Language>
  );
};

export default LangChangeButton;

const Button_Language = styled.section`
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
