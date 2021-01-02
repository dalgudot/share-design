import styled from 'styled-components';
import { useEffect, useState } from 'react';
import TextStyle from '../../components/typography/text-style';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { fontWeight } from '../../components/typography/font';

// callback function
export const useToast = () => {
  const [toast, setToast] = useState(false);
  return { toast, setToast };
};

const MyToast = ({ message, toast, setToast }: MyToastType) => {
  const themeContext = useContext(ThemeContext);

  return (
    <ToastStyle toast={toast}>
      <TextStyle
        type="p"
        text={message}
        textSize="small"
        weight={fontWeight[400]}
        color={themeContext.whitePrimary}
      />
    </ToastStyle>
  );
};

export default MyToast;

interface ToastStyleTypes {
  toast: boolean;
}

const ToastStyle = styled.div<ToastStyleTypes>`
  display: ${({ toast }) => (toast === true ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 16px 36px;
  border: var(--border-radius-primary);
  position: fixed;
  z-index: 30000;

  /* Grassmorphism */
  opacity: 0.999;
  color: ${({ theme }) => theme.gray3};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);

  -webkit-transition: color 0.11s ease-in-out,
    -webkit-backdrop-filter 0.11s ease-in-out;
  transition: color 0.11s ease-in-out, backdrop-filter 0.11s ease-in-out;
`;

// type
interface MyToastType {
  message: string;
  toast: boolean;
  setToast: Function;
}
