import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaBreakPoint } from '../../../styles/common';
import IconShare24 from '../../../elements/svg/icon_share_24';

const ArticleToolBar = () => {
  return (
    <>
      {/* Container는 버튼 여러 개 될 것을 대비한 것 */}
      <ArticleToolBarContainer>
        <ShareToolButton>
          <IconShare24 />
        </ShareToolButton>
      </ArticleToolBarContainer>
      <FillEmptySpace />
    </>
  );
};

export default ArticleToolBar;

const ArticleToolBarContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex.bar};
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  // 임시
  width: 100vw;
  height: 48px;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: solid 1px ${({ theme }) => theme.gray7};
  background-color: ${({ theme }) => theme.gray8};
  // 임시

  @media all and (max-width: ${mediaBreakPoint.first}) {
    /* justify-content: space-evenly; */
    width: 100vw;
    height: 48px;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: solid 1px ${({ theme }) => theme.gray7};
    background-color: ${({ theme }) => theme.gray8};
  }
`;

const ShareToolButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FillEmptySpace = styled.div`
  // 바뀌는 속성
  /* height: 80px; // 72 + 8px */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    position: fixed;
    z-index: ${({ theme }) => theme.zIndex.barFillEmptySpace};
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 56px; // 48 + 8px
    background-color: ${({ theme }) => theme.gray8};
  }
`;
