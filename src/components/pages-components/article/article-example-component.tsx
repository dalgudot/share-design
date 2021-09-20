import styled from 'styled-components';
import { tType } from '../../../../type';
import PMedium from '../../../foundation/typography/p-medium';

const ArticleExampleComponent = ({
  children,
  caption,
}: {
  children: JSX.Element;
  caption?: tType;
}) => {
  return (
    <Figure>
      {children}
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
  );
};

export default ArticleExampleComponent;

const Figure = styled.figure`
  margin: 96px auto 60px;
  text-align: center;
  max-width: 420px;
`;
