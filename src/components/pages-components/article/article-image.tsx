import styled from 'styled-components';
import { tType } from '../../../../type';
import PMedium from '../../../foundation/typography/p-medium';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { mediaBreakPoint } from '../../../styles/common';

const ArticleImage = ({
  src,
  caption,
  alt,
}: {
  src: tType;
  caption?: tType;
  alt?: tType;
}) => {
  return (
    <Figure>
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

export default ArticleImage;

const Figure = styled.figure`
  margin-top: 24px;
  margin-bottom: 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-bottom: 36px;
  }

  p {
    margin-top: 8px; // caption

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-top: 2px; // caption
    }
  }

  img {
    width: 100%;
    height: auto;
  }
`;
