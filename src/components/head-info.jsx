import PropTypes from "prop-types";
import Head from "next/head";

const HeadInfo = ({ info }) => {
  return (
    <Head>
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
    </Head>
  );
};

export default HeadInfo;

HeadInfo.propTypes = {
  title: PropTypes.string,
  icoImage: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  thumbnail: PropTypes.string,
};

// [Ref] https://github.com/vercel/next.js/blob/canary/examples/layout-component/components/layout.js
