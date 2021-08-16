import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

const PMedium = ({
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
      type="p"
      text={useSetLanguage(text)}
      textSize={{
        mobile: '14px',
        desktop: '18px',
      }}
      weight={weight || 400}
      color={color}
      letterSpacing=""
      lineHeight={1.55}
      marginTop={marginTop}
    />
  );
};

export default PMedium;
