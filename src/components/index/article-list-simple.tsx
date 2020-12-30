import styled from 'styled-components';
import Link from 'next/link';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';
import { BtnStyle } from './common-elements';
import { t } from './lang/t';
import languageFunc from '../func/language-func';
import SVGShareDesignEn from '../svg/share-design-en';
import SVGShareDesignKo from '../svg/share-design-ko';

const ArticleListSimple = ({
  href,
  theme,
  order,
  title,
}: ArticleListPropTypes) => {
  return (
    <Li>
      <motion.div
        variants={ListTextAnimationVariants}
        initial="start"
        animate="end"
      >
        <ListSection>
          <TextStyle
            type="h1"
            text={order}
            textSize="headline"
            weight={fontWeight[700]}
            lineHeight={1.2}
            letterSpacing="-0.3px"
            color={theme.whitePrimary}
          />
          <TextStyle
            type="h1"
            text={title}
            textSize="headline"
            weight={fontWeight[700]}
            lineHeight={1.2}
            marginTop="12px"
            letterSpacing="-0.3px"
            color={theme.whitePrimary}
          />

          <Link href={href}>
            <a>
              <BtnStyle>
                <TextStyle
                  type="p"
                  text={languageFunc(t.article1.titleSimpleBtn)}
                  textSize="body"
                  weight={fontWeight[400]}
                  lineHeight={1.2}
                  color={theme.whitePrimary}
                />
              </BtnStyle>
            </a>
          </Link>
        </ListSection>
      </motion.div>

      <TextDecoration>
        <SVGShareDesignKo color="#232324" />
        <SVGShareDesignEn color="#232324" />
      </TextDecoration>

      {/* </WrapRelative> */}
    </Li>
  );
};

export default ArticleListSimple;

// framer motion
const ListTextAnimationVariants = {
  start: {
    opacity: 0,
  },

  end: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Li = styled.li`
  /* max-width: 580px; */
  margin: 0 auto;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100vw;
  max-width: 100vw;
`;

const ListSection = styled.section`
  position: absolute;
  transform: translateY(20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 100%;
  overflow-x: hidden;
`;

const TextDecoration = styled.figure`
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  text-align: center;

  svg {
    mask-image: linear-gradient(0deg, transparent 3%, #000 90%);
    -webkit-mask-image: linear-gradient(0deg, transparent 3%, #000 90%);
  }
`;

// type
interface ArticleListPropTypes {
  theme?: any;
  href: string;
  order: string;
  title: string;
}
