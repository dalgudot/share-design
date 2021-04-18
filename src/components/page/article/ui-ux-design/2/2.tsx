import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { uiUxDesign2 } from '../../../../../data/article/ui-ux-design/2';
import { stagger } from '../../../../../elements/framer-motion/variants';
import H2Title700 from '../../../../../elements/typography/h2-title-700';
import PMedium400 from '../../../../../elements/typography/p-medium-400';
import PSmall700 from '../../../../../elements/typography/p-small-700';
import { useSetLanguage } from '../../../../../lib/hooks/useSetLanguage';
import { useWindowHeight } from '../../../../../lib/hooks/useWindowHeight';
import { mediaBreakPoint } from '../../../../../styles/common';
import ArticleCommonImage from '../../article-common-image';
import KoodonWriteReview from './koodon-write-review';

const UIUXDesignContents2 = ({
  contentsArray,
}: {
  contentsArray: object[];
}) => {
  const { ref, inView, entry } = useInView({
    /* options */
    threshold: 0,
  });
  const listCount = uiUxDesign2().listCount;
  const height: number = useWindowHeight();

  return (
    <>
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />

      <ArticleCommonImage
        src={contentsArray[1]}
        caption={contentsArray[2]}
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[3]}
        color="gray3"
        marginTop="96px"
      />

      <PMedium400 //
        text={contentsArray[4]}
        color="gray3"
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[5]}
        color="gray3"
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[6]}
        color="gray3"
        marginTop="36px"
      />

      <ListLine height={height} />
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
            <PSmall700 text={value.photoSrc} color="gray3" />
          </MotionLi>
        ))}
      </MotionUl>
      <ListLine height={height} />

      <PMedium400 //
        text={contentsArray[7]}
        color="gray3"
      />
      <PMedium400 //
        text={contentsArray[8]}
        color="gray3"
        marginTop="36px"
      />
      <PMedium400 //
        text={contentsArray[9]}
        color="gray3"
        marginTop="36px"
      />

      <ListLine height={height} />
      <KoodonWriteReview />
      <ListLine height={height} />

      <PMedium400 //
        text={contentsArray[10]}
        color="gray3"
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[11]}
        color="gray3"
        marginTop="36px"
      />

      <H2Title700 //
        text={contentsArray[12]}
        color="gray2"
        marginTop="120px"
      />

      <PMedium400 //
        text={contentsArray[13]}
        color="gray3"
        marginTop="36px"
      />
      <PMedium400 //
        text={contentsArray[14]}
        color="gray3"
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[15]}
        color="gray3"
        marginTop="36px"
      />
    </>
  );
};

export default UIUXDesignContents2;

// 화면 세로 길이에 따라 길이가 달라지는 선분
const ListLine = styled.span<{ height: number }>`
  width: 1px;
  height: ${({ height }) => height * 0.3}px;
  background-color: ${({ theme }) => theme.gray6};

  // 바뀌는 속성
  margin: 48px auto;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 36px auto;
  }
`;

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
  background-color: ${({ theme }) => theme.gray6__30};
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
