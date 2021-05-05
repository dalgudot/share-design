import React from 'react';
import ErrorCommon from '../components/pages/error/error-common';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
// 500 Error
const ErrorPage = ({ statusCode }: any) => {
  statusCode && console.log(statusCode);
  return <ErrorCommon />;
};

export default React.memo(ErrorPage);

ErrorPage.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
