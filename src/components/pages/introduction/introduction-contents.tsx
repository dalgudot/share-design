import PLarge from '../../../foundation/typography/p-large';

const IntroductionContents = ({
  contentsArray,
}: {
  contentsArray: {
    k: string;
    e: string;
  }[];
}) => {
  return (
    <>
      {contentsArray.map((text, index) => (
        <PLarge //
          key={index}
          text={text}
          color="gray3"
          marginTop="36px"
        />
      ))}
    </>
  );
};

export default IntroductionContents;
