import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const H2Title700 = ({
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
      type="h2"
      text={useSetLanguage(text)}
      textSize="h2Title"
      weight={fontWeight[700]}
      color={color}
      letterSpacing="-1px"
      lineHeight={1.3}
      marginTop={marginTop}
    />
  );
};

export default H2Title700;
