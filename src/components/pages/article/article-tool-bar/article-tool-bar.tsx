import styled from 'styled-components';
import { mediaBreakPoint } from '../../../../styles/common';
import ShareToolButton from './share-tool-button';

const ArticleToolBar = () => {
  return (
    <>
      {/* Container는 버튼 여러 개 될 것을 대비한 것 */}
      <ArticleToolBarContainer>
        <ShareToolButton />
      </ArticleToolBarContainer>
      <FillEmptySpace />
    </>
  );
};

export default ArticleToolBar;

const ArticleToolBarContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex.Bar};
  display: flex;
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
  height: 56px;

  // iOS bottom safe area
  margin-bottom: calc(env(safe-area-inset-bottom));

  @media all and (max-width: ${mediaBreakPoint.first}) {
    /* justify-content: space-evenly; */
    height: 48px;

    // iOS bottom safe area
    margin-bottom: calc(env(safe-area-inset-bottom));
  }
`;

const FillEmptySpace = styled.div`
  // 바뀌는 속성
  /* height: 80px; // 72 + 8px */

  /* @media all and (max-width: ${mediaBreakPoint.first}) { */
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.BarFillEmptySpace};
  /* bottom: -8px; */
  bottom: -42px; // -8 -34
  left: 0;
  width: 100%;
  // 48 + 8px
  /* height: 56px; */
  height: 90px; // 56 + 34
  background-color: ${({ theme }) => theme.gray8};

  // iOS bottom safe area
  margin-bottom: calc(env(safe-area-inset-bottom));
  /* } */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    /* justify-content: space-evenly; */
    height: 82px; // 48 + 34

    // iOS bottom safe area
    margin-bottom: calc(env(safe-area-inset-bottom));
  }
`;
