import styled from 'styled-components';
import PText from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { HorizontalLine } from './common-elements';

const Contact = () => {
  return (
    <ContactContainer>
      <HorizontalLine />
      <ContactText>
        <PText
          text="Contact"
          mobileSize={fontSize.font29}
          tabletSize={fontSize.font39}
          desktopSize={fontSize.font49}
          weight={fontWeight.bold}
          opacity={0.8}
        />
      </ContactText>

      <Email>
        <PText
          text="Comming Soon..."
          mobileSize={fontSize.font29}
          tabletSize={fontSize.font39}
          desktopSize={fontSize.font49}
          weight={fontWeight.bold}
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
