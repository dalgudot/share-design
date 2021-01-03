import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const PBody = ({ text, marginTop }: { text: any; marginTop: string }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <TextStyle
      type="p"
      text={useSetLanguage(text)}
      textSize="body"
      weight={fontWeight[300]}
      color={themeContext.gray1}
      lineHeight={1.55}
      marginTop={marginTop}
    />
  );
};

export default PBody;
