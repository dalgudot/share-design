import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { createApi } from 'unsplash-js';
import StaggerDots from '../../../../foundation/framer-motion/stagger-dots';
import H1LargeTitle700 from '../../../../foundation/typography/h1-large-title-700';
import PMedium700 from '../../../../foundation/typography/p-medium-700';
import { tColorPalette } from '../../../../data/web-product/t-color-palette';
import { motion } from 'framer-motion';
import { btnHoverTap } from '../../../../foundation/framer-motion/variants';
import { usePalette } from 'react-palette';
import { useWindowHeight } from '../../../../library/hooks/useWindowHeight';

// https://unsplash.com/documentation
//  https://stackblitz.com/edit/unsplash-js-typescript-n5sc6z?file=index.tsx

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

const Unsplash = () => {
  const [unsplashData, setUnsplashData] = useState<any>();
  const [unsplashImage, setUnsplashImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const unsplashApi = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? '',
  });

  const height = useWindowHeight();

  // console.log('unsplashImage', unsplashImage);
  const { data, loading, error } = usePalette(unsplashImage);
  const dataArray = Object.values(data);

  // console.log('dataArray', dataArray);

  useEffect(() => {
    setUnsplashImage(unsplashData?.response[0]?.urls?.regular);
  }, [unsplashData]);

  const getRandomImage = (): void => {
    setIsLoading(true);

    unsplashApi.photos
      .getRandom({
        // featured: true,
        query: 'colorful scenery',
        // query: searchKeyword,
        count: 1,
      })
      .then((result) => {
        // console.log('result', result);
        result && setIsLoading(false);
        // console.log(result.response);
        setUnsplashData(result);
        // result.errors && setUnsplashData('');
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  };

  // useEffect(() => {
  //   getRandomImage();
  // }, []);

  const findInspiration = (): void => {
    getRandomImage();
    setUnsplashImage(unsplashData?.response[0]?.urls?.regular);
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
        onClick={findInspiration}
        variants={btnHoverTap}
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <PMedium700
          text={tColorPalette().changeImageButtonText}
          color="gray2"
        />
      </ChangeImageButton>

      {/* <input type="search" id="unsplash-search" onChange={handleChange} />
      <ChangeImageButton
        onClick={findInspiration}
        variants={btnHoverTap}
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <PMedium700 text={{ k: '버튼', e: 'Button' }} color="gray2" />
      </ChangeImageButton> */}

      {isLoading ? (
        <StaggerDots />
      ) : (
        <>
          <ColorChipWrap>
            {dataArray.map((hex?: string) => (
              <ColorChip key={hex} hex={hex} />
            ))}
          </ColorChipWrap>

          <UnsplashImagesUl height={height}>
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
        </>
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

const UnsplashImagesUl = styled.ul<{ height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: ${({ theme }) => theme.maxWidth.Paragraph}; */
  max-width: 1080px;

  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    display: flex; // 하단 5px 간격 제거
    margin-top: 24px;
  }

  img {
    width: 100%;
    height: 100%;
    /* max-height: ${({ height }) => 0.6 * height}px; */
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

const ColorChipWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 72px auto 0;
`;

const ColorChip = styled.div<{ hex?: string }>`
  background-color: ${({ hex }) => hex};
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

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
