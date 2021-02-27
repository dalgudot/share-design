import { designGuide1 } from './article/design-guide/1';

export const articleData = () => {
  return [
    {
      url: designGuide1().url,
      category: designGuide1().category,
      date: designGuide1().date,
      title: designGuide1().title,
      summary: designGuide1().summary,
    },
    // 추후 추가
  ];
};
