import styled from 'styled-components';
import { t } from '../data/index/t';
import PLarge from '../foundation/typography/p-medium';
import { useArvAmplitude } from '../library/hooks/Amplitude/useArvAmplitude';

const Privacy = () => {
  useArvAmplitude('arv_privacy');
  return (
    <Container>
      <PLarge text={t.privacyMessage} color="gray3" />
    </Container>
  );
};

export default Privacy;

const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  max-width: 280px;
`;
