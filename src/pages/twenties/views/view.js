import styled from "styled-components";
import PropTypes from "prop-types";
import TwentiesStaggerText from "../../../components/text-component/twenties/twenties-stagger-text";
import ArtworkTwenties from "../../../components/img-component/artwork-twenties";

const View = ({ pageNum }) => {
  View.propTypes = {
    pageNum: PropTypes.number,
  };

  const currentPage = () => {
    switch (pageNum) {
      case 1:
        return <TwentiesStaggerText text="twenty" />;

      case 2:
        return (
          <figure>
            <TwentiesStaggerText text="flutter" />
          </figure>
        );

      case 3:
        return <TwentiesStaggerText text="iAmTwenties" />;

      case 4:
        return (
          <figure>
            <TwentiesStaggerText text="like" />
          </figure>
        );

      case 5:
        return <ArtworkTwenties src="/images/1.jpg" alt="alt1" />;
    }
  };

  return <>{currentPage()}</>;
};

export default View;
