import { productDesign1 } from './product-design/product-design-1';
import { uiUxDesign1 } from './ui-ux-design/ui-ux-design-1';
import { uiUxDesign2 } from './ui-ux-design/ui-ux-design-2';

export const returnArticleData = () => {
  return [
    {
      url: productDesign1().url,
      category: productDesign1().category,
      date: productDesign1().date,
      dateTime: productDesign1().dateTime,
      title: productDesign1().title,
      hashTags: productDesign1().hashTags,
    },
    {
      url: uiUxDesign2().url,
      category: uiUxDesign2().category,
      date: uiUxDesign2().date,
      dateTime: uiUxDesign2().dateTime,
      title: uiUxDesign2().title,
      hashTags: uiUxDesign2().hashTags,
    },
    {
      url: uiUxDesign1().url,
      category: uiUxDesign1().category,
      date: uiUxDesign1().date,
      dateTime: uiUxDesign1().dateTime,
      title: uiUxDesign1().title,
      hashTags: uiUxDesign1().hashTags,
    },
  ];
};
