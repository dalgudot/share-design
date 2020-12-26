import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     const sheet = new ServerStyleSheet();
//     const page = renderPage((App) => (props) =>
//       sheet.collectStyles(<App {...props} />)
//     );
//     const styleTags = sheet.getStyleElement();
//     return { ...page, styleTags };
//   }

//   render() {
//     return (
//       <Html lang="ko">
//         <Head>{this.props.styleTags}</Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// 1. Styled-Component가 로드되기 전 문제만 해결하는 방법

// https://velog.io/@sbinha/next.js-styled-components-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%B4-%EC%A0%81%EC%9A%A9%EC%A0%84%EC%97%90-%EB%A0%8C%EB%8D%94%EA%B0%80-%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%EB%B2%95

// https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c

// 2. 우클릭, 드래그, 복사 방지 태그

//https://taeppoong2.tistory.com/20

// oncontextmenu="return false"
// onselectstart="return false"
// ondragstart="return false"

// MDN [oncontextmenu]
// https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event
