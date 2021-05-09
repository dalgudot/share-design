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

const MySyntaxHighlighter = ({
  language,
  codeString,
}: {
  language: 'tsx' | 'typescript' | 'css';
  codeString: string;
}) => {
  return (
    <>
      <Container>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          wrapLines={true}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </Container>
    </>
  );
};

export default MySyntaxHighlighter;

const Container = styled.div`
  pre {
    padding: 48px !important;
    border-radius: 24px;
  }
  span {
    font-size: 18px;
    font-family: Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono',
      'Courier New', monospace !important;
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
