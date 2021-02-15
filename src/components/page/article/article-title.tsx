import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Profile from './profile';
import H1Title700 from '../../../elements/typography/h1-title-700';
import H6Title700 from '../../../elements/typography/h6-title-700';

const ArticleTitleArea = ({
  categoryTitle,
  articleTitle,
}: {
  categoryTitle?: object;
  articleTitle: object;
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <TitleArea>
      {categoryTitle && (
        <H6Title700 text={categoryTitle} color={themeContext.gray4} />
      )}
      <H1Title700
        text={articleTitle}
        color={themeContext.gray1}
        marginTop="4px"
      />
      <Profile marginTop="12px" />
    </TitleArea>
  );
};

export default ArticleTitleArea;

const TitleArea = styled.div``;
