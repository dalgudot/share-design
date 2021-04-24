import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

const PSmall700 = ({
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
      textSize="small"
      weight={fontWeight[700]}
      color={color}
      lineHeight={1.55}
      marginTop={marginTop}
    />
  );
};

export default PSmall700;
