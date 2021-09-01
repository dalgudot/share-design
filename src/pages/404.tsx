import React from 'react';
import ErrorCommon from '../components/pages-components/error/error-common';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
const Error404Page = () => {
  return <ErrorCommon />;
};

export default React.memo(Error404Page);
