import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { tArticleCommon } from './article/t-article-common';

export const categoryData = () => {
  const themeContext = useContext(ThemeContext);
  return [
    {
      // 인터랙션 디자인 가이드 리스트 URL, 카테고리 제목, 배경 색
      url: 'interactionDesignGuide', // Home 목록에서 쓰이는 고정 url
      smallTitle: tArticleCommon.interactionDesignGuide.smallTitle,
      title: tArticleCommon.interactionDesignGuide.title,
      backgroundGradient: themeContext.gradientPurple,
      // 배열로 받아서 리스트 만들기
      articleList: tArticleCommon.interactionDesignGuide.articleList,
    },
    {
      // 이커머스 디자인 가이드 리스트 URL, 카테고리 제목, 배경 색
      url: 'eCommerceDesignGuide', // Home 목록에서 쓰이는 고정 url
      smallTitle: tArticleCommon.eCommerceDesignGuide.smallTitle,
      title: tArticleCommon.eCommerceDesignGuide.title,
      backgroundGradient: themeContext.gradientBurgundy,
      // 배열로 받아서 리스트 만들기
      articleList: tArticleCommon.eCommerceDesignGuide.articleList,
    },
  ];
};
