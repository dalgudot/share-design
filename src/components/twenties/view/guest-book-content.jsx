import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const GuestBookContent = ({ keyNum, content }) => {
  GuestBookContent.propTypes = {
    content: PropTypes.string.isRequired,
  };

  return (
    <Container>
      <p>{`${keyNum + 1}번째 방명록`}</p>
      <p>{content}</p>
    </Container>
  );
};

export default GuestBookContent;

const Container = styled.section`
  margin: 16px;
  /* background-color: ${({ theme }) => theme.backgroundColor}; */
  background-color: darkblue;
  max-width: 400px;
  opacity: 0.9;
  max-width: 480px;

  p {
    color: ${({ theme }) => theme.textPrimary};
  }
`;
