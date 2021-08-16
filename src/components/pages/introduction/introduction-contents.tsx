import PLarge from '../../../foundation/typography/p-medium';

const IntroductionContents = ({
  contentsArray,
}: {
  contentsArray: object[];
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
