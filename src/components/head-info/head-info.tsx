import Head from 'next/head';

const HeadInfo = ({ info }: any) => {
  return (
    <Head>
      {/* 모바일 대응 meta tag */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      {/* <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" /> */}

      <title>{info.title}</title>
      <link rel="icon" href={info.icoImage} />
      <meta name="author" content={info.author} />
      <meta name="description" content={info.description} />
      <meta name="keywords" content={info.keywords} />

      <meta property="og:url" content={info.url} />
      <meta property="og:title" content={info.title} />
      <meta property="og:description" content={info.description} />
      <meta property="og:image" content={info.thumbnail} />
      <meta property="og:type" content={info.type} />
      {/* <meta property="og:locale" content={info.locale} /> */}

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
    </Head>
  );
};

export default HeadInfo;

// [Ref] https://github.com/vercel/next.js/blob/canary/examples/layout-component/components/layout.js
