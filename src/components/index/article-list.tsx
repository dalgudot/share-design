import styled from 'styled-components';
import Link from 'next/link';
import H1 from '../typo/h1';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
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
      <Link href={href}>
        <a>
          <motion.article
            // whileHover="hover"
            // whileTap={{ scale: 0.995 }}
            variants={articleVariants}
          >
            <CategoryDate>
              <P
                text={category}
                mobileSize={fontSize.small.mobile}
                tabletSize={fontSize.small.tablet}
                desktopSize={fontSize.small.desktop}
                weight={fontWeight[400]}
                lineHeight={1.2}
                color={theme.gray4}
              />
              <DividerTinyVertical />
              <P
                text={date}
                mobileSize={fontSize.small.mobile}
                tabletSize={fontSize.small.tablet}
                desktopSize={fontSize.small.desktop}
                weight={fontWeight[400]}
                lineHeight={1.2}
                color={theme.gray4}
              />
            </CategoryDate>

            <H1
              text={title}
              mobileSize={fontSize.headline.mobile}
              tabletSize={fontSize.headline.tablet}
              desktopSize={fontSize.headline.desktop}
              weight={fontWeight[700]}
              lineHeight={1.2}
              marginTop="8px"
              letterSpacing="-0.3px"
            />

            <P
              text={description}
              mobileSize={fontSize.body.mobile}
              tabletSize={fontSize.body.tablet}
              desktopSize={fontSize.body.desktop}
              weight={fontWeight[400]}
              lineHeight={1.55}
              marginTop="16px"
              color={theme.gray2}
            />

            <Artwork />
          </motion.article>
        </a>
      </Link>
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
  background-color: ${({ theme }) => theme.gray1};
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
  min-height: 300px;
  background-color: ${({ theme }) => theme.gray5};
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
  theme: any;
  href: string;
  category: string;
  date: string;
  title: string;
  description: string;
}
