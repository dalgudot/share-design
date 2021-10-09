import TextStyle from './atoms/text-style';
import { useSetLanguage } from './useSetLanguage';

const H1Title = ({
  text,
  color,
  weight,
  marginTop,
  className,
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
  className?: string;
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
        desktop: '53px', // Visual Correction
        mobile: '44px', // Visual Correction
      }}
      letterSpacing={{
        desktop: '-0.3px', // Visual Correction
        mobile: '-0.5px', // Visual Correction
      }}
      marginTop={marginTop}
      className={className}
    />
  );
};

export default H1Title;
