import styled from 'styled-components';
import WaveLoading from '../../components/canvas-components/wave-loading/wave-loading';

// SVG 배경도 함께 Test한 Page
const WaveTest = () => {
  return (
    <>
      <Div />
      <WaveLoading />
      {/* https://css-tricks.com/creating-patterns-with-svg-filters/ */}
      <SVG xmlns="http://www.w3.org/2000/svg">
        <filter id="noise__filter">
          <feTurbulence //
            baseFrequency={1}
            // type="fractalNoise"
            // numOctaves="2"
          />
          <feColorMatrix
            values="0 0 0 9 -4
                    0 0 0 9 -4
                    0 0 0 9 -4
                    0 0 0 0 1"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise__filter)" />
      </SVG>
    </>
  );
};

export default WaveTest;

const Div = styled.div`
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  margin: 200px auto 0;
  border-radius: 50%;
  opacity: 0.5;
`;

const SVG = styled.svg`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  z-index: -100;
`;
