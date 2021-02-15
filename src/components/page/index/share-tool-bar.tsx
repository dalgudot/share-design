import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import ShareToolButton from '../article/article-tool-bar/share-button';

// Mobile에서는 이미 하단에 TabBar가 있어서 숨겨야 함.
const ShareToolBar = () => {
  return (
    <>
      <ShareToolBarContainer>
        <ShareToolButton />
      </ShareToolBarContainer>
    </>
  );
};

export default ShareToolBar;

const ShareToolBarContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex.bar};
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  border-top: solid 1px ${({ theme }) => theme.gray7};
  background-color: ${({ theme }) => theme.gray8};

  // 바뀌는 요소
  display: flex;
  height: 56px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: none;
    height: 48px;
  }
`;
