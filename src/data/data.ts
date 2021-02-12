import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { tArticle } from './../components/page/article/text/t-article';

export const categoryData = () => {
  const themeContext = useContext(ThemeContext);
  return [
    {
      // 인터랙션 디자인 가이드
      url: 'interactionDesignGuide',
      title: tArticle.interactionDesignGuide.title,
      background: themeContext.gradientPurple,
      //   article1Date:
      //   article1Title:
      //   article1Summary:
      article1Url: '/article/interactionDesignGuide/1',
    },
    {
      // 이커머스 디자인 가이드
      url: 'eCommerceDesignGuide',
      title: tArticle.eCommerceDesignGuide.title,
      background: themeContext.gradientBurgundy,
      //   article1Date:
      //   article1Title:
      //   article1Summary:
      article1Url: '/article/eCommerceDesignGuide/1',
    },
  ];
};
