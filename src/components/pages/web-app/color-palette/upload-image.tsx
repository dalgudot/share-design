import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePalette } from 'react-palette';
import styled from 'styled-components';
import { tColorPalette } from '../../../../data/web-product/t-color-palette';
import { btnHoverTap } from '../../../../foundation/framer-motion/variants';
import PMedium700 from '../../../../foundation/typography/p-medium-700';
import PSmall400 from '../../../../foundation/typography/p-small-400';
import { mediaBreakPoint } from '../../../../styles/common';
import DragAndDropImageFile from './drag-and-drop-image-file';

const UploadImage = () => {
  const [image, setImage] = useState<string[]>([]);
  const { data, loading, error } = usePalette(image[0]);
  const dataArray = Object.values(data);

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
      <UploadButton>
        <MotionUploadPhotoLabel
          htmlFor="upload-photo"
          variants={btnHoverTap}
          whileHover="whileHover"
          whileTap="whileTap"
        >
          <input
            // display: 'none'은 접근성 문제 발생
            style={{ opacity: '0', height: '0', width: '0' }}
            id="upload-photo"
            type="file"
            accept="image/*"
            multiple
            onChange={imageHandler}
          />
          <PMedium700 text={tColorPalette().uploadImageButton} color="gray2" />
        </MotionUploadPhotoLabel>
      </UploadButton>
      {/* https://github.com/facebook/react/issues/310 */}
      <ColorChipWrap>
        {dataArray.map((hex?: string) => (
          <ColorChip key={hex} hex={hex} />
        ))}
      </ColorChipWrap>
      <UploadImageArea src={image[0]} />
      {/* https://helloinyong.tistory.com/275 */}
    </>
  );
};

export default UploadImage;

const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto 0;
`;

const MotionUploadPhotoLabel = styled(motion.label)`
  background-color: ${({ theme }) => theme.gray7};
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  padding: 18px 32px;
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

const UploadImageArea = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto 0;
`;
