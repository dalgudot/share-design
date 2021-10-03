import { useRouter } from 'next/router';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../../../styles/common';
import ShareToolButton from './share-tool-button';

const ArticleToolBar = () => {
  const router = useRouter();
  const isIntroduction = router.pathname === '/introduction';

  return (
    <>
      {/* Container는 버튼 여러 개 될 것을 대비한 것 */}
      {!isIntroduction && (
        <>
          <ArticleToolBarContainer>
            <ShareToolButton />
          </ArticleToolBarContainer>
          <ArticleToolBarSafeArea />
        </>
      )}
    </>
  );
};

export default ArticleToolBar;

const ArticleToolBarContainer = styled.div`
  margin-bottom: calc(env(safe-area-inset-bottom));
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
  background-color: ${({ theme }) => theme.gray9};

  // 바뀌는 요소
  height: ${({ theme }) => theme.height.DesktopBarHeight};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: ${({ theme }) => theme.height.MobileBarHeight};
  }
`;

const ArticleToolBarSafeArea = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.BarSafeArea};
  background-color: ${({ theme }) => theme.gray9};
  height: 56px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 48px;
  }
`;
