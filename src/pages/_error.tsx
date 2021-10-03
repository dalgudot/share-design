import { NextPageContext } from 'next';
import React from 'react';
import ErrorCommon from '../components/pages-components/error/error-common';

const ErrorPage = ({ statusCode }: { statusCode: number }) => {
  statusCode && console.log(statusCode);
  const messageError = {
    k: '일시적으로 문제가 발생했습니다.',
    e: 'There is a temporary problem.',
  };

  return <ErrorCommon message={messageError} />;
};

export default React.memo(ErrorPage);

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
// 500 Error

// **pages/_error.js** is only used in production.
// In development you’ll get an error with the call stack to know where the error originated from.
