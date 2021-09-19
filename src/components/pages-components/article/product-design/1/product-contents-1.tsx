import PLarge from '../../../../../foundation/typography/p-large';
import ArticleCommonImage from '../../article-common-image';

const ProductContents1 = ({
  contentsArray,
}: {
  contentsArray: {
    k: string;
    e: string;
  }[];
}) => {
  return (
    <>
      <PLarge //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />

      <ArticleCommonImage
        src={contentsArray[1]}
        caption={contentsArray[2]}
        marginTop="36px"
      />
    </>
  );
};

export default ProductContents1;
