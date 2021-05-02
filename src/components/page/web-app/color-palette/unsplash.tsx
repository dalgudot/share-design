import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import StaggerDots from '../../../../foundation/framer-motion/stagger-dots';
import H1LargeTitle700 from '../../../../foundation/typography/h1-large-title-700';
import PMedium700 from '../../../../foundation/typography/p-medium-700';
import { tColorPalette } from '../../../../data/web-product/t-color-palette';
import { motion } from 'framer-motion';
import { btnHoverTap } from '../../../../foundation/framer-motion/variants';

// https://unsplash.com/documentation
//  https://stackblitz.com/edit/unsplash-js-typescript-n5sc6z?file=index.tsx
const Unsplash = () => {
  const [unsplashData, setUnsplashData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const unsplashApi = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? '',
  });

  const getRandomImage = (): void => {
    setIsLoading(true);

    unsplashApi.photos
      .getRandom({
        query: 'colorful scenery',
        count: 5,
      })
      .then((result) => {
        console.log('result', result);
        result && setIsLoading(false);
        setUnsplashData(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  };

  // useEffect(() => {
  //   getRandomImage();
  // }, []);

  const findNewInspiration = (): void => {
    getRandomImage();
  };

  return (
    <Section>
      <H1LargeTitle700 text={tColorPalette().unsplashHeadText} color="gray1" />
      <PMedium700
        text={tColorPalette().unsplashMessage}
        color="gray5"
        marginTop="8px"
      />
      <ChangeImageButton
        onClick={findNewInspiration}
        variants={btnHoverTap}
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <PMedium700
          text={tColorPalette().changeImageButtonText}
          color="gray2"
        />
      </ChangeImageButton>
      {isLoading ? (
        <StaggerDots />
      ) : (
        <UnsplashImagesUl>
          {/* 검색 이용할 때 */}
          {/* {unsplashData?.response?.results.map((photo: Photo) => ( */}
          {unsplashData?.response?.map((photo: Photo) => (
            <li key={photo.id}>
              <img
                src={photo.urls.regular}
                alt={`Photo by ${photo.user.name} on Unplash`}
              />
            </li>
          ))}
        </UnsplashImagesUl>
      )}
    </Section>
  );
};

export default Unsplash;

const Section = styled.section`
  margin: 0 auto;

  h1,
  p {
    text-align: center;
  }
`;

const UnsplashImagesUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    display: flex; // 하단 5px 간격 제거
    margin-top: 72px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const ChangeImageButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  padding: 18px 32px;
  margin: 24px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Photo = {
  id: number;
  width: number;
  height: number;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
  alt_description: string;
};

// const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
//   const { user, urls } = photo;

//   return (
//     <>
//       <img className="img" src={urls.regular} />
//       <a
//         className="credit"
//         target="_blank"
//         href={`https://unsplash.com/@${user.username}`}
//       >
//         {user.name}
//       </a>
//     </>
//   );
// };

// unsplashApi.search
//   .getPhotos({
//     query: 'color',
//     orientation: 'landscape',
//   })
//   .then((result) => {
//     setUnsplashData(result);
//   })
//   .catch(() => {
//     console.log('something went wrong!');
//   });
