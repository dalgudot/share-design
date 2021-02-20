import { eCommerceDesignGuideList } from './list/eCommerceDesignGuideList';
import { interactionDesignGuideList } from './list/interactionDesignGuideList';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { tArticleCommon } from './article/t-article-common';

export const categoryData = () => {
  const themeContext = useContext(ThemeContext);
  return [
    {
      // 인터랙션 디자인 가이드 리스트 URL, 카테고리 제목, 배경 색
      url: 'interactionDesignGuide', // Home 목록에서 쓰이는 고정 url
      categoryTitleArray: interactionDesignGuideList().categoryTitleArray,
      categoryTitle: interactionDesignGuideList().categoryTitle,
      backgroundGradient: themeContext.gradientPurple,
      // 배열로 받아서 리스트 만들기
      articleList: interactionDesignGuideList().articleList,
    },
    {
      // 이커머스 디자인 가이드 리스트 URL, 카테고리 제목, 배경 색
      url: 'eCommerceDesignGuide', // Home 목록에서 쓰이는 고정 url
      categoryTitleArray: eCommerceDesignGuideList().categoryTitleArray,
      categoryTitle: eCommerceDesignGuideList().categoryTitle,
      backgroundGradient: themeContext.gradientBurgundy,
      // 배열로 받아서 리스트 만들기
      articleList: eCommerceDesignGuideList().articleList,
    },
  ];
};
