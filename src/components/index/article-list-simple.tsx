import styled from 'styled-components';
import Link from 'next/link';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';
import { t } from './lang/t';
import languageFunc from '../func/language-func';
import MotionSVGShareDesignEn from '../svg/motion-svg-share-design-en';
import MotionSVGShareDesignKo from '../svg/motion-svg-share-design-ko';
import IcnArrowRight24 from '../svg/icn_arrow_right_24';

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
                <IcnArrowRight24 color={theme.whitePrimary} />
              </BtnStyle>
            </a>
          </Link>
        </ListSection>
      </motion.div>

      <TextDecoration>
        <MotionSVGShareDesignKo color="#232324" />
        <MotionSVGShareDesignEn color="#232324" />
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
  /* margin: 0 auto; */
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100vw;
  max-width: 100vw;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    top: 28%;
  }
`;

const ListSection = styled.section`
  position: absolute;
  transform: translateY(18%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 100%;
  overflow-x: hidden;
`;

const BtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, #7c62ed, #4633d7);
  margin-top: 24px;
`;

const TextDecoration = styled.figure`
  position: absolute;
  /* transform: translateY(20%); */
  left: 50%;
  transform: translate(-50%, -4%);
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow: hidden;

  /* text-align: center; */

  svg {
    mask-image: linear-gradient(0deg, transparent 3%, #000 90%);
    -webkit-mask-image: linear-gradient(0deg, transparent 3%, #000 90%);
  }

  /* @media all and (max-width: ${mediaBreakPoint.first}) {
    top: 100%;
  } */
`;

// type
interface ArticleListPropTypes {
  theme?: any;
  href: string;
  order: string;
  title: string;
}
