import styled from 'styled-components';
import Profile from './profile';
import H1Title700 from '../../../elements/typography/h1-title-700';
import H6Title700 from '../../../elements/typography/h6-title-700';
import PSmall700 from '../../../elements/typography/p-small-700';

const ArticleTitleArea = ({
  categoryTitle,
  articleTitle,
}: {
  categoryTitle?: object;
  articleTitle: object;
}) => {
  return (
    <TitleArea>
      {categoryTitle && (
        <PSmall700 //
          text={categoryTitle}
          color="gray4"
        />
      )}
      <H1Title700 //
        text={articleTitle}
        color="gray1"
        marginTop="4px"
      />
      <Profile marginTop="12px" />
    </TitleArea>
  );
};

export default ArticleTitleArea;

const TitleArea = styled.div`
  p {
    margin-left: 2px; // smallTitle 시각 보정
  }
`;
