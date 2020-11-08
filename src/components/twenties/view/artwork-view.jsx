import PropTypes from 'prop-types';
import TwentiesStaggerText from '../text-component/twenties-stagger-text';
import TwentiesArtwork from '../img-component/twenties-artwork';
import Link from 'next/link';

const ArtworkView = ({ pageNum, images }) => {
  ArtworkView.propTypes = {
    pageNum: PropTypes.number.isRequired,
  };

  const currentPage = () => {
    switch (pageNum) {
      case 1:
        return <TwentiesStaggerText text="twenties1" />;

      case 2:
        return <TwentiesStaggerText text="twenties2" />;

      case 3:
        return <TwentiesStaggerText text="twenties3" staggerSpeed="medium" />;
      // 길이가 긴 글자 조절 위해
      // 길이가 더 긴 영어는 조금 더 빠른 속도 적용 위해 slow, medium, fast 3가지 속도로 나눔. 기본은 medium

      case 4:
        return <TwentiesStaggerText text="twenties4" />;

      case 5:
        return <TwentiesArtwork src="/images/1.jpg" alt="alt1" />;

      case 6:
        return <TwentiesArtwork src="/images/2.jpg" alt="alt2" />;

      case 7:
        return (
          <h1>
            <Link href="/twenties">
              <a>처음으로</a>
            </Link>
          </h1>
        );
    }
  };

  return (
    // AnimatePresence는 각 애니메이션의 구분을 위해 'key'가 필수!
    // https://www.framer.com/api/motion/animate-presence/#usepresence
    // _app에 있음
    currentPage()
  );
};

export default ArtworkView;

// export async function getStaticProps() {
//   const images = {
//     src: '/images/1.jpg',
//   };

//   return { props: { images } };
// }

// export async function getServerSideProps() {
//   const images = {
//     src: '/images/1.jpg',
//   };

//   return { props: { images } };
// }
