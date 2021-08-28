import TextStyle from './atoms/text-style';
import { useSetLanguage } from '../../library/hooks/useSetLanguage';

const H2Title = ({
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
      textSize={{
        mobile: '21px',
        desktop: '24px',
      }}
      weight={weight || 700}
      color={color}
      letterSpacing="-1px"
      lineHeight={1.4}
      marginTop={marginTop}
    />
  );
};

export default H2Title;
