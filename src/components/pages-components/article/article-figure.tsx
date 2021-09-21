import styled from 'styled-components';
import { tType } from '../../../../type';
import PMedium from '../../../foundation/typography/p-medium';

const ArticleFigure = ({
  caption,
  children,
  className,
}: {
  caption?: tType;
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <>
      <Figure className={className}>
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
    </>
  );
};

export default ArticleFigure;

const Figure = styled.figure`
  text-align: center;
`;
