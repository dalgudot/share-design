import Article from '../../../../components/pages-components/article/article';
import { productDesign1 } from '../../../../data/article/product-design/product-design-1';

const ProductDesign1 = ({ showToast }: { showToast: Function }) => {
  return (
    <>
      <Article //
        categoryTitle={productDesign1().category}
        date={productDesign1().date}
        dateTime={productDesign1().dateTime}
        articleTitle={productDesign1().title}
        contentsArray={productDesign1().contents}
        referencesData={productDesign1().references}
        showToast={showToast}
      />
    </>
  );
};

export default ProductDesign1;
