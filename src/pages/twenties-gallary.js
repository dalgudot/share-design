import HeadInfo from "../components/head-info";
import styled from "styled-components";
import { motion } from "framer-motion";
import Korean from "../components/lang/index/ko";
import English from "../components/lang/index/en";
import { useSelector, useDispatch } from "react-redux";

const useLanguageChange = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: "CHANGELANGUAGE",
    });
  return { lang, languageChange };
};

const TwentiesGallary = () => {
  const { lang, languageChange } = useLanguageChange();
  return (
    <>
      <HeadInfo
        title="20대를 남기다"
        icoImage="/twenties.ico"
        description="20대의 감정과 이야기"
        url="https://khk-design.kr/twenties-gallary"
        thumbnail="/images/a.jpg"
      />
      <TextContainer>
        <motion.p
          variants={InitialTextVariants}
          initial="hidden"
          animate="visible"
        >
          {`${lang}` === "ko" ? (
            <Korean text="20살" />
          ) : (
            <English text="20 YEARS OLD" />
          )}
        </motion.p>
      </TextContainer>
    </>
  );
};

export default TwentiesGallary;

// Framer Motion
const InitialTextVariants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const TextContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--white);
    font-size: 48px;
    font-weight: 100;
  }

  @media all and (min-width: 320px) and (max-width: 767px) {
    p {
      font-size: 36px;
    }
  }
`;
