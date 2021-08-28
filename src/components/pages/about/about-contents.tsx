import PMedium from '../../../foundation/typography/p-medium';

const AboutContents = ({ contentsArray }: { contentsArray: object[] }) => {
  return (
    <>
      {contentsArray.map((text, index) => (
        <PMedium //
          key={index}
          text={text}
          color="gray3"
          marginTop="36px"
        />
      ))}
    </>
  );
};

export default AboutContents;
