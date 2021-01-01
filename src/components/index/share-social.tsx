import styled from 'styled-components';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { mediaBreakPoint } from '../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ShareSocial = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <SocialWrap>
      <a href="/" target="_blank">
        <u>
          <TextStyle
            type="p"
            text="Brunch"
            textSize="body"
            weight={fontWeight[400]}
            color={themeContext.gray1}
          />
        </u>
      </a>
      <a href="/" target="_blank">
        <u>
          <TextStyle
            type="p"
            text="Facebook"
            textSize="body"
            weight={fontWeight[400]}
            color={themeContext.gray1}
          />
        </u>
      </a>
      <a href="/" target="_blank">
        <u>
          <TextStyle
            type="p"
            text="LinkedIn"
            textSize="body"
            weight={fontWeight[400]}
            color={themeContext.gray1}
          />
        </u>
      </a>
    </SocialWrap>
  );
};

export default ShareSocial;

const SocialWrap = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  min-width: 100%;
`;
