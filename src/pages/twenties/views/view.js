import styled from "styled-components";
import PropTypes from "prop-types";
import TwentiesStaggerText from "../../../components/text-component/twenties/twenties-stagger-text";

const PageMove = ({ pageNum }) => {
  PageMove.propTypes = {
    pageNum: PropTypes.number,
  };

  const currentPage = () => {
    switch (pageNum) {
      case 1:
        return <One />;

      case 2:
        return <TwentiesStaggerText text="flutter" />;

      case 3:
        return <Two />;
    }
  };

  return <>{currentPage()}</>;
};

export default PageMove;

// export const ViewOne = () => {
//   return (
//     <>
//       <One></One>
//     </>
//   );
// };

const One = styled.div`
  width: 100%;
  height: 200px;
  background-color: blueviolet;
`;

// export const ViewTwo = () => {
//   return (
//     <>
//       <Two></Two>
//     </>
//   );
// };

const Two = styled.div`
  width: 100%;
  height: 200px;
  background-color: crimson;
`;
