import styled from 'styled-components';
import PMedium400 from '../../../elements/typography/p-medium-400';

const IntroductionContents = ({
  contentsArray,
}: {
  contentsArray: object[];
}) => {
  return (
    <>
      {contentsArray.map((text, index) => (
        <PMedium400 //
          key={index}
          text={text}
          color="gray3"
          marginTop="24px"
        />
      ))}
    </>
  );
};

export default IntroductionContents;
