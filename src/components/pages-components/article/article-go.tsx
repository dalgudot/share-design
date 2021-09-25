import styled from 'styled-components';
import { listVariants } from '../../../foundation/framer-motion/variants';
import Link from 'next/link';
import PLarge from '../../../foundation/typography/p-large';
import { motion } from 'framer-motion';
import { mediaBreakPoint } from '../../../styles/common';

const Go = ({
  targetBlank,
  href,
  text,
  children,
  marginTopDesktop,
  marginTopMobile,
}: {
  targetBlank: boolean;
  href: string;
  text: {
    k: string;
    e: string;
  };
  children?: JSX.Element;
  marginTopDesktop: string;
  marginTopMobile: string;
}) => {
  return (
    <>
      <MotionContainer
        variants={listVariants}
        whileHover="whileHover"
        whileTap="whileTap"
        marginTopDesktop={marginTopDesktop}
        marginTopMobile={marginTopMobile}
      >
        {targetBlank === true && (
          <A href={href} target="_blank">
            <Title>
              <Left>
                {children && children}
                <PLarge text={text} color="gray2" weight={700} />
              </Left>
              <PLarge text=">" color="gray2" weight={700} />
            </Title>
          </A>
        )}
        {targetBlank === false && (
          <Link href={href}>
            <A>
              <Title>
                <Left>
                  {children && children}
                  <PLarge text={text} color="gray2" weight={700} />
                </Left>
                <PLarge text=">" color="gray2" weight={700} />
              </Title>
            </A>
          </Link>
        )}
      </MotionContainer>
    </>
  );
};

export default Go;

type MotionContainerType = {
  marginTopDesktop: string;
  marginTopMobile: string;
};

const MotionContainer = styled(motion.div)<MotionContainerType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.gray6};

  // 바뀌는 속성
  margin-top: 48px;
  margin-top: ${({ marginTopDesktop }) => marginTopDesktop};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 36px;
    margin-top: ${({ marginTopMobile }) => marginTopMobile};
  }
`;

const A = styled.a`
  padding: 32px 0;
  border-top: solid 1px ${({ theme }) => theme.gray6};
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px; // 시각 보정
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
  }
`;
