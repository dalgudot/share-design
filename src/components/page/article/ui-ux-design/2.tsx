import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { stagger } from '../../../../elements/framer-motion/variants';
import H2Title700 from '../../../../elements/typography/h2-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import PMedium700 from '../../../../elements/typography/p-medium-700';
import PSmall400 from '../../../../elements/typography/p-small-400';
import PSmall700 from '../../../../elements/typography/p-small-700';
import { useWindowHeight } from '../../../../lib/hooks/useWindowHeight';
import { mediaBreakPoint } from '../../../../styles/common';
import ArticleCommonImage from '../article-common-image';

const UIUXDesignContents2 = ({
  contentsArray,
}: {
  contentsArray: object[];
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const listCount = [
    {
      src: '/images/ui-ux-design/002/1.jpg',
      photoSrc: { k: 'davisuko on Unsplash', e: 'davisuko on Unsplash' },
    },
    {
      src: '/images/ui-ux-design/002/2.jpg',
      photoSrc: { k: 'Oleg Laptev on Unsplash', e: 'Oleg Laptev on Unsplash' },
    },
    {
      src: '/images/ui-ux-design/002/3.jpg',
      photoSrc: { k: 'Mae Mu on Unsplash', e: 'Mae Mu on Unsplash' },
    },
  ];
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
          <MotionLi key={value.src} variants={listVariants}>
            <img src={value.src} />
            <PSmall700 text={value.photoSrc} color="gray3" />
          </MotionLi>
        ))}
      </MotionUl>
      <ListLine height={height} />

      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
      />
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[0]}
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
  max-width: 480px;
  height: 104px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    max-width: 300px;
    height: 96px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 24px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      width: 36px;
      height: 36px;
    }
  }

  p {
    margin-left: 12px;
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
      duration: 0.9,
      smoothTransition,
    },
  },
};

const FigureWrap = styled.figure`
  margin: 96px auto 0;
  text-align: center;
  max-width: 380px;

  .example__lang_change_toggle {
    display: flex;
    justify-content: center;

    // 바뀌는 속성
    margin-right: 28px; // 중앙으로 보이도록 시각 보정

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-right: 20px; // 중앙으로 보이도록 시각 보정
    }
  }
`;
