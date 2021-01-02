import styled from 'styled-components';
import TextStyle from '../../typography/text-style';
import { fontWeight } from '../../typography/font';
import { mediaBreakPoint } from '../../../styles/common';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const ContactState = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
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
    </Container>
  );
};

export default ContactState;

const Container = styled.section`
  display: flex;

  // 변경 요소
  margin-top: 176px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 155px;
  }
`;
