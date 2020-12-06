import HeadInfo from '../../components/head-info/head-info';
import { indexInfo } from '../../components/head-info/head-info-text';
import Link from 'next/link';
import Text from '../../components/typo/text';
import { fontSize, fontWeight } from '../../components/typo/font';
import { DetectBrowserLang } from '../../components/func/detect-browser-lang';

const TwoLanguage = () => {
  DetectBrowserLang();

  return (
    <>
      <HeadInfo info={indexInfo} />

      <Text
        text="제목이 들어갑니다."
        mobileSize={fontSize[18]}
        tabletSize={fontSize[20]}
        desktopSize={fontSize[20]}
        weight={fontWeight[700]}
      />
      <Text
        text="본문이 들어갑니다."
        mobileSize={fontSize[18]}
        tabletSize={fontSize[20]}
        desktopSize={fontSize[20]}
        weight={fontWeight[400]}
      />
    </>
  );
};

export default TwoLanguage;
