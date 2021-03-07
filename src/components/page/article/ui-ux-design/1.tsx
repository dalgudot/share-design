import styled from 'styled-components';
import { uiUxDesign } from '../../../../data/article/ui-ux-design/1';
import H2Title700 from '../../../../elements/typography/h2-title-700';
import H3Title700 from '../../../../elements/typography/h3-title-700';
import PMedium400 from '../../../../elements/typography/p-medium-400';
import PSmall400 from '../../../../elements/typography/p-small-400';
import LangChangeButton from '../../../header/lang-change-button';
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

      <ArticleCommonImage //
        src={contentsArray[1]}
        alt={contentsArray[2]}
        caption={contentsArray[3]}
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[4]}
        color="gray3"
        marginTop="48px"
      />

      <PMedium400 //
        text={contentsArray[5]}
        color="gray3"
        marginTop="48px"
      />

      <FigureWrap>
        <LangChangeButton text={uiUxDesign().langChangeButton} />
        <figcaption>
          <PSmall400 //
            text={contentsArray[6]}
            color="gray5"
            marginTop="16px"
          />
        </figcaption>
      </FigureWrap>

      <PMedium400 //
        text={contentsArray[7]}
        color="gray3"
        marginTop="72px"
      />

      <FigureWrap>
        <LangChangeButton text={uiUxDesign().langChangeButtonBadCase} />
        <figcaption>
          <PSmall400 //
            text={contentsArray[8]}
            color="gray5"
            marginTop="16px"
          />
        </figcaption>
      </FigureWrap>

      <PMedium400 //
        text={contentsArray[9]}
        color="gray3"
        marginTop="72px"
      />

      <ArticleCommonImage //
        src={contentsArray[10]}
        alt={contentsArray[11]}
        caption={contentsArray[12]}
        marginTop="36px"
      />

      <PMedium400 //
        text={contentsArray[13]}
        color="gray3"
        marginTop="48px"
      />

      {/* <PMedium400 //
        text={contentsArray[14]}
        color="gray3"
        marginTop="48px"
      /> */}

      <H2Title700 //
        text={contentsArray[20]}
        color="gray2"
        marginTop="72px"
      />

      <PMedium400 //
        text={contentsArray[21]}
        color="gray3"
        marginTop="12px"
      />
    </>
  );
};

export default UIUXDesignContents1;

const FigureWrap = styled.figure`
  margin: 72px auto 0;
  text-align: center;
  max-width: 360px;
`;
