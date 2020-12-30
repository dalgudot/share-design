import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  ToastContainer,
  toast,
  Slide,
  cssTransition,
  Bounce,
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Zoom = cssTransition({
  enter: 'zoomIn',
  exit: 'zoomOut',
  // duration: [210, 450],
});

// 커스텀 토스트 애니메이션 만들기
export const toastify = () => {
  console.log('Show Toast');
  toast('Wow so easy !', {
    transition: Zoom,
    toastId: 'CopyToClipboard',
    // onClose: debounceToast(),
  });
};

// Toast 미리 Mount
const Toast = () => {
  console.log('Toast Component Mount');
  return (
    <>
      <ToastBox
        draggablePercent={65}
        autoClose={1850}
        hideProgressBar={true}
        newestOnTop={true}
        pauseOnHover={false}
        closeOnClick={false}
      />
    </>
  );
};

export default Toast;
// export default React.memo(Toast);

const In = keyframes`
  from {
    opacity: 0;
  }
  
  to {    
    opacity: 1;
  }
`;
const Out = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ToastBox = styled(ToastContainer)`
  top: 56px;
  padding: 0 16px;
  width: 100%;
  max-width: 480px;
  left: 50%;
  transform: translateX(-50%);

  .zoomIn {
    animation: ${In};
  }

  .zoomOut {
    animation: ${Out};
    animation-delay: 0.6s;
  }

  .Toastify__toast {
    min-height: unset;
    height: unset !important;
  }

  .Toastify__toast--rtl,
  .Toastify__toast--dark,
  .Toastify__toast--default,
  .Toastify__toast--info,
  .Toastify__toast--success,
  .Toastify__toast--warning,
  .Toastify__toast--error {
    padding: 12px 16px !important;
    border-radius: 2px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    background-color: rgba(54, 54, 54, 0.9);
    color: ${({ theme }) => theme.whitePrimary};

    * {
      font-size: 16px;
      color: ${({ theme }) => theme.whitePrimary};
    }
  }

  .Toastify__toast-body {
    margin: 0;
  }

  .Toastify__close-button,
  .Toastify__close-button--default,
  .Toastify__close-button > svg,
  .Toastify__close-button:hover,
  .Toastify__close-button:focus {
    display: none;
  }
`;
