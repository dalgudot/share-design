import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import ShareToolButton from '../article/article-tool-bar/share-tool-button';

// 768 이상일 때 홈에서만 보이는 툴 바
// Mobile에서는 하단에 TabBar가 있어서 숨겨야 함.
const ShareToolBar = () => {
  return (
    <>
      <ShareToolBarContainer>
        <ShareToolButton />
      </ShareToolBarContainer>
      <FillEmptySpace />
    </>
  );
};

export default ShareToolBar;

const ShareToolBarContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex.Bar};
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  border-top: solid 1px ${({ theme }) => theme.gray7};
  background-color: ${({ theme }) => theme.gray8};

  // iOS bottom safe area
  margin-bottom: calc(env(safe-area-inset-bottom));

  // 바뀌는 요소
  display: flex;
  height: 56px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: none;
    height: 48px;

    // iOS bottom safe area
    margin-bottom: calc(env(safe-area-inset-bottom));
  }
`;

const FillEmptySpace = styled.div`
  // 바뀌는 속성
  /* height: 80px; // 72 + 8px */
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.BarFillEmptySpace};
  /* bottom: -8px; */
  bottom: -42px; // -8 -34
  left: 0;
  width: 100vw;
  // 48 + 8px
  /* height: 56px; */
  height: 90px; // 56 + 34
  background-color: ${({ theme }) => theme.gray8};

  // iOS bottom safe area
  margin-bottom: calc(env(safe-area-inset-bottom));

  @media all and (max-width: ${mediaBreakPoint.first}) {
    display: none;

    // iOS bottom safe area
    margin-bottom: calc(env(safe-area-inset-bottom));
  }
`;
