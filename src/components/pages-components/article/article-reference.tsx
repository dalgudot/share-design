import { motion } from 'framer-motion';
import styled from 'styled-components';
import { tArticleCommon } from '../../../data/article/common/t-article-common';
import { listVariants } from '../../../foundation/framer-motion/variants';
import H2Title from '../../../foundation/typography/h2-title';
import PLarge from '../../../foundation/typography/p-large';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleReference = ({ referencesData }: { referencesData: object[] }) => {
  return (
    <Container>
      <H2Title //
        text={tArticleCommon().ReferencesTitle}
        color="gray1"
      />

      {referencesData.map((reference: any, idx: number) => (
        <MotionA
          variants={listVariants}
          whileHover="whileHover"
          whileTap="whileTap"
          key={idx}
          href={reference.url}
          target="_blank"
        >
          <ReferenceContents>
            <PLarge text={reference.title} color="gray1" weight={700} />
            <PLarge text={reference.content} color="gray3" marginTop="8px" />
          </ReferenceContents>
          <PLarge
            text={tArticleCommon().chevronRight}
            color="gray1"
            weight={700}
          />
        </MotionA>
      ))}
    </Container>
  );
};

export default ArticleReference;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 96px;
  }
`;

const MotionA = styled(motion.a)`
  padding: 36px 0;
  border-bottom: solid 1px ${({ theme }) => theme.gray6};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReferenceContents = styled.div`
  margin-right: 96px;

  p {
    line-height: 1.3;
  }

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-right: 48px;
  }
`;
