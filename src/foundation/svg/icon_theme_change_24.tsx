import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const IconThemeChange24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.gray0;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3C16.9706 3 21 7.02944 21 12C21 16.8818 17.1132 20.8558 12.2654 20.9962L12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20V4Z"
        fill={color}
      />
    </svg>
  );
};

export default IconThemeChange24;
