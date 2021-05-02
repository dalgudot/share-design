import { motion } from 'framer-motion';
import styled from 'styled-components';
import PSmall400 from '../../../../foundation/typography/p-small-400';
import { mediaBreakPoint } from '../../../../styles/common';
import DragAndDropImageFile from './drag-and-drop-image-file';

const UploadImage = ({
  image,
  setImage,
}: {
  image: string[];
  setImage: Function;
}) => {
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
      {/* https://helloinyong.tistory.com/275 */}
    </>
  );
};

export default UploadImage;

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
