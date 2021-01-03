import Link from 'next/link';
import { useEffect } from 'react';
import TextStyle from '../../components/typography/atoms/text-style';
import { fontWeight } from '../../components/typography/atoms/font';
import { DetectBrowserLang } from '../../lib/funtions/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../lib/funtions/visits-and-views';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const TwoLanguage = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('001 Design in two languages');
  }, []);

  const themeContext = useContext(ThemeContext);
  const url: string = 'https://share-design.kr/article/two-language';

  return (
    <>
      <FacebookShareButton url={url}>
        <TextStyle
          type="h1"
          text="페이스북"
          textSize="body"
          weight={fontWeight[700]}
          color={themeContext.gray3}
        />
      </FacebookShareButton>
      <br />
      <br />
      <LinkedinShareButton url={url}>
        <TextStyle
          type="h1"
          text="링크드인"
          textSize="body"
          weight={fontWeight[700]}
          color={themeContext.gray3}
        />
      </LinkedinShareButton>
      <br />
      <br />

      <CopyToClipboard
        text={url}
        // onCopy={() => func()}
      >
        <button>
          <TextStyle
            type="h1"
            text="함수로 링크 복사"
            textSize="body"
            weight={fontWeight[700]}
            color={themeContext.gray3}
          />
        </button>
      </CopyToClipboard>
    </>
  );
};

export default TwoLanguage;
