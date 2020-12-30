import styled from 'styled-components';
import Link from 'next/link';
import TextStyle from '../components/typography/text-style';
import { t } from '../components/index/lang/t';
import { fontWeight } from '../components/typography/font';
import languageFunc from '../components/func/language-func';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
const Error404Page = ({ theme }: any) => {
  return (
    <Container>
      <TextStyle
        type="h1"
        text={languageFunc(t.errorMessage.message)}
        textSize="body"
        weight={fontWeight[400]}
        lineHeight={1.55}
        color={theme.gray1}
      />
      <Link href="/">
        <a>
          <BtnStyle>
            <TextStyle
              type="p"
              text={languageFunc(t.errorMessage.btn)}
              textSize="body"
              weight={fontWeight[400]}
              color={theme.whitePrimary}
            />
          </BtnStyle>
        </a>
      </Link>
    </Container>
  );
};

export default Error404Page;

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