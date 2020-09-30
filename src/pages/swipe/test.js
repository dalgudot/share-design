import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  Item,
  AppContainer,
  ExtraInfo,
  Code,
} from "../../components/components";
import Carousel from "../Carousel";

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
      <AppContainer>
        <TextContainer>
          <Carousel title="Carousel">
            <Item img="/images/a.jpg" />
            <Item img="/images/a.jpg" />
            <Item img="/images/a.jpg" />
            <Item img="/images/a.jpg" />
            <Item img="/images/a.jpg" />
          </Carousel>
        </TextContainer>
      </AppContainer>
    </>
  );
};

export default TwentiesGallary;

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

  body {
    background-color: #ffffff;
  }

  @media all and (min-width: 320px) and (max-width: 767px) {
    p {
      font-size: 36px;
    }
  }
`;
