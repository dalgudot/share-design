import styled from 'styled-components';
import { tType } from '../../../../../../type';
import { mediaBreakPoint } from '../../../../../styles/common';
import { motion } from 'framer-motion';
import PMedium from '../../../../../foundation/typography/p-medium';
import { buttonVariants } from '../../../../../foundation/framer-motion/variants';
import H3Title from '../../../../../foundation/typography/h3-title';
import MySyntaxHighlighter from '../../my-syntax-highlighter';
import ArticleLine from '../../article-line';
import Go from '../../go';
import ArticleFigure from '../../article-figure';

const ExampleProductDesign1 = ({
  component_key,
  content,
  caption,
  showToast,
}: {
  component_key: string;
  content: tType;
  caption?: tType;
  showToast?: any;
}) => {
  const buttonText = { k: '버튼', e: 'Button' };

  const ArticleExampleComponentChildren = () => {
    switch (component_key) {
      case '1':
        return (
          <ArticleFigure caption={caption}>
            <>
              <ArticleLine />
              <H3Title
                text={{ k: '버튼의 4가지 상태', e: '4 states of a button' }}
                color="gray2"
              />
              <ExampleBtn1>
                <PMedium text={buttonText} color="gray2" weight={700} />
              </ExampleBtn1>
            </>
          </ArticleFigure>
        );
      case '2':
        return (
          <ArticleFigure caption={caption}>
            <ExampleBtn2>
              <PMedium text={buttonText} color="gray2" weight={700} />
            </ExampleBtn2>
          </ArticleFigure>
        );
      case '3':
        return (
          <ArticleFigure caption={caption}>
            <ExampleBtn3>
              <PMedium text={buttonText} color="gray2" weight={700} />
            </ExampleBtn3>
          </ArticleFigure>
        );
      case '4':
        return (
          <ArticleFigure>
            <>
              <ExampleBtn4>
                <PMedium text={buttonText} color="gray2" weight={700} />
              </ExampleBtn4>
              <PMedium //
                text={{ k: '사용 불가 상태', e: 'Disabled State' }}
                color="gray4"
                marginTop="16px"
              />
              <ArticleLine />
            </>
          </ArticleFigure>
        );
      case '5':
        return (
          <ArticleFigure caption={caption}>
            <>
              <ArticleLine />
              <ExampleBtn
                onClick={() =>
                  showToast({
                    k: '버튼을 눌렀습니다 👍',
                    e: 'Press Button 👍',
                  })
                }
                variants={buttonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <PMedium text={buttonText} color="gray2" weight={700} />
              </ExampleBtn>
              <PMedium //
                text={{
                  k: '실제 버튼입니다. 눌러보세요 🤟',
                  e: 'This is Real Button. Press it 🤟',
                }}
                color="gray4"
                marginTop="16px"
              />
              <ArticleLine />
              <H3Title
                className="h3__max__width"
                text={{
                  k: '프레이머 모션 API로 버튼 인터랙션 구현',
                  e: 'Implementing Interaction of button with Framer Motion API',
                }}
                color="gray2"
              />
              <PMedium //
                className="caption__max__width"
                text={{
                  k: "아래는 '팔레트 공유하기'에서 실제로 쓰고 있는 버튼의 코드입니다. 프레이머 모션 API(Framer Motion API)를 활용했습니다. 디자인 공유하기에서는 언어는 Typescript, 주요 라이브러리는 React, styled-component, Framer Motion, 프레임워크는 Next.js를 쓰고 있습니다.",
                  e: "Below is the code of the real button used in 'SHARE PALETTE'. In SHARE DESIGN, the programing language is Typescript, the main library is React, styled-component, Framer Motion, and the framework is Next.js.",
                }}
                color="gray4"
              />
              <MySyntaxHighlighter language="tsx" codeString={content} />
            </>
          </ArticleFigure>
        );

      case '6':
        return (
          <ArticleFigure caption={caption} className="syntax__highlighter__p">
            <MySyntaxHighlighter language="tsx" codeString={content} />
          </ArticleFigure>
        );

      case '7':
        return (
          <ArticleFigure caption={caption} className="syntax__highlighter__p">
            <MySyntaxHighlighter language="tsx" codeString={content} />
          </ArticleFigure>
        );
      case '8':
        return (
          <Go
            targetBlank={false}
            href="/product/share-palette"
            text={{
              k: '🎨\u00A0\u00A0팔레트 공유하기 바로 가기',
              e: '🎨\u00A0\u00A0Go to SHARE PALETTE ',
            }}
            marginTopDesktop="48px"
            marginTopMobile="36px"
          />
        );
    }
  };

  return <Container>{ArticleExampleComponentChildren()}</Container>;
};

export default ExampleProductDesign1;

const Container = styled.div`
  .h3__max__width {
    margin: 96px auto 0;
    max-width: 240px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin: 72px auto 0;
      max-width: 200px;
    }
  }

  .caption__max__width {
    margin: 24px auto 0;
    max-width: 540px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin: 20px auto 0;
    }
  }

  .syntax__highlighter__p {
    text-align: left;
  }
`;

const ExampleBtn = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.gray6};
  padding: 18px 28px;

  border-radius: 23px;
  margin: 48px auto 0;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    border-radius: 21px;
    margin: 36px auto 0;
  }
`;

const ExampleBtn1 = styled(ExampleBtn)``;

const ExampleBtn2 = styled(ExampleBtn)`
  transform: scale(1.05);
`;

const ExampleBtn3 = styled(ExampleBtn)`
  transform: scale(0.93);
  opacity: 0.7;
`;

const ExampleBtn4 = styled(ExampleBtn)`
  opacity: 0.3;
`;
