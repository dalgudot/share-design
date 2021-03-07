import { uiUxDesign } from './article/ui-ux-design/1';

export const articleData = () => {
  return [
    {
      url: uiUxDesign().url,
      category: uiUxDesign().category,
      date: uiUxDesign().date,
      title: uiUxDesign().title,
      summary: uiUxDesign().summary,
    },
    // 추후 추가
  ];
};
