import Article from '../../../../components/pages-components/article/article';
import { productDesign1 } from '../../../../data/article/product-design/product-design-1';
import { useArvAmplitude } from '../../../../lib/hooks/Amplitude/useArvAmplitude';

const ProductDesign1 = () => {
  // useArvAmplitude('arv_product_design_1');
  return (
    <>
      <Article //
        categoryTitle={productDesign1().category}
        date={productDesign1().date}
        dateTime={productDesign1().dateTime}
        articleTitle={productDesign1().title}
        contentsArray={productDesign1().contents}
        referencesData={productDesign1().references}
      />
    </>
  );
};

export default ProductDesign1;
