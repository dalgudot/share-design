import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../lib/functions/visits-and-views';
import styled from 'styled-components';
import { useArvAmplitude } from '../../lib/hooks/Amplitude/useArvAmplitude';

const ProductIndex = () => {
  // useArvAmplitude('arv_product');
  useEffect(() => {
    VisitsAndViewsDuringSession('Product');
  }, []);

  return <></>;
};

export default ProductIndex;
