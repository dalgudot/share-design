import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const H4Title = ({
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
      type="h4"
      text={useSetLanguage(text)}
      color={color}
      weight={weight || 700}
      textSize={{
        desktop: '21px',
        mobile: '18px',
      }}
      lineHeight={{
        desktop: '25px',
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

export default H4Title;
