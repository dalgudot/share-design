import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const HeadSEO = ({ info }: any) => {
  const router = useRouter();

  return (
    <Head>
      <link rel="alternate" hrefLang="x-default" href={info.url.e} />
      <link rel="alternate" hrefLang="ko" href={info.url.k} />

      {/* 모바일 대응 meta tag */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      {/* <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" /> */}

      <title>{useSetLanguage(info.title)}</title>
      <link rel="icon" href={useSetLanguage(info.icoImage)} />
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
      {/* S of Image preload 
      index에서만 쓰이지 않는 이미지이므로 index 제외한 모든 페이지에서만 preload */}
      {router.pathname !== '/' && (
        <>
          <link
            rel="preload"
            href="/images/profile-photo.jpg"
            as="image"
            type="image/jpg"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/images/profile-photo@2x.jpg"
            as="image"
            type="image/jpg"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/images/profile-photo@3x.jpg"
            as="image"
            type="image/jpg"
            crossOrigin="anonymous"
          />
        </>
      )}
      {/* E of Image preload */}
    </Head>
  );
};

export default HeadSEO;
