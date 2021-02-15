import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { fadeInOut } from '../../../elements/framer-motion/variants';
import Profile from '../profile';
import H1Title700 from '../../../elements/typography/h1-title-700';
import H6Title700 from '../../../elements/typography/h6-title-700';

const ArticleTitleArea = ({
  categoryTitle,
  title,
}: {
  categoryTitle: object;
  title: object;
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <motion.div variants={fadeInOut}>
      <H6Title700 text={categoryTitle} color={themeContext.gray4} />
      <H1Title700 text={title} color={themeContext.gray1} marginTop="8px" />
      <Profile marginTop="20px" />
    </motion.div>
  );
};

export default ArticleTitleArea;
