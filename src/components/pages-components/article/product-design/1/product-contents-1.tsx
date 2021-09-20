import { contentsArrayInterface } from '../../../../../../type';
import H2Title from '../../../../../foundation/typography/h2-title';
import PLarge from '../../../../../foundation/typography/p-large';
import ArticleCommonImage from '../../article-common-image';

const ProductContents1 = ({ contentsArray }: contentsArrayInterface) => {
  const distributeContents = (
    content: {
      key: string;
      content:
        | string
        | {
            k: string;
            e: string;
          };
      caption?:
        | string
        | {
            k: string;
            e: string;
          };
      alt?:
        | string
        | {
            k: string;
            e: string;
          };
    },
    idx: number
  ) => {
    if (content.key === 'PLarge') {
      return (
        <PLarge
          key={`${content.key}${idx}`}
          text={content.content}
          color="gray3"
          marginTop="36px"
        />
      );
    } else if (content.key === 'img') {
      return (
        <ArticleCommonImage
          key={`${content.key}${idx}`}
          src={content.content}
          caption={content.caption}
          alt={content.alt}
          marginTop="36px"
        />
      );
    } else if (content.key === 'H2Title') {
      return (
        <H2Title
          key={`${content.key}${idx}`}
          text={content.content}
          color="gray2"
          marginTop="120px"
        />
      );
    } else if (content.key === 'Component') {
      return;
    } else {
      return;
    }
  };

  const contents = contentsArray.map(
    (
      content: {
        key: string;
        content:
          | string
          | {
              k: string;
              e: string;
            };
        caption?:
          | string
          | {
              k: string;
              e: string;
            };
        alt?:
          | string
          | {
              k: string;
              e: string;
            };
      },
      idx: number
    ) => distributeContents(content, idx)
  );

  return <>{contents}</>;
};

export default ProductContents1;
