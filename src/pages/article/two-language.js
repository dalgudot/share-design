import HeadInfo from '../../components/head-info/head-info';
import { indexInfo } from '../../components/head-info/head-info-text';
import Link from 'next/link';
import { useEffect } from 'react';
import H1Text from '../../components/typo/h1';
import { fontSize, fontWeight } from '../../components/typo/font';
import { DetectBrowserLang } from '../../components/func/detect-browser-lang';
import { VisitsAndViewsDuringSession } from '../../components/func/visits-and-views';

const TwoLanguage = () => {
  DetectBrowserLang();
  useEffect(() => {
    VisitsAndViewsDuringSession('001 Design in two languages');
  }, []);

  return (
    <>
      <HeadInfo info={indexInfo} />

      <H1Text
        text="제목이 들어갑니다."
        mobileSize={fontSize[18]}
        tabletSize={fontSize[20]}
        desktopSize={fontSize[20]}
        weight={fontWeight[700]}
      />
      <H1Text
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
