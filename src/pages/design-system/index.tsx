import { useEffect } from 'react';
import { visitsAndViewsDuringSession } from '../../lib/functions/visits-and-views';

const DesignSystemtIndex = () => {
  useEffect(() => {
    visitsAndViewsDuringSession('Design System');
  }, []);

  return <></>;
};

export default DesignSystemtIndex;
