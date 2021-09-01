import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const PLarge = ({
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
        mobile: '18px',
        desktop: '21px',
      }}
      weight={weight || 400}
      color={color}
      letterSpacing=""
      lineHeight={1.67}
      marginTop={marginTop}
    />
  );
};

export default PLarge;
