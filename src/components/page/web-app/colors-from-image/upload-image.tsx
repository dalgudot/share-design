import { motion } from 'framer-motion';
import styled from 'styled-components';
import PSmall400 from '../../../../foundation/typography/p-small-400';
import { mediaBreakPoint } from '../../../../styles/common';
import DragAndDropImageFile from './drag-and-drop-image-file';
import { createApi } from 'unsplash-js';
import { useEffect, useState } from 'react';
import StaggerDots from '../../../../foundation/framer-motion/stagger-dots';

// https://unsplash.com/documentation
//  https://stackblitz.com/edit/unsplash-js-typescript-n5sc6z?file=index.tsx
const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY ?? '',
});

const UploadImage = ({
  image,
  setImage,
}: {
  image: string[];
  setImage: Function;
}) => {
  const [unsplashData, setUnsplashData] = useState<any>();

  useEffect(() => {
    // unsplashApi.photos
    //   .getRandom({
    //     count: 30,
    //   })
    //   .then((result) => {
    //     console.log('result', result);
    //     setUnsplashData(result);
    //   })
    //   .catch(() => {
    //     console.log('something went wrong!');
    //   });
    unsplashApi.search
      .getPhotos({
        query: 'color',
        orientation: 'landscape',
      })
      .then((result) => {
        setUnsplashData(result);
      })
      .catch(() => {
        console.log('something went wrong!');
      });
  }, []);

  // console.log('unsplashData', unsplashData);

  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // https://www.youtube.com/watch?v=iBonBC-ySgo
    const fileArray = Array.from(e.target.files as any).map((file) =>
      URL.createObjectURL(file)
    );
    // const imageFile = URL.createObjectURL(e.target.files);
    // setImage((prevImages: string[]) => prevImages.concat(fileArray));

    // 새로운 배열은 보여주는 곳에서 추가해야 중복 없어짐.
    setImage(fileArray);

    Array.from(e.target.files as any).map((file: any) =>
      URL.revokeObjectURL(file)
    );
  };

  if (unsplashData === null) {
    return (
      <>
        <StaggerDots />
      </>
    );
  } else {
    return (
      <>
        {/* https://github.com/facebook/react/issues/310 */}
        <MotionUploadPhotoLabel htmlFor="upload-photo">
          <input
            // display: 'none'은 접근성 문제 발생
            style={{ opacity: '0', height: '0', width: '0' }}
            id="upload-photo"
            type="file"
            accept="image/*"
            multiple
            onChange={imageHandler}
          />

          <UploadButton>
            <PSmall400
              text={{ k: '이미지 업로드', e: 'Image upload' }}
              color="gray2"
            />
          </UploadButton>
        </MotionUploadPhotoLabel>

        <UnsplashImagesUl>
          {/* 검색 이용할 때 */}
          {unsplashData?.response?.results.map((photo: Photo) => (
            // {unsplashData?.response?.map((photo: Photo) => (
            <li key={photo.id}>
              <img
                src={photo.urls.regular}
                alt={`Photo by ${photo.user.name} on Unplash`}
              />
            </li>
          ))}
        </UnsplashImagesUl>
        {/* https://helloinyong.tistory.com/275 */}
      </>
    );
  }
};

export default UploadImage;

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

const MotionUploadPhotoLabel = styled(motion.label)`
  border: solid 1px ${({ theme }) => theme.gray5};
  max-width: 540px;
  cursor: pointer;
  margin-top: 72px;
  display: flex;
  justify-content: center;
  align-items: center;

  :after {
    content: '';
    display: block;
    /* padding이 부모의 '너비'에 의해 계산됨 */
    padding-bottom: 100%;
  }

  // 바뀌는 요소
  width: 50%;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    width: 100%;
  }
`;

const UploadButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  padding: 18px 32px;
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
