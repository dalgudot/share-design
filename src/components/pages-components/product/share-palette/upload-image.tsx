import styled from 'styled-components';
import DragAndDropImageFile from './drag-and-drop-image-file';

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
      <DragAndDropImageFile>
        <div>
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
        </div>
      </DragAndDropImageFile>
      {/* https://helloinyong.tistory.com/275 */}
    </>
  );
};

export default UploadImage;

const MotionUploadPhotoLabel = styled.label`
  margin: 0 auto;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.gray1};
  width: 300px;
  height: 300px;
  display: flex;
  cursor: pointer;
`;
