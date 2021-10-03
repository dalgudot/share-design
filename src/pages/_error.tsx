import { NextPageContext } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import AloneButton from '../components/common-components/button/alone-button';
import PLarge from '../foundation/typography/p-large';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
  statusCode && console.log(statusCode);

  const message404 = {
    k: '디자인 공유하기에 없는 페이지입니다.',
    e: 'This Page is not in SHARE DESIGN.',
  };

  const messageOther = {
    k: '일시적으로 문제가 발생했습니다.',
    e: 'There is a temporary problem.',
  };

  const btnText = { k: '홈으로', e: 'Go to Home' };

  return (
    <Main>
      <PLarge //
        text={statusCode === 404 ? message404 : messageOther}
        color="gray2"
      />
      <Link href="/">
        <a>
          <AloneButton btnText={btnText} marginTop="24px" />
        </a>
      </Link>
    </Main>
  );
};

export default React.memo(ErrorPage);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 36vh;
`;

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
// 500 Error

// **pages/_error.js** is only used in production.
// In development you’ll get an error with the call stack to know where the error originated from.
