import { atom, useRecoilState } from 'recoil';

const modalState = atom<boolean>({
  key: 'modal',
  default: false,
});

export const useModal = () => {
  const [modalOn, setModalOn] = useRecoilState(modalState);

  const openModal = () => {
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  return { modalOn, openModal, closeModal };
};
