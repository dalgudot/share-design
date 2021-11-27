import { brunch1 } from './brunch/brunch-1';
import { brunch2 } from './brunch/brunch-2';
import { brunch3 } from './brunch/brunch-3';
import { brunch4 } from './brunch/brunch-4';
import { brunch5 } from './brunch/brunch-5';
import { brunch6 } from './brunch/brunch-6';
import { brunch7 } from './brunch/brunch-7';
import { brunch8 } from './brunch/brunch-8';
import { brunch9 } from './brunch/brunch-9';
import { brunch10 } from './brunch/brunch-10';
import { ListType } from '../../components/pages-components/index/list';
import { productDesign1 } from './product-design/product-design-1';
import { uiUxDesign1 } from './ui-ux-design/ui-ux-design-1';
import { uiUxDesign2 } from './ui-ux-design/ui-ux-design-2';

export const returnArticleData = (): ListType[] => {
  return [
    // {
    //   url: productDesign1().url,
    //   category: productDesign1().category,
    //   date: productDesign1().date,
    //   dateTime: productDesign1().dateTime,
    //   title: productDesign1().title,
    //   hashTags: productDesign1().hashTags,
    // },
    {
      type: uiUxDesign2().type as 'share-design' | 'brunch',
      url: uiUxDesign2().url,
      category: uiUxDesign2().category,
      date: uiUxDesign2().date,
      dateTime: uiUxDesign2().dateTime,
      title: uiUxDesign2().title,
      hashTags: uiUxDesign2().hashTags,
    },
    {
      type: uiUxDesign1().type as 'share-design' | 'brunch',
      url: uiUxDesign1().url,
      category: uiUxDesign1().category,
      date: uiUxDesign1().date,
      dateTime: uiUxDesign1().dateTime,
      title: uiUxDesign1().title,
      hashTags: uiUxDesign1().hashTags,
    },
    {
      type: brunch10().type as 'share-design' | 'brunch',
      url: brunch10().url,
      category: brunch10().category,
      date: brunch10().date,
      dateTime: brunch10().dateTime,
      title: brunch10().title,
      hashTags: brunch10().hashTags,
    },
    {
      type: brunch9().type as 'share-design' | 'brunch',
      url: brunch9().url,
      category: brunch9().category,
      date: brunch9().date,
      dateTime: brunch9().dateTime,
      title: brunch9().title,
      hashTags: brunch9().hashTags,
    },
    {
      type: brunch8().type as 'share-design' | 'brunch',
      url: brunch8().url,
      category: brunch8().category,
      date: brunch8().date,
      dateTime: brunch8().dateTime,
      title: brunch8().title,
      hashTags: brunch8().hashTags,
    },
    {
      type: brunch7().type as 'share-design' | 'brunch',
      url: brunch7().url,
      category: brunch7().category,
      date: brunch7().date,
      dateTime: brunch7().dateTime,
      title: brunch7().title,
      hashTags: brunch7().hashTags,
    },
    {
      type: brunch6().type as 'share-design' | 'brunch',
      url: brunch6().url,
      category: brunch6().category,
      date: brunch6().date,
      dateTime: brunch6().dateTime,
      title: brunch6().title,
      hashTags: brunch6().hashTags,
    },
    {
      type: brunch5().type as 'share-design' | 'brunch',
      url: brunch5().url,
      category: brunch5().category,
      date: brunch5().date,
      dateTime: brunch5().dateTime,
      title: brunch5().title,
      hashTags: brunch5().hashTags,
    },
    {
      type: brunch4().type as 'share-design' | 'brunch',
      url: brunch4().url,
      category: brunch4().category,
      date: brunch4().date,
      dateTime: brunch4().dateTime,
      title: brunch4().title,
      hashTags: brunch4().hashTags,
    },
    {
      type: brunch3().type as 'share-design' | 'brunch',
      url: brunch3().url,
      category: brunch3().category,
      date: brunch3().date,
      dateTime: brunch3().dateTime,
      title: brunch3().title,
      hashTags: brunch3().hashTags,
    },
    {
      type: brunch2().type as 'share-design' | 'brunch',
      url: brunch2().url,
      category: brunch2().category,
      date: brunch2().date,
      dateTime: brunch2().dateTime,
      title: brunch2().title,
      hashTags: brunch2().hashTags,
    },
    {
      type: brunch1().type as 'share-design' | 'brunch',
      url: brunch1().url,
      category: brunch1().category,
      date: brunch1().date,
      dateTime: brunch1().dateTime,
      title: brunch1().title,
      hashTags: brunch1().hashTags,
    },
  ];
};
