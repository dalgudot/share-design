import styled from 'styled-components';
import { t } from '../data/index/t';
import PLarge from '../foundation/typography/p-medium';

const Privacy = () => {
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
