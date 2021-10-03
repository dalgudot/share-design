import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../lib/functions/visits-and-views';

const ProductIndex = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Product');
  }, []);

  return <></>;
};

export default ProductIndex;
