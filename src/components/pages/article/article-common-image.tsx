import styled from 'styled-components';
import PSmall400 from '../../../foundation/typography/p-small-400';
import { useSetLanguage } from '../../../library/hooks/useSetLanguage';

type tStaticType =
  | {
      k: string;
      e: string;
    }
  | string;

const ArticleCommonImage = ({
  src,
  caption,
  marginTop,
}: {
  src: tStaticType;
  caption: tStaticType;
  marginTop: string;
}) => {
  return (
    <Figure marginTop={marginTop}>
      <img //
        src={useSetLanguage(src)}
        alt={useSetLanguage(caption)}
      />
      <figcaption>
        <PSmall400 //
          text={caption}
          color="gray5"
          marginTop="4px"
        />
      </figcaption>
    </Figure>
  );
};

export default ArticleCommonImage;

const Figure = styled.figure<{ marginTop: string }>`
  img {
    width: 100%;
    height: auto;
    margin-top: ${({ marginTop }) => marginTop};
  }
`;
