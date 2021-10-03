import { useEffect } from 'react';
import { visitsAndViewsDuringSession } from '../../lib/functions/visits-and-views';

const ProductIndex = () => {
  useEffect(() => {
    visitsAndViewsDuringSession('Product');
  }, []);

  return <></>;
};

export default ProductIndex;
