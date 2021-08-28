import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { uiUxDesign1 } from '../../../../../data/article/ui-ux-design/1';
import H2Title from '../../../../../foundation/typography/h2-title';
import PLarge from '../../../../../foundation/typography/p-large';
import PSmall from '../../../../../foundation/typography/p-small';
import { mediaBreakPoint } from '../../../../../styles/common';
import LangChangeButton from '../../../../header/lang-change-button';
import LangChangeToggle from '../../../../header/lang-change-toggle';
import ArticleCommonImage from '../../article-common-image';

// 임시
type ArticleCommonImageType =
  | {
      k: string;
      e: string;
    }
  | string;

const UIUXDesignContents1 = ({ contentsArray }: { contentsArray: any }) => {
  const router = useRouter();
  const locale = router.locale;

  // 본문에 있는 첫 번째 언어 전환 토글 버튼과 두 번째 언어 전환 토글 버튼 눌렀을 때 스크롤 유지
  const firstTogglePositionRef = useRef<HTMLDivElement>(null);
  const finalTogglePositionRef = useRef<HTMLDivElement>(null);
  const [firstToggle, setfirstToggle] = useState(false);
  const [finalToggle, setFinalToggle] = useState(false);

  const gotoFirstRefAfterLocaleChange = () => {
    firstTogglePositionRef?.current?.scrollIntoView();
  };

  const gotoFinalRefAfterLocaleChange = () => {
    finalTogglePositionRef?.current?.scrollIntoView();
  };

  useEffect(() => {
    if (firstToggle === true) {
      gotoFirstRefAfterLocaleChange();
      setfirstToggle(false);
    }
  }, [locale]);

  useEffect(() => {
    if (finalToggle === true) {
      finalToggle === true && gotoFinalRefAfterLocaleChange();
      setFinalToggle(false);
    }
  }, [locale]);

  return (
    <>
      <PLarge //
        text={contentsArray[0]}
        color="gray3"
        marginTop="36px"
      />

      <PLarge //
        text={contentsArray[1]}
        color="gray3"
        marginTop="36px"
      />

      <ArticleCommonImage //
        src={contentsArray[2] as ArticleCommonImageType}
        caption={contentsArray[3] as ArticleCommonImageType}
        marginTop="36px"
      />

      <H2Title //
        text={contentsArray[4]}
        color="gray2"
        marginTop="120px"
      />

      <PLarge //
        text={contentsArray[5]}
        color="gray3"
        marginTop="24px"
      />

      <div ref={firstTogglePositionRef} />
      <FigureWrap>
        <LangChangeButton
          setfirstToggle={setfirstToggle}
          text={uiUxDesign1().langChangeButton}
        />
        <figcaption>
          <PSmall //
            text={contentsArray[6]}
            color="gray5"
            marginTop="12px"
          />
        </figcaption>
      </FigureWrap>

      <PLarge //
        text={contentsArray[7]}
        color="gray3"
        marginTop="96px"
      />

      <PLarge //
        text={contentsArray[8]}
        color="gray3"
        marginTop="36px"
      />

      <ArticleCommonImage //
        src={contentsArray[9] as ArticleCommonImageType}
        caption={contentsArray[10] as ArticleCommonImageType}
        marginTop="36px"
      />

      <PLarge //
        text={contentsArray[11]}
        color="gray3"
        marginTop="96px"
      />

      <ArticleCommonImage //
        src={contentsArray[12] as ArticleCommonImageType}
        caption={contentsArray[13] as ArticleCommonImageType}
        marginTop="48px"
      />

      <H2Title //
        text={contentsArray[14]}
        color="gray2"
        marginTop="120px"
      />

      <PLarge //
        text={contentsArray[15]}
        color="gray3"
        marginTop="24px"
      />

      <div ref={finalTogglePositionRef} />
      <FigureWrap>
        <div className="example__lang_change_toggle">
          <LangChangeToggle setFinalToggle={setFinalToggle} />
        </div>
        <figcaption>
          <PSmall //
            text={contentsArray[16]}
            color="gray5"
            marginTop="16px"
          />
        </figcaption>
      </FigureWrap>

      <PLarge //
        text={contentsArray[17]}
        color="gray3"
        marginTop="96px"
      />

      <H2Title //
        text={contentsArray[18]}
        color="gray2"
        marginTop="120px"
      />

      <PLarge //
        text={contentsArray[19]}
        color="gray3"
        marginTop="24px"
      />

      <ArticleCommonImage //
        src={contentsArray[20] as ArticleCommonImageType}
        caption={contentsArray[21] as ArticleCommonImageType}
        marginTop="36px"
      />

      <PLarge //
        text={contentsArray[22]}
        color="gray3"
        marginTop="96px"
      />

      <ArticleCommonImage //
        src={contentsArray[23] as ArticleCommonImageType}
        caption={contentsArray[24] as ArticleCommonImageType}
        marginTop="36px"
      />

      <PLarge //
        text={contentsArray[25]}
        color="gray3"
        marginTop="96px"
      />

      <ArticleCommonImage //
        src={contentsArray[26] as ArticleCommonImageType}
        caption={contentsArray[27] as ArticleCommonImageType}
        marginTop="36px"
      />

      <H2Title //
        text={contentsArray[28]}
        color="gray2"
        marginTop="96px"
      />

      <PLarge //
        text={contentsArray[29]}
        color="gray3"
        marginTop="12px"
      />
    </>
  );
};

export default UIUXDesignContents1;

const FigureWrap = styled.figure`
  margin: 96px auto 0;
  text-align: center;
  max-width: 380px;

  .example__lang_change_toggle {
    display: flex;
    justify-content: center;

    // 바뀌는 속성
    margin-right: 28px; // 중앙으로 보이도록 시각 보정

    @media all and (max-width: ${mediaBreakPoint.first}) {
      margin-right: 20px; // 중앙으로 보이도록 시각 보정
    }
  }
`;
