import Link from 'next/link';
import { useEffect } from 'react';
import H1 from '../../components/typo/h1';
import { fontSize, fontWeight } from '../../components/typo/font';
import { DetectBrowserLang } from '../../components/func/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../components/func/visits-and-views';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toastify } from '../../components/toast/toast-func';

// 텍스트 컴포넌트로 theme의 타입을 넘겨주기 위해 prop으로 가져옴
const TwoLanguage = ({ theme }: any) => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('001 Design in two languages');
  }, []);

  const url: string = 'https://share-design.kr/article/two-language';

  return (
    <>
      <FacebookShareButton url={url}>
        <H1
          text="페이스북"
          mobileSize={fontSize[18]}
          tabletSize={fontSize[20]}
          desktopSize={fontSize[20]}
          weight={fontWeight[700]}
          color={theme.gray4}
        />
      </FacebookShareButton>
      <br />
      <br />
      <LinkedinShareButton url={url}>
        <H1
          text="링크드인"
          mobileSize={fontSize[18]}
          tabletSize={fontSize[20]}
          desktopSize={fontSize[20]}
          weight={fontWeight[700]}
          color={theme.gray4}
        />
      </LinkedinShareButton>
      <br />
      <br />

      <CopyToClipboard text={url} onCopy={() => toastify()}>
        <button>
          <H1
            text="함수로 링크 복사"
            mobileSize={fontSize[18]}
            tabletSize={fontSize[20]}
            desktopSize={fontSize[20]}
            weight={fontWeight[700]}
            color={theme.gray4}
          />
        </button>
      </CopyToClipboard>
    </>
  );
};

export default TwoLanguage;
