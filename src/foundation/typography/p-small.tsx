import TextStyle from './atoms/text-style';
import { useSetLanguage } from './useSetLanguage';

const PSmall = ({
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
      type="p"
      text={useSetLanguage(text)}
      color={color}
      weight={weight || 400}
      textSize={{
        desktop: '14px',
        mobile: '10px',
      }}
      lineHeight={{
        desktop: '17px',
        mobile: '12px',
      }}
      letterSpacing={{
        desktop: '0px',
        mobile: '0px',
      }}
      marginTop={marginTop}
      className={className}
    />
  );
};

export default PSmall;
