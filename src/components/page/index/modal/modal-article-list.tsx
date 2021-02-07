import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import { tArticle } from '../../article/text/t-article';

const ModalArticleList = ({
  glassMorphismBackground,
  hideArticleList,
}: {
  glassMorphismBackground: any;
  hideArticleList: any;
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      {glassMorphismBackground && (
        <Container
          variants={opacityVariants}
          initial="hide"
          animate="show"
          exit="hide"
        >
          <div onClick={() => hideArticleList()}>
            <PMedium400 //
              text={tArticle.goToList}
              color={themeContext.gray1}
            />
          </div>
          <GlassMorphismBackground />
        </Container>
      )}
    </>
  );
};

export default ModalArticleList;

const opacityVariants = {
  show: {
    opacity: [0, 0.999],
    zIndex: 30000,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },

  hide: {
    opacity: [0.999, 0],
    zIndex: [30000, -1],
    transition: {
      ease: 'easeInOut',
      //   duration: 0.3,
    },
  },
};

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  /* z-index: 20000; */

  p {
    position: fixed;
    z-index: 20001;
  }
`;

const CloseButton = styled.button``;

const GlassMorphismBackground = styled.div`
  width: 100vw;
  height: 100vh;
  /* z-index: 30000; */

  /* Grassmorphism */
  /* opacity: 0.999; */
  /* color: ${({ theme }) => theme.gray8}; */

  /* backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg); */

  backdrop-filter: blur(80px) saturate(120%);
  -webkit-backdrop-filter: blur(80px) saturate(120%);

  /* -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out; */
`;
