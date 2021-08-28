import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';
import { responseInfo } from './article/response';
import { uiUxDesign1Info } from './article/ui-ux-design/1-info';
import { uiUxDesign2Info } from './article/ui-ux-design/2-info';
import { contactInfo } from './index/contact-info';
import { indexInfo } from './index/index-info';
import { aboutInfo } from './index/about-info';

const HeadSEO = () => {
  const router = useRouter();
  const pathname: string = router.pathname;

  const infoSwitch = () => {
    switch (pathname) {
      case '/':
        return indexInfo;
      case '/contact':
        return contactInfo;
      case '/about':
        return aboutInfo;
      case '/article/ui-ux-design/1':
        return uiUxDesign1Info;
      case '/article/ui-ux-design/2':
        return uiUxDesign2Info;
      case '/article/[category]/[id]/write-response':
        return responseInfo;
      default:
        return indexInfo;
    }
  };
  const info = infoSwitch();

  // 공통 요소들
  const icoImage = '/share-design.ico';

  const author = {
    k: '김경환',
    e: 'KyungHwan Kim',
  };

  const keywords = {
    k: '김경환, 디자인 공유하기, 디자인, 디자이너, UI, UX, UI 디자인, UX 디자인, UI/UX 디자인, 프로덕트 디자인, 디지털 프로덕트 디자인, IxD 디자인, 인터랙션 디자인, 디자인 포트폴리오, 웹 포트폴리오, 포트폴리오 웹 사이트, UI 디자인 포트폴리오, UX 디자인 포트폴리오, UI/UX 디자인 포트폴리오, 프로덕트 디자인 포트폴리오, 디지털 프로덕트 디자인 포트폴리오',
    e: 'KyungHwan Kim, SHARE DESIGN, Share Design, Design, Designer, UI Design, UX Design, UI/UX Design, Product Design, Digital Product Design, IxD Design, Interaction Design, Design Portfolio, Web Portfolio, Portfolio Web Site, UI Design Portfolio, UX Design Portfolio, UI/UX Design portfolio, Product Design Portfolio, Digital Product Design Portfolio',
  };
  // 공통 요소들

  return (
    <Head>
      <link rel="alternate" hrefLang="x-default" href={info.url.k} />
      <link rel="alternate" hrefLang="en" href={info.url.e} />

      {/* 모바일 대응 meta tag */}
      {/* <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      /> */}

      {/* 모바일 대응 meta tag, viewport-fit=cover 는 아이폰 Safe-Area 대응 가능*/}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
      />

      {/* Google Search Console URL 접두어, 소유권 확인 */}
      <meta
        name="google-site-verification"
        content="nxhLllcTErNmik8JUCWy7Wp4n6qaJo3fAkayzI4I2zc"
      />

      {/* 네이버 서치어드바이저 사이트 소유 확인 */}
      <meta
        name="naver-site-verification"
        content="b76a6acf796165dd21c2cac5a49675397ce9386c"
      />

      <meta charSet="utf-8" />

      <title>{useSetLanguage(info.title)}</title>
      <meta name="author" content={useSetLanguage(author)} />
      <meta name="description" content={useSetLanguage(info.description)} />
      <meta name="keywords" content={useSetLanguage(keywords)} />

      <meta property="og:url" content={useSetLanguage(info.url)} />
      <meta property="og:title" content={useSetLanguage(info.title)} />
      <meta
        property="og:description"
        content={useSetLanguage(info.description)}
      />
      <meta property="og:image" content={useSetLanguage(info.thumbnail)} />
      {/* 페이북 권장 사이즈 1200 : 630 = 1.9 : 1(약) */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={info.type} />
      {/* locale은 ko_KR라는 형식 맞춰야 함*/}
      {/* <meta property="og:locale" content="ko_KR" />
      <meta property="og:locale:alternate" content="en_US" /> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={useSetLanguage(info.url)} />
      <meta name="twitter:title" content={useSetLanguage(info.title)} />
      <meta
        name="twitter:description"
        content={useSetLanguage(info.description)}
      />
      <meta name="twitter:image" content={useSetLanguage(info.thumbnail)} />

      <link rel="icon" href={icoImage} />

      {/* Google AdSense */}
      {/* <script
        data-ad-client="ca-pub-8444228904401312"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script> */}

      {/* S of fonts preload */}
      {/* <link rel="stylesheet" href="../styles/font.css" /> */}
      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans Light.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans Thin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-300.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-100.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* E of fonts preload */}
      {/* S of Image preload */}
      {pathname !== '/' && (
        <>
          <link
            rel="preload"
            href="/images/profile-photo@3x.jpg"
            as="image"
            type="image/jpg"
          />
        </>
      )}

      {pathname === '/contact' && (
        <>
          <link
            rel="preload"
            href="/images/icon-contact-brunch@3x.png"
            as="image"
            type="image/png"
          />
        </>
      )}
      {/* E of Image preload */}
    </Head>
  );
};

export default HeadSEO;
