import { tType } from '../../../../../../type';
import { useInView } from 'react-intersection-observer';
import { uiUxDesign2 } from '../../../../../data/article/ui-ux-design/ui-ux-design-2';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../../../../styles/common';
import { motion } from 'framer-motion';
import PMedium from '../../../../../foundation/typography/p-medium';
import { useSetLanguage } from '../../../../../lib/hooks/useSetLanguage';
import { stagger } from '../../../../../foundation/framer-motion/variants';
import KoodonWriteReview from './koodon-write-review';
import ArticleLine from '../../article-line';

const ExampleUiUxDesign2 = ({
  component_key,
}: {
  component_key: string;
  caption?: tType;
}) => {
  const { ref, inView, entry } = useInView({
    /* options */
    threshold: 0,
  });
  const listCount = uiUxDesign2().listCount;

  const ArticleExampleComponentChildren = (component_key: string) => {
    switch (component_key) {
      case '1':
        return (
          <>
            <ArticleLine />
            <MotionUl
              ref={ref}
              variants={stagger}
              initial={false}
              animate={inView === true ? 'animate' : 'initial'}
            >
              {listCount.map((value) => (
                <MotionLi //
                  key={value.src}
                  variants={listVariants}
                >
                  <img src={value.src} alt={useSetLanguage(value.alt)} />
                  <PMedium text={value.photoSrc} color="gray2" weight={700} />
                </MotionLi>
              ))}
            </MotionUl>
            <ArticleLine />
          </>
        );
      case '2':
        return (
          <>
            <ArticleLine />
            <KoodonWriteReview />
            <ArticleLine />
          </>
        );
      default:
        return;
    }
  };

  const exampleComponent = (component_key: string) => {
    return ArticleExampleComponentChildren(component_key);
  };

  return <>{exampleComponent(component_key)}</>;
};

export default ExampleUiUxDesign2;

const MotionUl = styled(motion.ul)`
  li:nth-child(1) {
    margin: 0 auto;
  }
  li:nth-child(2) {
    margin: 16px auto 0;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin: 16px auto 0;
    }
  }
  li:nth-child(3) {
    margin: 16px auto 0;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin: 16px auto 0;
    }
  }
`;

const MotionLi = styled(motion.li)`
  width: 100%;
  background-color: ${({ theme }) => theme.gray6};
  border-radius: ${({ theme }) => theme.borderRadius.R26};
  display: flex;
  align-items: center;

  // 바뀌는 속성
  max-width: 400px;
  height: 120px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    max-width: 300px;
    height: 96px;
  }

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-left: 36px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      width: 36px;
      height: 36px;
      margin-left: 24px;
    }
  }

  p {
    margin-left: 16px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-left: 12px;
    }
  }
`;

const smoothTransition = { ease: [0.43, 0.13, 0.23, 0.96] };

const listVariants = {
  initial: {
    y: 20,
    scale: 0,
    opacity: 0,
  },

  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      smoothTransition,
    },
  },
};
