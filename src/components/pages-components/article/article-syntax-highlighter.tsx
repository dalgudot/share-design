import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomDark,
  dracula,
  materialDark,
  okaidia,
  tomorrow,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { mediaBreakPoint } from '../../../styles/common';
import { tType } from '../../../../type';
import { useSetLanguage } from '../../../foundation/typography/useSetLanguage';
import PMedium from '../../../foundation/typography/p-medium';

const ArticleSyntaxHighlighter = ({
  language,
  codeString,
  caption,
}: {
  language: 'tsx' | 'typescript' | 'css';
  codeString: tType;
  caption?: tType;
}) => {
  return (
    <>
      <Figure>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          wrapLines={true}
          wrapLongLines={true}
        >
          {useSetLanguage(codeString)}
        </SyntaxHighlighter>
        {caption && (
          <figcaption>
            <PMedium //
              text={caption}
              color="gray4"
              marginTop="8px"
            />
          </figcaption>
        )}
      </Figure>
    </>
  );
};

export default ArticleSyntaxHighlighter;

const Figure = styled.figure`
  pre {
    background: rgb(30, 30, 30, 0.95) !important;
    border-radius: 16px;

    margin: 48px 0 0 !important; // Remove default setting
    padding: 56px !important;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin: 36px 0 0 !important; // Remove default setting
      padding: 36px !important;
      max-width: 91vw !important;
    }
  }

  span {
    text-align: left;
    font-family: Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono',
      'Courier New', monospace !important;

    font-size: 16px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      font-size: 13px;
    }
  }
`;

// import 문제 해결
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230
// Actually I found a better solution. You just need to use cjs module.
// react-syntax-highlighter/dist/cjs/...
// instead of:
// react-syntax-highlighter/dist/esm/...

// Demo
// https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism.html

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_PRISM.MD
