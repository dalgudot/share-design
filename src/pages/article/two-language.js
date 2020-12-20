import HeadInfo from '../../components/head-info/head-info';
import { indexInfo } from '../../components/head-info/head-info-text';
import Link from 'next/link';
import { useEffect } from 'react';
import H1Text from '../../components/typo/h1';
import { fontSize, fontWeight } from '../../components/typo/font';
import { DetectBrowserLang } from '../../components/func/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../components/func/visits-and-views';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toast } from '../../components/toast/toast';

const TwoLanguage = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('001 Design in two languages');
  }, []);

  const url = 'https://share-design.kr/article/two-language';

  return (
    <>
      <HeadInfo info={indexInfo} />

      <FacebookShareButton url={url}>
        <H1Text
          text="페이스북"
          mobileSize={fontSize[18]}
          tabletSize={fontSize[20]}
          desktopSize={fontSize[20]}
          weight={fontWeight[700]}
        />
      </FacebookShareButton>

      <br />
      <br />

      <LinkedinShareButton url={url}>
        <H1Text
          text="링크드인"
          mobileSize={fontSize[18]}
          tabletSize={fontSize[20]}
          desktopSize={fontSize[20]}
          weight={fontWeight[700]}
        />
      </LinkedinShareButton>

      <br />
      <br />

      {/* onCopy={toastify('복사')} */}
      <CopyToClipboard onCopy={Toast} text={url}>
        <button>
          <H1Text
            text="링크 복사"
            mobileSize={fontSize[18]}
            tabletSize={fontSize[20]}
            desktopSize={fontSize[20]}
            weight={fontWeight[700]}
          />
        </button>
      </CopyToClipboard>
    </>
  );
};

export default TwoLanguage;
