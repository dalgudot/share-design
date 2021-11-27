import React from 'react';
import ErrorCommon from '../components/pages-components/error/error-common';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
const Error404Page = () => {
  const message404 = {
    k: '디자인 공유하기에 없는 페이지입니다.',
    e: 'This Page is not in SHARE DESIGN.',
  };

  return <ErrorCommon message={message404} />;
};

export default React.memo(Error404Page);
