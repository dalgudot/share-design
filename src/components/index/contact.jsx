import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactKHK>
      <ContactLine />
      <ContactText>Contact</ContactText>
      <ContactEmail>dalgudot@gmail.com</ContactEmail>
      <ContactLine />
    </ContactKHK>
  );
};

export default Contact;

const ContactKHK = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 24vh;
`;

const ContactLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.7;
`;

const ContactText = styled.h2`
  font-weight: 700;
  margin-top: 8vh;
  margin-bottom: 0.1vh;
`;

const ContactEmail = styled.h2`
  font-weight: 300;
  margin-bottom: 8vh;
`;
