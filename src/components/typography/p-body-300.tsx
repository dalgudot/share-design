import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const PBody300 = ({
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
      type="p"
      text={useSetLanguage(text)}
      textSize="body"
      weight={fontWeight[300]}
      color={color}
      lineHeight={1.55}
      marginTop={marginTop}
    />
  );
};

export default PBody300;
