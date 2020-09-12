// Styled-Component가 로드되기 전 문제만 해결하는 방법
// https://velog.io/@sbinha/next.js-styled-components-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%B4-%EC%A0%81%EC%9A%A9%EC%A0%84%EC%97%90-%EB%A0%8C%EB%8D%94%EA%B0%80-%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%EB%B2%95
// https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c

import Document, { Html, Head, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      // NextJS Docs - lang="en"
      // https://nextjs.org/docs/advanced-features/custom-document

      <Html lang="ko">
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        {/* 우클릭, 드래그, 복사 방지 태그
      https://taeppoong2.tistory.com/20
      http://reali.kr/wp/%EB%A7%88%EC%9A%B0%EC%8A%A4-%EC%98%A4%EB%A5%B8%EC%AA%BD%EB%A9%94%EB%89%B4-%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%84%A0%ED%83%9D%EB%B3%B5%EC%82%AC/ */}
        <body
        // oncontextmenu="return false"
        // onselectstart="return false"
        // ondragstart="return false"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
