import { motion } from 'framer-motion';
import styled from 'styled-components';
import PLarge from '../../../../foundation/typography/p-large';
import { mediaBreakPoint } from '../../../../styles/common';
import { buttonVariants } from '../../../../foundation/framer-motion/variants';

const UploadImage = ({
  image,
  setImage,
}: {
  image: any;
  setImage: Function;
}) => {
  const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // https://www.youtube.com/watch?v=iBonBC-ySgo
    const fileArray = Array.from(e.target.files as any).map((file) =>
      URL.createObjectURL(file)
    );
    setImage(fileArray);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    Array.from(e.target.files as any).map((file: any) =>
      URL.revokeObjectURL(file)
    );
  };

  return (
    <>
      <Line />
      {/* https://github.com/facebook/react/issues/310 */}
      <MotionUploadPhotoLabel
        variants={buttonVariants}
        whileHover="whileHover"
        whileTap="whileTap"
        htmlFor="upload-photo"
      >
        <input
          // display: 'none'은 접근성 문제 발생? -> none 아니면 iOS에서 버튼 크기가 커지는 문제 발생
          style={{ display: 'none' }}
          id="upload-photo"
          type="file"
          accept="image/*"
          multiple
          onChange={imageHandler}
        />
        <PLarge
          text={
            !image[0]
              ? { k: '이미지 업로드', e: 'Upload Image' }
              : { k: '새 이미지 업로드', e: 'Upload New Image' }
          }
          color="gray2"
          weight={700}
          lineHeight={{ desktop: '28px', mobile: '23px' }}
        />
      </MotionUploadPhotoLabel>
      {/* https://helloinyong.tistory.com/275 */}
    </>
  );
};

export default UploadImage;

const Line = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.gray7};

  margin: 72px 0 36px;
  height: 180px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 36px 0 24px;
    height: 96px;
  }
`;

const MotionUploadPhotoLabel = styled(motion.label)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.gray7};
  padding: 22px 32px;
  border-radius: 26px;

  /* for iOS */
  max-width: 241px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    border-radius: 24px;
    max-width: 216px;
  }
`;
