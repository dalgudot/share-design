import TextStyle from './atoms/text-style';
import { useSetLanguage } from './useSetLanguage';

const H2Title = ({
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
      type="h2"
      text={useSetLanguage(text)}
      color={color}
      weight={weight || 700}
      textSize={{
        desktop: '34px',
        mobile: '27px',
      }}
      lineHeight={{
        desktop: '47px', // Visual Correction
        mobile: '39px', // Visual Correction
      }}
      letterSpacing={{
        desktop: '-0.1px',
        mobile: '0px',
      }}
      marginTop={marginTop}
      className={className}
    />
  );
};

export default H2Title;
