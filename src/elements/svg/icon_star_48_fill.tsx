import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';

const IconStar48Fill = ({
  idx,
  starAnimation,
  starCount,
  setStarCount,
}: {
  idx: number;
  starAnimation: boolean;
  starCount: number[];
  setStarCount: Function;
}) => {
  const themeContext = useContext(ThemeContext);
  const unSelectedColor: string = themeContext.gray3;
  const selectedColor: string = '#78A353';
  const activeStar = () => {
    switch (idx) {
      case 0: {
        setStarCount([1, 0, 0, 0, 0]);
        break;
      }
      case 1: {
        setStarCount([1, 1, 0, 0, 0]);
        break;
      }
      case 2: {
        setStarCount([1, 1, 1, 0, 0]);
        break;
      }
      case 3: {
        setStarCount([1, 1, 1, 1, 0]);
        break;
      }
      case 4: {
        setStarCount([1, 1, 1, 1, 1]);
        break;
      }
    }
  };

  return (
    <MotionSVG
      onClick={activeStar}
      variants={starRotate}
      initial={false}
      animate={starCount === [0, 0, 0, 0, 0] ? 'animate' : 'initial'}
      starCount={starCount}
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
    >
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <path
                d="M0 0H48V48H0z"
                transform="translate(-268 -324) translate(60 324) translate(208)"
              />
              <path
                fill={
                  starAnimation === true && starCount[idx] === 1
                    ? selectedColor
                    : unSelectedColor
                }
                d="M22.213 5.162c.692-1.468 2.625-1.545 3.448-.232l.126.232 5.098 10.81 11.407 1.734c1.474.224 2.15 1.957 1.399 3.179l-.138.199-.157.178-8.252 8.413 1.948 11.883c.254 1.548-1.135 2.762-2.488 2.366l-.203-.071-.2-.097L24 38.146l-10.2 5.61c-1.326.729-2.855-.271-2.92-1.734l.002-.234.026-.23 1.946-11.883-8.25-8.413c-1.067-1.088-.64-2.905.654-3.433l.224-.075.226-.048 11.405-1.734 5.1-10.81z"
                transform="translate(-268 -324) translate(60 324) translate(208)"
              />
            </g>
          </g>
        </g>
      </g>
    </MotionSVG>
  );
};

export default IconStar48Fill;

const MotionSVG = styled(motion.svg)<{ starCount: number[] }>`
  path {
    transition: 0.05s ease-in-out;
  }
`;

const starRotate = {
  initial: {},
  animate: { rotateY: 360 },
};
