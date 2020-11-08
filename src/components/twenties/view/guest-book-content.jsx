import styled from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const GuestBookContent = ({ content }) => {
  GuestBookContent.propTypes = {
    content: PropTypes.string.isRequired,
  };

  return (
    <Container>
      <p>{content}</p>
    </Container>
  );
};

export default GuestBookContent;

const Container = styled.section`
  margin: 16px;
  background-color: ${({ theme }) => theme.backgroundColor};
  max-width: 400px;

  p {
    color: ${({ theme }) => theme.textPrimary};
  }
`;
