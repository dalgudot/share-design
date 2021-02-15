import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const PMedium400 = ({
  text,
  color,
  marginTop,
}: {
  text: any;
  color: any;
  marginTop?: string;
}) => {
  return (
    <TextStyle
      type="p"
      text={useSetLanguage(text)}
      textSize="medium"
      weight={fontWeight[400]}
      color={color}
      // letterSpacing="0.2px"
      lineHeight={1.7}
      marginTop={marginTop}
    />
  );
};

export default PMedium400;
