import HeadInfo from "../components/head-info";
import Link from "next/link";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const [state, setState] = useState("20대를 남기다");

  return (
    <>
      <HeadInfo
        title="KHK DESIGN"
        icoImage="/kh.ico"
        description="UI/UX 디자인 경험을 공유합니다"
        url="https://khk-design.kr/"
        thumbnail="/images/a.jpg"
      />

      <div className={styles.center__align}>
        <Link href="/twenties-gallary">
          <a>
            <motion.button
              className={styles.button__test}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 120, duration: 0.2 }}
            >
              {state}
            </motion.button>
          </a>
        </Link>
      </div>
      <Button_Language>
        <button onClick={() => setState("20대를 남기다")}>ko</button>
        <button onClick={() => setState("TWENTIES")}>en</button>
      </Button_Language>
    </>
  );
};

export default Index;

const Button_Language = styled.section`
  position: fixed;
  top: 36px;
  right: 36px;

  button {
    font-size: 14px;
    font-weight: 100;
    color: var(--white);
    padding: 6px 12px;
    background-color: transparent;
    border: solid 1px var(--white);
  }
`;
