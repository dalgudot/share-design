import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const PMedium = ({
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
        desktop: '18px',
        mobile: '14px',
      }}
      lineHeight={{
        desktop: '27px',
        mobile: '22px',
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

export default PMedium;
