import { motion } from 'framer-motion';
import styled from 'styled-components';

const UploadImage = ({ setImage }: { setImage: Function }) => {
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
      <PhotoUploadArea>
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
        </MotionUploadPhotoLabel>
      </PhotoUploadArea>
      {/* https://helloinyong.tistory.com/275 */}
    </>
  );
};

export default UploadImage;

const PhotoUploadArea = styled(motion.div)`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  // white-space: nowrap: 줄바꿈을 하지 않겠다
`;

const MotionUploadPhotoLabel = styled(motion.label)`
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  max-width: 133px;
  padding: 0 40px; // 가로만 패딩 적용, 패딩이 없으면 가로로 작아짐. -> max-width와 함께 이용.
  height: 133px;
  // Text Area 아래 생기는 5px 영역 보정
  /* margin: 35px 0 0 16px;  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* display: inline-block; */
  cursor: pointer;
`;
