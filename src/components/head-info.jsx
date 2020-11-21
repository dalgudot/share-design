import PropTypes from 'prop-types';
import Head from 'next/head';

const HeadInfo = ({ info }) => {
  HeadInfo.propTypes = {
    title: PropTypes.string,
    icoImage: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    thumbnail: PropTypes.string,
  };

  return (
    <Head>
      {/* 모바일 대응 meta tag */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />

      <title>{info.title}</title>
      <link rel="icon" href={info.icoImage} />
      <meta name="author" content="KyungHwan Kim" />
      <meta name="description" content={info.description} />
      <meta
        name="keywords"
        content="김경환, 디자인, 디자이너, kyunghwan kim, khk,  design, designer, UI, UX, product design, 20대를 남기다"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={info.title} />
      <meta property="og:description" content={info.description} />
      <meta property="og:url" content={info.url} />
      <meta property="og:image" content={info.thumbnail} />

      {/* S of fonts preload */}
      {/* <link rel="stylesheet" href="../styles/font.css" /> */}
      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans Bold.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans Regular.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans Regular.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans Thin.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/Spoqa Han Sans light.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-100.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-300.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-regular.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />

      <link
        rel="preload"
        href="/fonts/roboto-v20-latin-700.woff2"
        as="font"
        type="font/woff2"
        crossorigin="anonymous"
      />
      {/* E of fonts preload */}
    </Head>
  );
};

export default HeadInfo;

// [Ref] https://github.com/vercel/next.js/blob/canary/examples/layout-component/components/layout.js
