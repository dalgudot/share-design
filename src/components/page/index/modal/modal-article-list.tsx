import { motion } from 'framer-motion';
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
        </Container>
      )}
    </>
  );
};

export default ModalArticleList;

const opacityVariants = {
  show: {
    opacity: [0, 1],
    zIndex: 30000,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
    },
  },

  hide: {
    opacity: [1, 0],
    zIndex: [30000, -1],
    transition: {
      ease: 'easeInOut',
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  p {
    position: fixed;
    z-index: 20001;
  }
`;
