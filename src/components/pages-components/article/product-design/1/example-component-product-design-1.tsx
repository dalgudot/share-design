import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { tType } from '../../../../../../type';
import LangChangeButton from '../../ui-ux-design/1/lang-change-button';
import { uiUxDesign1 } from '../../../../../data/article/ui-ux-design/ui-ux-design-1';
import ArticleExampleComponent from '../../article-example-component';
import LangChangeToggleArticle1 from '../../ui-ux-design/1/lang-change-toggle-article-1';
import { mediaBreakPoint } from '../../../../../styles/common';
import { motion } from 'framer-motion';
import PMedium from '../../../../../foundation/typography/p-medium';

const ExampleComponentProductDesign1 = ({
  component_key,
  caption,
}: {
  component_key: string;
  caption?: tType;
}) => {
  const ArticleExampleComponentChildren = (component_key: string) => {
    switch (component_key) {
      case '1':
        return (
          <>
            <MotionBtnPaletteCopy
            // variants={buttonVariants}
            // whileHover="whileHover"
            // whileTap="whileTap"
            >
              <PMedium
                text="여기부터 시작"
                color="gray2"
                weight={700}
                // lineHeight={{ desktop: '28px', mobile: '23px' }}
              />
            </MotionBtnPaletteCopy>
          </>
        );
      case '2':
        return <> </>;
      default:
        return <> </>;
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

export default ExampleComponentProductDesign1;

const MotionBtnPaletteCopy = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.gray7};
  padding: 18px 28px;
  border-radius: 23px;

  margin-top: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    border-radius: 21px;
    margin-top: 28px;
  }
`;
