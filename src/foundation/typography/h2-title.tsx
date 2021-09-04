import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const H3Title = ({
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
      type="h2"
      text={useSetLanguage(text)}
      color={color}
      weight={weight || 700}
      textSize={{
        desktop: '34px',
        mobile: '28px',
      }}
      lineHeight={{
        desktop: '47px', // Visual Correction
        mobile: '38px', // Visual Correction
      }}
      letterSpacing={{
        desktop: '-0.1px',
        mobile: '0px',
      }}
      marginTop={marginTop}
    />
  );
};

export default H3Title;
