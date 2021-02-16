import React from 'react';
import ErrorCommon from '../components/page/error/error-common';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
const Error404Page = () => {
  return <ErrorCommon />;
};

export default React.memo(Error404Page);
