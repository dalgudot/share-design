import styled from 'styled-components';
import Link from 'next/link';
import H1 from '../typo/h1';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';
import { BtnStyle } from '../index/common-elements';
import { t } from '../index/lang/t';
import languageFunc from '../func/language-func';

const ArticleListSimple = ({
  href,
  theme,
  title,
  order,
}: ArticleListPropTypes) => {
  return (
    <Li>
      {/* <Link href={href}>
        <a> */}
      <motion.article>
        <H1
          text={order}
          mobileSize={fontSize.headline.mobile}
          tabletSize={fontSize.headline.tablet}
          desktopSize={fontSize.headline.desktop}
          weight={fontWeight[700]}
          lineHeight={1.2}
          letterSpacing="-0.3px"
        />
        <H1
          text={title}
          mobileSize={fontSize.headline.mobile}
          tabletSize={fontSize.headline.tablet}
          desktopSize={fontSize.headline.desktop}
          weight={fontWeight[700]}
          lineHeight={1.2}
          marginTop="12px"
          letterSpacing="-0.3px"
        />
        <BtnStyle>
          <Link href={href}>
            <a>
              <P
                text={languageFunc(t.article1.titleSimpleBtn)}
                mobileSize={fontSize.body.mobile}
                tabletSize={fontSize.body.tablet}
                desktopSize={fontSize.body.desktop}
                weight={fontWeight[400]}
                lineHeight={1.2}
              />
            </a>
          </Link>
        </BtnStyle>
      </motion.article>
      {/* </a>
      </Link> */}
    </Li>
  );
};

export default ArticleListSimple;

const Li = styled.li`
  max-width: 580px;
  margin: 0 auto;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  href: string;
  order: string;
  title: string;
}
