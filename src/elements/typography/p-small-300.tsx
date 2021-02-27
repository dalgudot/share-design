import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const PSmall300 = ({
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
      weight={fontWeight[300]}
      color={color}
      lineHeight={1.55}
      marginTop={marginTop}
      opacity={opacity}
    />
  );
};

export default PSmall300;
