import styled from 'styled-components';
import Link from 'next/link';
import TextStyle from '../elements/typography/atoms/text-style';
import { t } from '../data/index/t';
import { fontWeight } from '../elements/typography/atoms/font';
import { useSetLanguage } from '../lib/hooks/useSetLanguage';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { smoothUp } from '../elements/framer-motion/variants';
import { motion } from 'framer-motion';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
// 500 Error
const Error = ({ statusCode }: any) => {
  statusCode && console.log(statusCode);
  const themeContext = useContext(ThemeContext);
  return (
    <MotionContainer
      variants={smoothUp}
      initial="initial"
      animate="animate"
      // exit="exit"
    >
      <TextStyle
        type="h1"
        text={useSetLanguage(t.errorMessage.message)}
        textSize="medium"
        weight={fontWeight[400]}
        lineHeight={1.55}
        color={themeContext.gray2}
      />
      <Link href="/">
        <a>
          <BtnStyle>
            <TextStyle
              type="p"
              text={useSetLanguage(t.errorMessage.btn)}
              textSize="medium"
              weight={fontWeight[400]}
              color={themeContext.gray1}
            />
          </BtnStyle>
        </a>
      </Link>
    </MotionContainer>
  );
};

export default React.memo(Error);

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

const MotionContainer = styled(motion.main)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 36vh;
`;

const BtnStyle = styled.button`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.gray7};
  color: ${({ theme }) => theme.gray1};
`;
