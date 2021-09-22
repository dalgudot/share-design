import styled from 'styled-components';
import { tType } from '../../../../../../type';
import LangChangeButton from './lang-change-button';
import { uiUxDesign1 } from '../../../../../data/article/ui-ux-design/ui-ux-design-1';
import LangChangeToggleArticle1 from './lang-change-toggle-article-1';
import { mediaBreakPoint } from '../../../../../styles/common';
import PMedium from '../../../../../foundation/typography/p-medium';

const ExampleUiUxDesign1 = ({
  component_key,
  caption,
}: {
  component_key: string;
  caption?: tType;
}) => {
  const ArticleExampleComponentChildren = (component_key: string) => {
    switch (component_key) {
      case '1':
        return <LangChangeButton text={uiUxDesign1().langChangeButton} />;
      case '2':
        return (
          <WrapLangchangeToggleArticle1>
            <LangChangeToggleArticle1 />
          </WrapLangchangeToggleArticle1>
        );
      default:
        return;
    }
  };

  const exampleComponent = (component_key: string) => {
    return (
      <Figure>
        {ArticleExampleComponentChildren(component_key) as JSX.Element}
        <figcaption>
          {caption && (
            <PMedium //
              text={caption}
              color="gray4"
              marginTop="16px"
            />
          )}
        </figcaption>
      </Figure>
    );
  };

  return <>{exampleComponent(component_key)}</>;
};

export default ExampleUiUxDesign1;

const Figure = styled.figure`
  margin: 96px auto 60px;
  text-align: center;
  max-width: 420px;
`;

const WrapLangchangeToggleArticle1 = styled.div`
  display: flex;
  justify-content: center;

  // 바뀌는 속성
  margin-right: 28px; // 중앙으로 보이도록 시각 보정

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-right: 20px; // 중앙으로 보이도록 시각 보정
  }
`;
