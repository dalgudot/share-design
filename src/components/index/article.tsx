import styled from 'styled-components';
import Link from 'next/link';
import H1Text from '../typo/h1';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { motion } from 'framer-motion';

interface ArticlePropsType {
  theme: any;
  href: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

const Article = ({
  theme,
  href,
  category,
  date,
  title,
  description,
}: ArticlePropsType) => {
  return (
    <LiArticle>
      <Link href={href}>
        <a>
          <motion.article
            // whileHover="hover"
            whileTap={{ scale: 0.995 }}
            variants={articleVariants}
          >
            <CategoryDate>
              <PText
                text={category}
                mobileSize={fontSize[14]}
                tabletSize={fontSize[14]}
                desktopSize={fontSize[14]}
                weight={fontWeight[400]}
                lineHeight={1.2}
                color={theme.gray4}
              />
              <DividerTinyVertical />
              <PText
                text={date}
                mobileSize={fontSize[14]}
                tabletSize={fontSize[14]}
                desktopSize={fontSize[14]}
                weight={fontWeight[400]}
                lineHeight={1.2}
                color={theme.gray4}
              />
            </CategoryDate>

            <H1Text
              text={title}
              mobileSize={fontSize[34]}
              tabletSize={fontSize[39]}
              desktopSize={fontSize[39]}
              weight={fontWeight[700]}
              lineHeight={1.2}
              marginTop="6px"
            />

            <PText
              text={description}
              mobileSize={fontSize[17]}
              tabletSize={fontSize[17]}
              desktopSize={fontSize[17]}
              weight={fontWeight[400]}
              lineHeight={1.55}
              color={theme.gray2}
              marginTop="16px"
            />

            <Artwork />
          </motion.article>
        </a>
      </Link>
    </LiArticle>
  );
};

export default Article;

const LiArticle = styled.li`
  max-width: 540px;
  margin: 144px auto 0;
  /* padding: 64px; */
  /* border-radius: 24px; */
  /* box-shadow: 33px 33px 50px #0f0f0f, -33px -33px 50px #151515; */

  @media all and (max-width: 768px) {
    margin-top: 120px;
  }
`;

const CategoryDate = styled.section`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

const DividerTinyVertical = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.5;
  margin: 0 8px;
  margin-top: 2px;
`;

const Artwork = styled.figure`
  min-width: 300px;
  max-width: 540px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.gray5};
  margin-top: 36px;
`;

// Framer Motion
const articleVariants = {
  hover: {
    // borderRadius: '24px',
    // padding: '8px',
    boxShadow: '33px 33px 50px #0f0f0f, -33px -33px 50px #151515',
  },
};
