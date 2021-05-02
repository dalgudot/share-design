import React from 'react';
import ErrorCommon from '../components/page/error/error-common';
import { useArvAmplitude } from '../library/hooks/Amplitude/useArvAmplitude';

// NextJS Custom Error Page
// https://nextjs.org/docs/advanced-features/custom-error-page
const Error404Page = () => {
  useArvAmplitude('arv_error404page');
  return <ErrorCommon />;
};

export default React.memo(Error404Page);
