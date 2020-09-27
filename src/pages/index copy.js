import HeadInfo from "../components/head-info";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

const useLanguage = () => {
  return useSelector(
    (state) => ({
      language: state.language,
    }),
    shallowEqual
  );
};

const useChangeLanguage = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const changeLanguage = () =>
    dispatch({
      type: "CHANGELANGUAGE",
    });
  return { lang, changeLanguage };
};

const Index = () => {
  const [state, setState] = useState("20대를 남기다");
  const { language } = useLanguage();
  const { lang, changeLanguage } = useChangeLanguage();

  return (
    <>
      <HeadInfo
        title="KHK DESIGN"
        icoImage="/kh.ico"
        description="UI/UX 디자인 경험을 공유합니다"
        url="https://khk-design.kr/"
        thumbnail="/images/a.jpg"
      />

      <h1>{language}</h1>

      <CenterAlign>
        {/* <Link href={`/twenties-gallary?lang=${state}`} as="/twenties-gallary"> */}
        <Link href={`/twenties-gallary?lang=${state}`}>
          <a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 120, duration: 0.2 }}
            >
              {lang}
            </motion.button>
          </a>
        </Link>
      </CenterAlign>
      <Button_Language>
        <button onClick={changeLanguage}>{lang}</button>
        {/* <button onClick={() => setState("20대를 남기다")}>ko</button>
        <button onClick={() => setState("TWENTIES")}>en</button> */}
      </Button_Language>
    </>
  );
};

export default Index;

export function getStaticProps() {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  return {
    props: {
      initialReduxState: {
        type: "CHANGELANGUAGE",
        language: useChangeLanguage(),
      },
    },
  };
}

const Button_Language = styled.section`
  position: fixed;
  top: 24px;
  right: 24px;
  button {
    margin-right: -1px;
    font-size: 14px;
    font-weight: 100;
    color: var(--white);
    padding: 6px 12px;
    background-color: transparent;
    border: solid 1px var(--white);
  }
`;

const CenterAlign = styled.section`
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    font-size: 24px;
    font-weight: 100;
    color: var(--white);
    padding: 18px 36px;
    background-color: transparent;
    border: solid 1px var(--white);
  }
`;
