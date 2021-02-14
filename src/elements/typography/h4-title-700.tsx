import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const H4Title700 = ({
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
      type="h4"
      text={useSetLanguage(text)}
      textSize="h4Title"
      weight={fontWeight[700]}
      color={color}
      lineHeight={1.3}
      marginTop={marginTop}
    />
  );
};

export default H4Title700;
