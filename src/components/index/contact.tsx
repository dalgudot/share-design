import styled, { ThemeConsumer } from 'styled-components';
import TextStyle from '../typography/text-style';
import { fontWeight } from '../typography/font';
import { HorizontalLine } from './common-elements';

const Contact = ({ theme }: any) => {
  return (
    <ContactContainer>
      <HorizontalLine />
      <ContactText>
        <TextStyle
          type="p"
          text="Contact"
          textSize="body"
          weight={fontWeight[700]}
          opacity={0.8}
          color={theme.gray1}
        />
      </ContactText>

      <Email>
        <TextStyle
          type="p"
          text="Comming Soon..."
          textSize="body"
          weight={fontWeight[700]}
          color={theme.gray1}
        />
      </Email>
      <HorizontalLine />
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 24vh;
`;

const ContactText = styled.div`
  margin-top: 8vh;
  margin-bottom: -0.25vh;
`;

const Email = styled.div`
  margin-bottom: 8vh;
`;
