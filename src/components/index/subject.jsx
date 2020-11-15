import PropTypes from 'prop-types';
import styled from 'styled-components';

const Subject = ({ order, name, backgroundColor }) => {
  Subject.propTypes = {
    order: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
  };

  return (
    <SubjectContainer backgroundColor={backgroundColor}>
      {/* <SubjectHeader>
        <SubjectHeaderOrder>{order}</SubjectHeaderOrder>
        <SubjectHeaderLine />
        <SubjectHeaderName>{name}</SubjectHeaderName>
      </SubjectHeader> */}

      <SubjectContents>
        <Content />
        <Content className="middle__content" />
        <Content />
      </SubjectContents>
    </SubjectContainer>
  );
};

export default Subject;

const SubjectContainer = styled.section`
  background-color: ${({ backgroundColor }) => backgroundColor};

  padding: 0 6vw;

  @media all and (min-width: 960px) {
    padding: 0 16vw;
  }
`;

// S of SubjectHeader
const SubjectHeader = styled.header`
  margin-top: 17vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;

const SubjectHeaderOrder = styled.h2`
  font-weight: 100;
  flex-grow: 0;
`;
// flex-grow가 0이면 flex container의 크기가 커져도 flex item의 크기가 커지지 않고 원래 크기 유지. 여기서는 3가지 요소 중 양쪽 글씨에만 적용함.

const SubjectHeaderLine = styled.div`
  height: 1px;
  margin: 0 2vw;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.7;
  flex-grow: 1;

  @media all and (max-width: 767px) {
    width: 1px;
    height: 59px;
    margin: 16px 0;
    flex-grow: 0;
  }
`;

const SubjectHeaderName = styled.h2`
  font-weight: 700;
  flex-grow: 0;
`;
// E of SubjectHeader

// S of SubjectContents
const SubjectContents = styled.section`
  margin-top: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .middle__content {
    margin: 0 1.5vw;
  }

  @media all and (max-width: 767px) {
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
// E of SubjectContents
