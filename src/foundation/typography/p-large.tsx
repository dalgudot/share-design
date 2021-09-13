import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const PLarge = ({
  text,
  color,
  weight,
  lineHeight,
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
  lineHeight?: {
    desktop: string;
    mobile: string;
  };
  marginTop?: string;
}) => {
  return (
    <TextStyle
      type="p"
      text={useSetLanguage(text)}
      color={color}
      weight={weight || 400}
      textSize={{
        desktop: '21px',
        mobile: '18px',
      }}
      lineHeight={
        lineHeight || {
          desktop: '36px', // 21px * 1.618 - based on the body text
          mobile: '30px', // 18px * 1.618 - based on the body text
        }
      }
      letterSpacing={{
        desktop: '0px',
        mobile: '0px',
      }}
      marginTop={marginTop}
    />
  );
};

export default PLarge;
