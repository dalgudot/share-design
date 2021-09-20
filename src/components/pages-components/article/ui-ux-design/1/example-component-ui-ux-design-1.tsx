import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { tType } from '../../../../../../type';
import LangChangeButton from './lang-change-button';
import { uiUxDesign1 } from '../../../../../data/article/ui-ux-design/ui-ux-design-1';
import ArticleExampleComponent from '../../article-example-component';
import LangChangeToggleArticle1 from './lang-change-toggle-article-1';
import { mediaBreakPoint } from '../../../../../styles/common';

const ExampleComponentUiUxDesign1 = ({
  component_key,
  caption,
}: {
  component_key: string;
  caption?: tType;
}) => {
  const router = useRouter();
  const locale = router.locale;

  // 본문에 있는 첫 번째 언어 전환 토글 버튼과 두 번째 언어 전환 토글 버튼 눌렀을 때 스크롤 유지
  const firstTogglePositionRef = useRef<HTMLDivElement>(null);
  const finalTogglePositionRef = useRef<HTMLDivElement>(null);
  const [firstToggle, setfirstToggle] = useState(false);
  const [finalToggle, setFinalToggle] = useState(false);

  const gotoFirstRefAfterLocaleChange = () => {
    firstTogglePositionRef?.current?.scrollIntoView();
  };

  const gotoFinalRefAfterLocaleChange = () => {
    finalTogglePositionRef?.current?.scrollIntoView();
  };

  useEffect(() => {
    if (firstToggle === true) {
      gotoFirstRefAfterLocaleChange();
      setfirstToggle(false);
    }
  }, [locale]);

  useEffect(() => {
    if (finalToggle === true) {
      finalToggle === true && gotoFinalRefAfterLocaleChange();
      setFinalToggle(false);
    }
  }, [locale]);

  const ArticleExampleComponentChildren = (component_key: string) => {
    switch (component_key) {
      case '1':
        return (
          <LangChangeButton
            setfirstToggle={setfirstToggle}
            text={uiUxDesign1().langChangeButton}
          />
        );
      case '2':
        return (
          <WrapLangchangeToggleArticle1>
            <LangChangeToggleArticle1 setFinalToggle={setFinalToggle} />
          </WrapLangchangeToggleArticle1>
        );
      default:
        return;
    }
  };

  const exampleComponent = (component_key: string) => {
    return (
      <ArticleExampleComponent caption={caption}>
        {ArticleExampleComponentChildren(component_key) as JSX.Element}
      </ArticleExampleComponent>
    );
  };

  return <>{exampleComponent(component_key)}</>;
};

export default ExampleComponentUiUxDesign1;

const WrapLangchangeToggleArticle1 = styled.div`
  display: flex;
  justify-content: center;

  // 바뀌는 속성
  margin-right: 28px; // 중앙으로 보이도록 시각 보정

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-right: 20px; // 중앙으로 보이도록 시각 보정
  }
`;
