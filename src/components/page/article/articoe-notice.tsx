import { useRouter } from 'next/router';
import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/t-article-common';
import IconAppleLogo24 from '../../../elements/svg/icon_logo_apple_24';
import IconInstagramLogo24 from '../../../elements/svg/icon_logo_instagram_24';
import PMedium700 from '../../../elements/typography/p-medium-700';
import PSmall400 from '../../../elements/typography/p-small-400';
import { mediaBreakPoint } from '../../../styles/common';
import { useUserAgent, withUserAgent } from 'next-useragent';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

// https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window
// webkit 에러 해결
declare global {
  interface Window {
    webkit: any;
  }
}

const ArticleNotice = ({ ua }: { ua?: any }) => {
  const router = useRouter();
  const locale = router.locale;
  const appStoreURL: string =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0/id1557230065'
      : 'https://apps.apple.com/kr/app/share-design/id1557230065?l=en';

  // console.log([ua.isMobile, ua.isIos]);
  console.log(ua);
  const { isMobile, isAndroid, isIos, isIpad, isIphone, isTablet, os } = ua;

  console.log(isIpad);

  // const isIosMobileApp =
  //   !!window?.webkit?.messageHandlers?.IOS && isIos && isMobile;
  // console.log(isIosMobileApp);

  return (
    <Container>
      {/* 안드로이드 폰인 경우 앱 다운로드 빼기, 추후 iOS 앱인 경우도 빼기  */}
      {isAndroid === false && (
        <A href={appStoreURL} target="_blank">
          <Title>
            <Left>
              <IconAppleLogo24 />
              <PMedium700
                text={tArticleCommon().articleNotice.iOSAPPDownload}
                color="gray1"
              />
            </Left>
            <PMedium700 text={tArticleCommon().chevronRight} color="gray1" />
          </Title>
          <PSmall400
            text={tArticleCommon().articleNotice.iOSAPPDownloadContents[0]}
            color="gray3"
            marginTop="16px"
          />
          <PSmall400
            text={tArticleCommon().articleNotice.iOSAPPDownloadContents[1]}
            color="gray3"
          />
        </A>
      )}

      {/* iOS or iPad인 경우 인스타그램 알림 빼기 */}
      {isIos === false && (
        <A href="https://www.instagram.com/dalgu_dot/" target="_blank">
          <Title>
            <Left>
              <IconInstagramLogo24 />
              <PMedium700
                text={tArticleCommon().articleNotice.newNotification}
                color="gray1"
              />
            </Left>
            <PMedium700 text={tArticleCommon().chevronRight} color="gray1" />
          </Title>
          <PSmall400
            text={tArticleCommon().articleNotice.newNotificationContents[0]}
            color="gray3"
            marginTop="16px"
          />
          <PSmall400
            text={tArticleCommon().articleNotice.newNotificationContents[1]}
            color="gray3"
          />
        </A>
      )}
    </Container>
  );
};

export default withUserAgent(ArticleNotice);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const ua = useUserAgent(context.req.headers['user-agent']);

  return {
    props: { ua },
  };
};

const A = styled.a`
  padding: 32px 0;
  border-top: solid 1px ${({ theme }) => theme.gray6};
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px; // 시각 보정
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${({ theme }) => theme.gray6};

  margin-top: 120px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 72px;
  }
`;
