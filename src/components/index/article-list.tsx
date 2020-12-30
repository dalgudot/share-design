import styled from 'styled-components';
import Link from 'next/link';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';

const ArticleList = ({
  theme,
  href,
  category,
  date,
  title,
  description,
}: ArticleListPropTypes) => {
  return (
    <Li>
      {/* <Link href={href}>
        <a> */}
      <motion.article
        // whileHover="hover"
        // whileTap={{ scale: 0.995 }}
        variants={articleVariants}
      >
        <CategoryDate>
          <TextStyle
            type="p"
            text={category}
            textSize="small"
            weight={fontWeight[400]}
            lineHeight={1.2}
            color={theme.gray3}
          />
          <DividerTinyVertical />
          <TextStyle
            type="p"
            text={date}
            textSize="small"
            weight={fontWeight[400]}
            lineHeight={1.2}
            color={theme.gray3}
          />
        </CategoryDate>

        <TextStyle
          type="h1"
          text={title}
          textSize="headline"
          weight={fontWeight[700]}
          lineHeight={1.3}
          marginTop="5px"
          letterSpacing="-0.3px"
          color={theme.gray1}
        />

        <TextStyle
          type="h1"
          text={description}
          textSize="body"
          weight={fontWeight[400]}
          lineHeight={1.5}
          marginTop="16px"
          color={theme.gray1}
        />

        {/* <Artwork /> */}
      </motion.article>
      {/* </a>
      </Link> */}
    </Li>
  );
};

export default ArticleList;

const Li = styled.li`
  max-width: 580px;
  margin: 0 auto;
`;

const CategoryDate = styled.section`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

const DividerTinyVertical = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${({ theme }) => theme.whitePrimary};
  opacity: 0.5;
  margin: 0 8px;
  margin-top: 2px;

  @media all and (min-width: ${mediaBreakPoint.second}) {
    height: 14px;
    margin-top: 1px;
  }
`;

const Artwork = styled.figure`
  max-width: 100%;
  min-height: 800px;
  background-color: ${({ theme }) => theme.gray4};
  margin-top: 36px;
  margin-bottom: 96px;
`;

// Framer Motion
const articleVariants = {
  hover: {
    // borderRadius: '24px',
    // padding: '8px',
    boxShadow: '33px 33px 50px #0f0f0f, -33px -33px 50px #151515',
  },
};

// type
interface ArticleListPropTypes {
  theme?: any;
  href?: string;
  category: string;
  date: string;
  title: string;
  description: string;
}
