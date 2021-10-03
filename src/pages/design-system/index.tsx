import { useEffect } from 'react';
import { VisitsAndViewsDuringSession } from '../../lib/functions/visits-and-views';

const DesignSystemtIndex = () => {
  useEffect(() => {
    VisitsAndViewsDuringSession('Design System');
  }, []);

  return <></>;
};

export default DesignSystemtIndex;
