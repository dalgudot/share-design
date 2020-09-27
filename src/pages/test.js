import { useState } from "react";
import styled from "styled-components";
import Korean from "../components/lang/lang-ko";
import English from "../components/lang/lang-en";

const TestLang = () => {
  const [trans, setTrans] = useState("en");
  const [lang, setLang] = useState(
    trans === "en" ? <Korean text="안녕" /> : <English text="Hi" />
  );

  return (
    <CenterAlign>
      {lang}
      <button
        type="button"
        onClick={() => {
          setLang(
            trans === "en" ? <English text="Hi" /> : <Korean text="안녕" />
          );
          setTrans(trans === "en" ? "ko" : "en");
        }}
      >
        {trans}
      </button>
    </CenterAlign>
  );
};

export default TestLang;

const CenterAlign = styled.section`
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 36px;
    font-size: 24px;
    font-weight: 100;
    color: var(--white);
    padding: 18px 36px;
    background-color: transparent;
    border: solid 1px var(--white);
  }
`;
