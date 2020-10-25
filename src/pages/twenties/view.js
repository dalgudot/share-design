import styled from "styled-components";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import TwentiesStaggerText from "../../components/text-component/twenties/twenties-stagger-text";
import TwentiesArtwork from "../../components/img-component/twenties/twenties-artwork";

const View = ({ pageNum }) => {
  View.propTypes = {
    pageNum: PropTypes.number.isRequired,
  };

  const currentPage = () => {
    switch (pageNum) {
      case 1:
        return <TwentiesStaggerText text="twenty" />;

      case 2:
        return <TwentiesStaggerText text="flutter" />;

      case 3:
        return (
          <TwentiesStaggerText text="iAmTwenties" staggerChildren={0.05} />
        );

      case 4:
        return <TwentiesStaggerText text="like" />;

      case 5:
        return <TwentiesArtwork src="/images/1.jpg" alt="alt1" />;
    }
  };

  return (
    // AnimatePresence는 각 애니메이션의 구분을 위해 'key'가 필수!
    // https://www.framer.com/api/motion/animate-presence/#usepresence
    <AnimatePresence>{currentPage()}</AnimatePresence>
  );
};

export default View;
