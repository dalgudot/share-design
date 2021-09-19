import { useState } from 'react';

export const useToast = () => {
  const [toastOn, setToastOn] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const showToast = (toastMessage: string) => {
    // 연속 동작 방지
    if (toastOn === true) return;
    else if (toastOn === false) {
      setToastOn(true);
      setToastMessage(toastMessage);
      setTimeout(() => setToastOn(false), 1850);
    }
  };
  return { toastOn, toastMessage, showToast };
};
