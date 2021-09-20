import styled from 'styled-components';
import { tType } from '../../../../type';
import PMedium from '../../../foundation/typography/p-medium';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleCommonImage = ({
  src,
  caption,
  alt,
  marginTop,
}: {
  src: tType;
  caption?: tType;
  alt?: tType;
  marginTop: string;
}) => {
  return (
    <Figure marginTop={marginTop}>
      <img //
        src={useSetLanguage(src)}
        alt={alt && useSetLanguage(alt)}
      />
      <figcaption>
        {caption && (
          <PMedium //
            text={caption}
            color="gray4"
            marginTop="8px"
          />
        )}
      </figcaption>
    </Figure>
  );
};

export default ArticleCommonImage;

const Figure = styled.figure<{ marginTop: string }>`
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 36px;
  }

  p {
    margin-top: 8px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-top: 2px;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;
