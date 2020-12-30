import Link from 'next/link';
import { useEffect } from 'react';
import TextStyle from '../../components/typography/text-style';
import { fontWeight } from '../../components/typography/font';
import { DetectBrowserLang } from '../../components/func/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../components/func/visits-and-views';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toastify } from '../../components/toast/toast-func';

const TwoLanguage = ({ theme }: any) => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('001 Design in two languages');
  }, []);

  const url: string = 'https://share-design.kr/article/two-language';

  return (
    <>
      <FacebookShareButton url={url}>
        <TextStyle
          type="h1"
          text="페이스북"
          textSize="body"
          weight={fontWeight[700]}
          color={theme.gray3}
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
          color={theme.gray3}
        />
      </LinkedinShareButton>
      <br />
      <br />

      <CopyToClipboard text={url} onCopy={() => toastify()}>
        <button>
          <TextStyle
            type="h1"
            text="함수로 링크 복사"
            textSize="body"
            weight={fontWeight[700]}
            color={theme.gray3}
          />
        </button>
      </CopyToClipboard>
    </>
  );
};

export default TwoLanguage;
