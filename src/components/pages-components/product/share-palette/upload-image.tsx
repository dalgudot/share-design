import styled from 'styled-components';
import PLarge from '../../../../foundation/typography/p-large';
import { mediaBreakPoint } from '../../../../styles/common';

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
      <Line />
      {/* https://github.com/facebook/react/issues/310 */}
      <MotionUploadPhotoLabel htmlFor="upload-photo">
        <input
          // display: 'none'은 접근성 문제 발생
          style={{ opacity: '0', width: '0', height: '0' }}
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

  margin: 72px 0 24px;
  height: 144px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 36px 0 24px;
    height: 96px;
  }
`;

const MotionUploadPhotoLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray7};
  padding: 20px 32px;
  border-radius: 21px;
  cursor: pointer;

  /* 탭바 env 위해 */
  margin-bottom: 144px;

  max-width: 280px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    max-width: 240px;
  }
`;
