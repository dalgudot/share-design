import styled from 'styled-components';
import { tType } from '../../../../../../type';
import { mediaBreakPoint } from '../../../../../styles/common';
import { motion } from 'framer-motion';
import PMedium from '../../../../../foundation/typography/p-medium';
import { buttonVariants } from '../../../../../foundation/framer-motion/variants';
import { useWindowHeight } from '../../../../../lib/hooks/useWindowHeight';

const ExampleComponentProductDesign1 = ({
  component_key,
  caption,
  showToast,
}: {
  component_key: string;
  caption?: tType;
  showToast: Function;
}) => {
  const ButtonText = { k: '버튼', e: 'Button' };
  const height: number = useWindowHeight();

  const ArticleExampleComponentChildren = (
    component_key: string,
    height: number
  ) => {
    switch (component_key) {
      case '1':
        return (
          <>
            <ListLine height={height} />
            <ExampleBtn1>
              <PMedium text={ButtonText} color="gray2" weight={700} />
            </ExampleBtn1>
          </>
        );
      case '2':
        return (
          <>
            <ExampleBtn2>
              <PMedium text={ButtonText} color="gray2" weight={700} />
            </ExampleBtn2>
          </>
        );
      case '3':
        return (
          <>
            <ExampleBtn3>
              <PMedium text={ButtonText} color="gray2" weight={700} />
            </ExampleBtn3>
          </>
        );
      case '4':
        return (
          <>
            <ExampleBtn4>
              <PMedium text={ButtonText} color="gray2" weight={700} />
            </ExampleBtn4>
          </>
        );
      case '5':
        return (
          <>
            <ListLine height={height} />
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
              <PMedium text={ButtonText} color="gray2" weight={700} />
            </ExampleBtn>
            <PMedium //
              text={{
                k: '실제 버튼입니다. 눌러보세요 🤟',
                e: 'This is Real Button. Press it 🤟',
              }}
              color="gray4"
              marginTop="16px"
            />
          </>
        );
      default:
        return <> </>;
    }
  };

  const exampleComponent = (component_key: string, height: number) => {
    return (
      <>
        <Figure>
          {ArticleExampleComponentChildren(component_key, height)}
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
      </>
    );
  };

  return <>{exampleComponent(component_key, height)}</>;
};

export default ExampleComponentProductDesign1;

const Figure = styled.figure`
  margin: 0 auto;
  text-align: center;
`;

const ListLine = styled.div<{ height: number }>`
  width: 1px;
  height: ${({ height }) => height * 0.2}px;
  background-color: ${({ theme }) => theme.gray6};

  // 바뀌는 속성
  margin: 96px auto;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 72px auto;
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
