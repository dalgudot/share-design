import styled from "styled-components";
import { useLanguageChange } from "../func/lang-change-redux";

const LangChangeButton = () => {
  const { lang, languageChange } = useLanguageChange();
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
    color: var(--white);
    padding: 6px 12px;
    background-color: transparent;
    border: solid 1px var(--white);
  }
`;
