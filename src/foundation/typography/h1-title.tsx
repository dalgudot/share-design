import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

const H1Title = ({
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
      type="h1"
      text={useSetLanguage(text)}
      textSize={{
        mobile: '24px',
        desktop: '36px',
      }}
      weight={weight || 700}
      color={color}
      letterSpacing="-0.75px"
      lineHeight={1.4}
      marginTop={marginTop}
    />
  );
};

export default H1Title;
