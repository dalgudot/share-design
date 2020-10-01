import HeadInfo from "../components/head-info";
import { indexInfo } from "../components/lang/head-info/head-info-text";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import { k } from "../components/lang/index/ko-index";
import { e } from "../components/lang/index/en-index";
import LangChangeButton from "../components//button/lang-change-button";
import { useSelector } from "react-redux";

//Framer Motion
const buttonVariants = {
  hover: {
    scale: 1.1,
    // transition: {
    //   yoyo: Infinity,
    // },
  },
};

const Index = () => {
  const lang = useSelector((state) => state.language);
  return (
    <>
      <HeadInfo info={indexInfo} />
      <LangChangeButton />

      <CenterAlign>
        <Link href="twenties-gallary">
          <a>
            <motion.button variants={buttonVariants} whileHover="hover">
              {`${lang}` === "ko" ? k.twenty : e.twenty}
            </motion.button>
          </a>
        </Link>
      </CenterAlign>
    </>
  );
};

export default Index;

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
