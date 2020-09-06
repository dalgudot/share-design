import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Twenties.module.css";
import styled from "styled-components";
import { motion } from "framer-motion";

const Twenties = () => {
  return (
    <>
      <Head>
        <title>Twenties</title>
      </Head>
      <Link href="/">
        <a>
          <h1 className={styles.text__color__white}>20대를 남기다</h1>
        </a>
      </Link>
    </>
  );
};

export default Twenties;
