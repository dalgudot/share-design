import styled from 'styled-components';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { mediaBreakPoint } from '../../styles/common';

const ShareSocial = () => {
  return (
    <SocialWrap>
      <a href="/" target="_blank">
        <u>
          <P
            text="Brunch"
            mobileSize={fontSize.body.mobile}
            tabletSize={fontSize.body.tablet}
            desktopSize={fontSize.body.desktop}
            weight={fontWeight[400]}
          />
        </u>
      </a>
      <a href="/" target="_blank">
        <u>
          <P
            text="Facebook"
            mobileSize={fontSize.body.mobile}
            tabletSize={fontSize.body.tablet}
            desktopSize={fontSize.body.desktop}
            weight={fontWeight[400]}
          />
        </u>
      </a>
      <a href="/" target="_blank">
        <u>
          <P
            text="LinkedIn"
            mobileSize={fontSize.body.mobile}
            tabletSize={fontSize.body.tablet}
            desktopSize={fontSize.body.desktop}
            weight={fontWeight[400]}
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
