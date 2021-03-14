import styled from 'styled-components';
import { uiUxDesign } from '../../../../data/article/ui-ux-design/1';
import H2Title700 from '../../../../elements/typography/h2-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import PSmall400 from '../../../../elements/typography/p-small-400';
import { mediaBreakPoint } from '../../../../styles/common';
import LangChangeButton from '../../../header/lang-change-button';
import LangChangeToggle from '../../../header/lang-change-toggle';
import ArticleCommonImage from '../article-common-image';

const UIUXDesignContents1 = ({
  contentsArray,
}: {
  contentsArray: object[];
}) => {
  return (
    <>
      <PMedium400 //
        text={contentsArray[0]}
        color="gray3"
      />

      <PMedium400 //
        text={contentsArray[1]}
        color="gray3"
        marginTop="36px"
      />

      <ArticleCommonImage //
        src={contentsArray[2]}
        caption={contentsArray[3]}
        marginTop="36px"
      />

      <H2Title700 //
        text={contentsArray[4]}
        color="gray2"
        marginTop="120px"
      />

      <PMedium400 //
        text={contentsArray[5]}
        color="gray3"
        marginTop="24px"
      />

      <FigureWrap>
        <LangChangeButton text={uiUxDesign().langChangeButton} />
        <figcaption>
          <PSmall400 //
            text={contentsArray[6]}
            color="gray5"
            marginTop="12px"
          />
        </figcaption>
      </FigureWrap>

      <PMedium400 //
        text={contentsArray[7]}
        color="gray3"
        marginTop="96px"
      />

      <PMedium400 //
        text={contentsArray[8]}
        color="gray3"
        marginTop="36px"
      />

      <ArticleCommonImage //
        src={contentsArray[9]}
        caption={contentsArray[10]}
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[11]}
        color="gray3"
        marginTop="96px"
      />

      <ArticleCommonImage //
        src={contentsArray[12]}
        caption={contentsArray[13]}
        marginTop="48px"
      />

      <H2Title700 //
        text={contentsArray[14]}
        color="gray2"
        marginTop="120px"
      />

      <PMedium400 //
        text={contentsArray[15]}
        color="gray3"
        marginTop="24px"
      />

      <FigureWrap>
        <div className="example__lang_change_toggle">
          <LangChangeToggle />
        </div>
        <figcaption>
          <PSmall400 //
            text={contentsArray[16]}
            color="gray5"
            marginTop="16px"
          />
        </figcaption>
      </FigureWrap>

      <PMedium400 //
        text={contentsArray[17]}
        color="gray3"
        marginTop="96px"
      />

      <H2Title700 //
        text={contentsArray[18]}
        color="gray2"
        marginTop="120px"
      />

      <PMedium400 //
        text={contentsArray[19]}
        color="gray3"
        marginTop="24px"
      />

      <ArticleCommonImage //
        src={contentsArray[20]}
        caption={contentsArray[21]}
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[22]}
        color="gray3"
        marginTop="96px"
      />

      <ArticleCommonImage //
        src={contentsArray[23]}
        caption={contentsArray[24]}
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[25]}
        color="gray3"
        marginTop="96px"
      />

      <ArticleCommonImage //
        src={contentsArray[26]}
        caption={contentsArray[27]}
        marginTop="36px"
      />

      <H2Title700 //
        text={contentsArray[28]}
        color="gray2"
        marginTop="96px"
      />

      <PMedium400 //
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
