import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import IconStar48Fill from '../../../../../foundation/svg/icon_star_48_fill';
import { uiUxDesign2 } from '../../../../../data/article/ui-ux-design/2';
import { useSetLanguage } from '../../../../../lib/hooks/useSetLanguage';
import { mediaBreakPoint } from '../../../../../styles/common';
import H3Title from '../../../../../foundation/typography/h3-title';
import PMedium from '../../../../../foundation/typography/p-medium';

const KoodonWriteReview = () => {
  const [starCount, setStarCount] = useState([0, 0, 0, 0, 0]); // 0: off 1: on
  const [starAnimation, setStarAnimation] = useState(false);
  const activeStarAnimation = () => {
    setStarAnimation(!starAnimation); // production에서는 true로
  };
  const [reviewText, setReviewText] = useState('');

  return (
    <Div>
      <Container>
        <motion.div
          variants={textFadeOut}
          initial={false}
          animate={starAnimation ? 'animate' : 'initial'}
        >
          <H3Title text={uiUxDesign2().koodonReviewText[0]} color="gray2" />
        </motion.div>

        {/* S of Star Area */}
        <MotionStarContainer
          variants={stagger}
          initial="initial"
          animate={starAnimation ? 'animate' : 'initial'}
        >
          {starCount.map((_, idx) => (
            <motion.button
              onClick={() => activeStarAnimation()}
              key={idx}
              variants={starRotateUp}
            >
              <IconStar48Fill
                idx={idx}
                starAnimation={starAnimation}
                starCount={starCount}
                setStarCount={setStarCount}
              />
            </motion.button>
          ))}
        </MotionStarContainer>
        {/* E of Star Area */}

        <MotionTextfield
          variants={fadeIn}
          initial={false}
          animate={starAnimation ? 'animate' : 'initial'}
          style={{ display: starAnimation ? 'block' : 'none' }}
        >
          <MultiLineTextField
            onChange={(e) => setReviewText(e.target.value)}
            placeholder={useSetLanguage(uiUxDesign2().koodonReviewText[1])}
            minRows={3}
            maxRows={3}
            minLength={19}
            maxLength={500}
          />
          <CountCharacters>
            <PMedium //
              text={{
                k: String(reviewText.length),
                e: String(reviewText.length),
              }}
              color="gray4"
            />
            <PMedium //
              text={{ k: '/500', e: '/500' }}
              color="gray4"
            />
          </CountCharacters>
        </MotionTextfield>
      </Container>
    </Div>
  );
};

export default KoodonWriteReview;

const Div = styled.div`
  overflow-x: hidden; // 애니메이션 작동 시 width 작아지는 문제 해결
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 320px;
  max-width: 480px;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    margin-top: 72px;
    font-weight: 400;
  }
`;

const MotionStarContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px 0 0;
`;

const MotionTextfield = styled(motion.div)`
  margin: 36px 16px 0;
`;

const MultiLineTextField = styled(TextareaAutosize)`
  overflow: hidden;
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.gray6} !important; // 안드로이드 삼성 인터넷에서 작동 안 해서 !important
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  resize: none; // 늘이고 줄이는 기능 없애기
  margin-top: 16px;

  /* text */
  caret-color: #78a353;
  color: ${({ theme }) => theme.gray2};
  font-weight: 400;
  line-height: 1.7;

  // 바뀌는 속성
  padding: 24px 36px;
  font-size: 21px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 24px;
    font-size: 18px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.gray5};
  }
`;

const CountCharacters = styled.div`
  display: flex;
  align-items: end;
  text-align: right;
  position: relative;
  margin-top: -1px;

  p:nth-child(1) {
    position: absolute;
    right: 40px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      right: 31px; // 47 - 16
    }
  }

  p:nth-child(2) {
    position: absolute;
    right: 0;
  }
`;

const starRotateUp = {
  initial: { y: 0 },

  animate: { y: -120, rotateY: 720 },
};

const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },

  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const textFadeOut = {
  initial: {
    opacity: 1,
    scale: 1,
    y: 0,
  },

  animate: {
    opacity: 0,
    scale: 0,
    y: -16,
    transition: {
      duration: 0.2,
    },
  },
};

const fadeIn = {
  initial: {
    opacity: 0,
    scale: 1.2,
    y: 0,
  },

  animate: {
    opacity: 1,
    scale: 1,
    y: -120,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
};
