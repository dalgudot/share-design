import type { NextPage } from 'next';
import { RefObject, useRef } from 'react';
import styled from 'styled-components';
import StageLightingWaveAnimation from '../../../components/canvas-components/stage-lighting-wave-animation/stage-lighting-wave-animation';

import { useClientWidthHeight } from '../../../lib/hooks/useClientWidthHeight';

const Example: NextPage = () => {
  const mainRef: RefObject<HTMLElement> = useRef<HTMLElement>(null);

  const clientRect = useClientWidthHeight(mainRef);
  const canvasWidth = clientRect.width;
  const canvasHeight = clientRect.height;

  return (
    <Main ref={mainRef}>
      <StageLightingWaveAnimation
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
      />
    </Main>
  );
};

export default Example;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;
