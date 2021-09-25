import { useRouter } from 'next/router';
import IconAppleLogo24 from '../../../foundation/svg/icon_logo_apple_24';
import { useUserAgent, withUserAgent } from 'next-useragent';
import { GetServerSideProps } from 'next';
import Go from './article-go';

// https://stackoverflow.com/questions/56457935/typescript-error-property-x-does-not-exist-on-type-window
// This is solution of webkit error in typescript
// declare global {
//   interface Window {
//     webkit: any;
//   }
// }

const ArticleDownloadAPP = ({ ua }: { ua?: any }) => {
  const router = useRouter();
  const locale = router.locale;
  const appStoreURL: string =
    locale === 'ko'
      ? 'https://apps.apple.com/kr/app/%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B0/id1557230065'
      : 'https://apps.apple.com/kr/app/share-design/id1557230065?l=en';

  const { isAndroid } = ua;

  return (
    <>
      {/* 안드로이드 폰인 경우 앱 다운로드 빼기, 추후 iOS 앱인 경우도 빼기  */}
      {isAndroid === false && (
        <>
          <Go
            targetBlank={true}
            href={appStoreURL}
            text={{
              k: 'iOS 앱 다운받기',
              e: 'Download the iOS app',
            }}
            marginTopDesktop="144px"
            marginTopMobile="120px"
          >
            <IconAppleLogo24 />
          </Go>
        </>
      )}
    </>
  );
};

export default withUserAgent(ArticleDownloadAPP);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const ua = useUserAgent(context.req.headers['user-agent']);

  return {
    props: { ua },
  };
};
