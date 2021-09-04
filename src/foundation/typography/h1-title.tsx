import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

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
      color={color}
      weight={weight || 700}
      textSize={{
        desktop: '39px',
        mobile: '32px',
      }}
      lineHeight={{
        desktop: '51px', // Visual Correction
        mobile: '42px', // Visual Correction
      }}
      letterSpacing={{
        desktop: '-0.3px', // Visual Correction
        mobile: '-0.5px', // Visual Correction
      }}
      marginTop={marginTop}
    />
  );
};

export default H1Title;
