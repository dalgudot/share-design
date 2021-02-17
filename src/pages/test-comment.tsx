import styled from 'styled-components';
import Comment from '../components/page/article/comment';
import { mediaBreakPoint } from '../styles/common';

const Test = () => {
  return (
    <>
      <Main>
        <Comment />
      </Main>
    </>
  );
};

export default Test;

const Main = styled.main`
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
