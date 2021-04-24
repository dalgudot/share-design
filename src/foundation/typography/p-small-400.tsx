import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

const PSmall400 = ({
  text,
  color,
  marginTop,
  opacity,
}: {
  text: any;
  color: string;
  marginTop?: string;
  opacity?: number;
}) => {
  return (
    <TextStyle
      type="p"
      text={useSetLanguage(text)}
      textSize="small"
      weight={fontWeight[400]}
      color={color}
      lineHeight={1.55}
      marginTop={marginTop}
      opacity={opacity}
    />
  );
};

export default PSmall400;
