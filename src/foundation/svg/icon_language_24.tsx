import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';

const IconLanguage24 = () => {
  const themeContext = useContext(ThemeContext);
  const color: string = themeContext.gray0;

  return (
    <motion.svg //
      whileTap={{ scale: 1.7, rotateY: 720 }}
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <g
        id="icon_language_24"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M11.7797867,3.50630764 C14.8975452,5.88345485 16.5,8.81577528 16.5,12 C16.5,15.2364043 14.8446007,18.2125843 12.0850842,20.6127131 C9.10282039,18.1172115 7.5,15.1845869 7.5,12 C7.5,8.81678659 9.10143178,5.88531557 11.7797867,3.50630764 Z"
          id="intersection"
          stroke={color}
        ></path>
        <circle id="circle" stroke={color} cx="12" cy="12" r="8.5"></circle>
        <line
          x1="12"
          y1="4"
          x2="12"
          y2="20"
          id="vertical-center"
          stroke={color}
        ></line>
        <line
          x1="4"
          y1="15"
          x2="20"
          y2="15"
          id="bottom-line"
          stroke={color}
        ></line>
        <line x1="4" y1="9" x2="20" y2="9" id="top-line" stroke={color}></line>
      </g>
    </motion.svg>
  );
};

export default IconLanguage24;
