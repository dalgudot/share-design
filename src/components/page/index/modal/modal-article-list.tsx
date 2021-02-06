import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import { tArticle } from '../../article/text/t-article';

const ModalArticleList = ({ onClick }: any) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      {/* <PMedium400 //
        text={tArticle.goToList}
        color={themeContext.gray1}
      /> */}
      <GlassMorphismBackground onClick={onClick} />
    </Container>
  );
};

export default ModalArticleList;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20000;

  p {
    position: fixed;
    z-index: 20001;
  }
`;

const GlassMorphismBackground = styled.div`
  width: 100vw;
  height: 130vh;

  /* Grassmorphism */
  opacity: 0.999;
  color: ${({ theme }) => theme.gray8};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
`;
