import styled from 'styled-components';
import PSmall400 from '../../../elements/typography/p-small-400';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';

const ArticleCommonImage = ({
  src,
  alt,
  caption,
  marginTop,
}: {
  src: object;
  alt: object;
  caption: object;
  marginTop: string;
}) => {
  return (
    <Figure marginTop={marginTop}>
      <img //
        src={useSetLanguage(src)}
        alt={useSetLanguage(alt)}
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
