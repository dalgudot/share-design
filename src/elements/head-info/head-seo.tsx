import Head from 'next/head';
import { NextRouter, useRouter } from 'next/router';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { interactionDesignGuideOneInfo } from './article/interactionDesignGuide/1-info';
import { indexInfo } from './index/index-info';
import { introductionInfo } from './index/introduction-info';

const HeadSEO = () => {
  const router: NextRouter = useRouter();
  const pathname: string = router.pathname;

  const infoSwitch = () => {
    switch (pathname) {
      case '/':
        return indexInfo;
      case '/introduction':
        return introductionInfo;
      case '/article/interactionDesignGuide/1':
        return interactionDesignGuideOneInfo;
      default:
        return indexInfo;
    }
  };
  const info = infoSwitch();

  return (
    <Head>
      <link rel="alternate" hrefLang="x-default" href={info.url.k} />
      <link rel="alternate" hrefLang="en" href={info.url.e} />

      {/* 모바일 대응 meta tag */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      {/* Google Search Console URL 접두어, 소유권 확인 */}
      <meta
        name="google-site-verification"
        content="nxhLllcTErNmik8JUCWy7Wp4n6qaJo3fAkayzI4I2zc"
      />

      <title>{useSetLanguage(info.title)}</title>
      <meta name="author" content={useSetLanguage(info.author)} />
      <meta name="description" content={useSetLanguage(info.description)} />
      <meta name="keywords" content={useSetLanguage(info.keywords)} />

      <meta property="og:url" content={useSetLanguage(info.url)} />
      <meta property="og:title" content={useSetLanguage(info.title)} />
      <meta
        property="og:description"
        content={useSetLanguage(info.description)}
      />
      <meta property="og:image" content={useSetLanguage(info.thumbnail)} />
      <meta property="og:type" content={useSetLanguage(info.type)} />
      {/* <meta property="og:locale" content={info.locale} /> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={useSetLanguage(info.url)} />
      <meta name="twitter:title" content={useSetLanguage(info.title)} />
      <meta
        name="twitter:description"
        content={useSetLanguage(info.description)}
      />
      <meta name="twitter:image" content={useSetLanguage(info.thumbnail)} />

      <link rel="icon" href={useSetLanguage(info.icoImage)} />

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
