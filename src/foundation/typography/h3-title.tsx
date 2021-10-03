import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';

const H3Title = ({
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
      type="h3"
      text={useSetLanguage(text)}
      color={color}
      weight={weight || 700}
      textSize={{
        desktop: '24px',
        mobile: '21px',
      }}
      lineHeight={{
        desktop: '31px',
        mobile: '28px',
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

export default H3Title;
