import PropTypes from 'prop-types';
import styled from 'styled-components';
import H1Text from '../typo/h1';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';

const Article = ({ category, date, title, description }) => {
  Article.propTypes = {
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <ContainerArticle>
      <CategoryDate>
        <PText
          text={category}
          mobileSize={fontSize[14]}
          tabletSize={fontSize[14]}
          desktopSize={fontSize[14]}
          weight={fontWeight[400]}
          lineHeight={1.2}
          color="gray4"
        />
        <DividerTinyVertical />
        <PText
          text={date}
          mobileSize={fontSize[14]}
          tabletSize={fontSize[14]}
          desktopSize={fontSize[14]}
          weight={fontWeight[400]}
          lineHeight={1.2}
          color="gray4"
        />
      </CategoryDate>

      <H1Text
        text={title}
        mobileSize={fontSize[34]}
        tabletSize={fontSize[39]}
        desktopSize={fontSize[39]}
        weight={fontWeight[700]}
        lineHeight={1.2}
        marginTop="6px"
      />

      <PText
        text={description}
        mobileSize={fontSize[17]}
        tabletSize={fontSize[17]}
        desktopSize={fontSize[17]}
        weight={fontWeight[400]}
        lineHeight={1.55}
        color="gray2"
        marginTop="16px"
      />

      <Artwork />
    </ContainerArticle>
  );
};

export default Article;

const ContainerArticle = styled.article`
  max-width: 540px;
  margin: 0 auto;
  padding-top: 168px;

  @media all and (max-width: 768px) {
    padding-top: 144px;
  }
`;

const CategoryDate = styled.section`
  display: flex;
  align-items: center;
  margin-left: 2px;
`;

const DividerTinyVertical = styled.div`
  width: 1px;
  height: 12px;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.5;
  margin: 0 8px;
  margin-top: 2px;
`;

const Artwork = styled.figure`
  min-width: 300px;
  max-width: 540px;
  min-height: 540px;
  background-color: ${({ theme }) => theme.gray5};
  margin-top: 36px;
`;
