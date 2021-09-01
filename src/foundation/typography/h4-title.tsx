import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const H4Title = ({
  text,
  color,
  weight,
  marginTop,
}: {
  text:
    | {
        k: string;
        e: string;
      }
    | string;
  color: string;
  weight?: 100 | 300 | 400 | 700;
  marginTop?: string;
}) => {
  return (
    <TextStyle
      type="h4"
      text={useSetLanguage(text)}
      textSize={{
        mobile: '18px',
        desktop: '21px',
      }}
      weight={weight || 700}
      color={color}
      letterSpacing="-0.2px"
      lineHeight={1.4}
      marginTop={marginTop}
    />
  );
};

export default H4Title;
