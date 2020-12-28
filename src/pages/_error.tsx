import styled from 'styled-components';
import Link from 'next/link';
import H1 from '../components/typo/h1';
import P from '../components/typo/p';
import { t } from '../components/index/lang/t';
import { fontSize, fontWeight } from '../components/typo/font';
import languageFunc from '../components/func/language-func';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
// 500 Error
const Error = ({ theme, statusCode }: any) => {
  statusCode && console.log(statusCode);

  return (
    <Container>
      <H1
        text={languageFunc(t.errorMessage.message)}
        mobileSize={fontSize.body.mobile}
        tabletSize={fontSize.body.tablet}
        desktopSize={fontSize.body.desktop}
        weight={fontWeight[400]}
        lineHeight={1.55}
        color={theme.gray2}
      />
      <Link href="/">
        <a>
          <BtnStyle>
            <P
              text={languageFunc(t.errorMessage.btn)}
              mobileSize={fontSize.body.mobile}
              tabletSize={fontSize.body.tablet}
              desktopSize={fontSize.body.desktop}
              weight={fontWeight[400]}
              color={theme.gray1}
            />
          </BtnStyle>
        </a>
      </Link>
    </Container>
  );
};

export default Error;

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

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
  background-color: ${({ theme }) => theme.gray5};
  color: ${({ theme }) => theme.gray1};
`;
