import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

const H1Title700 = ({
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
      type="h1"
      text={useSetLanguage(text)}
      textSize="h1Title"
      weight={fontWeight[700]}
      color={color}
      letterSpacing="-1px"
      lineHeight={1.4}
      marginTop={marginTop}
    />
  );
};

export default H1Title700;
