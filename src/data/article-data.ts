import { uiUxDesign1 } from './article/ui-ux-design/1';
import { uiUxDesign2 } from './article/ui-ux-design/2';

export const articleData = () => {
  return [
    {
      url: uiUxDesign1().url,
      category: uiUxDesign1().category,
      date: uiUxDesign1().date,
      dateTime: uiUxDesign1().dateTime,
      title: uiUxDesign1().title,
      summary: uiUxDesign1().summary,
    },
    {
      url: uiUxDesign2().url,
      category: uiUxDesign2().category,
      date: uiUxDesign2().date,
      dateTime: uiUxDesign2().dateTime,
      title: uiUxDesign2().title,
      summary: uiUxDesign2().summary,
    },
  ];
};
