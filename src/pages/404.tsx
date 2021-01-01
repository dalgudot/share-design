import styled from 'styled-components';
import Link from 'next/link';
import TextStyle from '../components/typography/text-style';
import { t } from '../components/index/lang/t';
import { fontWeight } from '../components/typography/font';
import { useSetLanguage } from '../lib/custom-hook/useSetLanguage';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
const Error404Page = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <TextStyle
        type="h1"
        text={useSetLanguage(t.errorMessage.message)}
        textSize="body"
        weight={fontWeight[400]}
        lineHeight={1.55}
        color={themeContext.gray1}
      />
      <Link href="/">
        <a>
          <BtnStyle>
            <TextStyle
              type="p"
              text={useSetLanguage(t.errorMessage.btn)}
              textSize="body"
              weight={fontWeight[400]}
              color={themeContext.whitePrimary}
            />
          </BtnStyle>
        </a>
      </Link>
    </Container>
  );
};

export default React.memo(Error404Page);

const Container = styled.main`
  width: 100%;
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const BtnStyle = styled.button`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;

  border-radius: 24px;
  background-color: ${({ theme }) => theme.gray6};
  color: ${({ theme }) => theme.whitePrimary};
`;
