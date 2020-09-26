import PropTypes from "prop-types";
import Head from "next/head";

const HeadInfo = ({ title, icoImage, description, url, thumbnail }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={icoImage} />
      <meta name="author" content="KyungHwan Kim" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="김경환, 디자인, 디자이너, kyunghwan kim, khk,  design, designer, UI, UX, product design, 20대를 남기다"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={thumbnail} />
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
