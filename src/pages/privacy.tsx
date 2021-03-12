import styled from 'styled-components';
import { t } from '../data/index/t';
import PMedium400 from '../elements/typography/p-medium-400';
import { mediaBreakPoint } from '../styles/common';

const Privacy = () => {
  return (
    <Container>
      <PMedium400 text={t.privacyMessage} color="gray3" />
    </Container>
  );
};

export default Privacy;

const Container = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  max-width: 280px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: ${({ theme }) => theme.padding.TabletWrap};
  }

  @media all and (min-width: ${mediaBreakPoint.fourth}) {
    padding: ${({ theme }) => theme.padding.DesktopWrap};
  }
`;
