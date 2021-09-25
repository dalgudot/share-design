import { tType } from './../../../type.d';
import { atom, useRecoilState } from 'recoil';

// https://recoiljs.org/docs/introduction/getting-started
const toastState = atom({
  key: 'toastState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const toastMessageState = atom({
  key: 'toastMessageState',
  default: '',
});

export const useToast = () => {
  const [toastOn, setToastOn] = useRecoilState(toastState);
  const [toastMessage, setToastMessage] = useRecoilState(toastMessageState);

  const showToast = (toastMessage: tType) => {
    // 연속 동작 방지
    if (toastOn === true) return;
    else if (toastOn === false) {
      setToastOn(true);
      setToastMessage(toastMessage as any);
      setTimeout(() => setToastOn(false), 1850);
    }
  };
  return { toastOn, toastMessage, showToast };
};
