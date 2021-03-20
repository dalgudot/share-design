import { uiUxDesign1 } from './article/ui-ux-design/1';

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
    // 추후 추가
  ];
};
