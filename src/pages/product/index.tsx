import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../lib/functions/visits-and-views';
import styled from 'styled-components';

const ProductIndex = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Product');
  }, []);

  return <></>;
};

export default ProductIndex;
