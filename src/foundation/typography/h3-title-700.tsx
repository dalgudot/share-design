import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

const H3Title700 = ({
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
      type="h3"
      text={useSetLanguage(text)}
      textSize="h3Title"
      weight={fontWeight[700]}
      color={color}
      letterSpacing="-0.8px"
      lineHeight={1.4}
      marginTop={marginTop}
    />
  );
};

export default H3Title700;
