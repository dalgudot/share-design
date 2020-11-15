import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from '../index/nav';

const Subject = ({ order, name, backgroundColor }) => {
  Subject.propTypes = {
    order: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
  };

  return (
    <>
      <Nav order={order} name={name} />
      <Contents>
        <Content />
        <Content className="middle__content" />
        <Content />
      </Contents>
    </>
  );
};

export default Subject;

const Contents = styled.section`
  margin-top: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .middle__content {
    margin: 0 1.5vw;
  }

  @media all and (max-width: 812px) {
    flex-direction: column;

    .middle__content {
      margin: 1.5vh 0;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 36vh;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.2;
`;
