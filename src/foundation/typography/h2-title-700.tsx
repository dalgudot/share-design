import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

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
      lineHeight={1.4}
      marginTop={marginTop}
    />
  );
};

export default H2Title700;
