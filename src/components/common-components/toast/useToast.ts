import { tType } from '../../../../type';
import { atom, useRecoilState } from 'recoil';

const toastState = atom<boolean>({
  key: 'toast',
  default: false,
});

const toastMessageState = atom<string>({
  key: 'toastMessage',
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
      setToastMessage(toastMessage as string | ((currVal: string) => string));
      setTimeout(() => setToastOn(false), 1850);
    }
  };
  return { toastOn, toastMessage, showToast };
};

// https://recoiljs.org/docs/introduction/getting-started
// https://deview.kr/data/deview/session/attach/Recoil_%E1%84%8B%E1%85%AA%E1%86%BC%E1%84%8B%E1%85%B1%E1%84%85%E1%85%B3%E1%86%AF_%E1%84%80%E1%85%A8%E1%84%89%E1%85%B3%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC.pdf
// atom: 데이터 조각, selector 1) atom에서 파생된 데이터 조각 2) 데이터를 반환하는 순수 함수

// https://ui.toast.com/weekly-pick/ko_20200616
