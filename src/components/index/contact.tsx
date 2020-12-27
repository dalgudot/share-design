import styled from 'styled-components';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { HorizontalLine } from './common-elements';

const Contact = () => {
  return (
    <ContactContainer>
      <HorizontalLine />
      <ContactText>
        <P
          text="Contact"
          mobileSize={fontSize[29]}
          tabletSize={fontSize[39]}
          desktopSize={fontSize[49]}
          weight={fontWeight[700]}
          opacity={0.8}
        />
      </ContactText>

      <Email>
        <P
          text="Comming Soon..."
          mobileSize={fontSize[29]}
          tabletSize={fontSize[39]}
          desktopSize={fontSize[49]}
          weight={fontWeight[700]}
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
