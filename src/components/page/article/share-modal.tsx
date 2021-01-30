import TextStyle from '../../../elements/typography/atoms/text-style';
import { fontWeight } from '../../../elements/typography/atoms/font';
import { FacebookShareButton, LinkedinShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ShareModal = () => {
  const themeContext = useContext(ThemeContext);
  const url: string = 'https://share-design.kr/articles/1';

  return (
    <>
      <FacebookShareButton url={url}>
        <TextStyle
          type="h1"
          text="페이스북"
          textSize="medium"
          weight={fontWeight[700]}
          color={themeContext.gray4}
        />
      </FacebookShareButton>
      <br />
      <br />
      <LinkedinShareButton url={url}>
        <TextStyle
          type="h1"
          text="링크드인"
          textSize="medium"
          weight={fontWeight[700]}
          color={themeContext.gray4}
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
            textSize="medium"
            weight={fontWeight[700]}
            color={themeContext.gray4}
          />
        </button>
      </CopyToClipboard>
    </>
  );
};

export default ShareModal;
