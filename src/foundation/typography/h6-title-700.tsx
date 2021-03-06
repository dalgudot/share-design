import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

const H6Title700 = ({
  text,
  color,
  marginTop,
}: {
  text: any;
  color: string;
  marginTop?: string;
}) => {
  return (
    <TextStyle
      type="h6"
      text={useSetLanguage(text)}
      textSize="h6Title"
      weight={fontWeight[700]}
      color={color}
      lineHeight={1.3}
      marginTop={marginTop}
    />
  );
};

export default H6Title700;
