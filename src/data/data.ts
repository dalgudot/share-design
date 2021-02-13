import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { tArticle } from './article/t-article';

export const categoryData = () => {
  const themeContext = useContext(ThemeContext);
  return [
    {
      // 인터랙션 디자인 가이드 리스트 URL, 카테고리 제목, 배경 색
      url: 'interactionDesignGuide', // Home 목록에서 쓰이는 고정 url
      title: tArticle.interactionDesignGuide.title,
      backgroundGradient: themeContext.gradientPurple,
      // 배열로 받아서 리스트 만들기
      articleList: tArticle.interactionDesignGuide.articleList,
    },
    {
      // 이커머스 디자인 가이드 리스트 URL, 카테고리 제목, 배경 색
      url: 'eCommerceDesignGuide', // Home 목록에서 쓰이는 고정 url
      title: tArticle.eCommerceDesignGuide.title,
      backgroundGradient: themeContext.gradientBurgundy,
      // 배열로 받아서 리스트 만들기
      articleList: tArticle.eCommerceDesignGuide.articleList,
    },
  ];
};
