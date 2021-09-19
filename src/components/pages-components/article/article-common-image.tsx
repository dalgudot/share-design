import styled from 'styled-components';
import PMedium from '../../../foundation/typography/p-medium';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';

type tType =
  | {
      k: string;
      e: string;
    }
  | string;

const ArticleCommonImage = ({
  src,
  caption,
  alt,
  marginTop,
}: {
  src: tType;
  caption?: tType;
  alt: tType;
  marginTop: string;
}) => {
  return (
    <Figure marginTop={marginTop}>
      <img //
        src={useSetLanguage(src)}
        alt={useSetLanguage(alt)}
      />
      <figcaption>
        {caption && (
          <PMedium //
            text={caption}
            color="gray5"
            marginTop="4px"
          />
        )}
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
