import styled, { keyframes } from 'styled-components';
import { ToastContainer, toast, Slide, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import H1Text from '../typo/h1';
import { fontSize, fontWeight } from '../typo/font';

const Toast = () => {
  console.log('Toast Component Mount');
  const toastify = () => toast('Wow so easy !');

  return (
    <>
      <button onClick={toastify}>
        <H1Text
          text="링크 복사"
          mobileSize={fontSize[18]}
          tabletSize={fontSize[20]}
          desktopSize={fontSize[20]}
          weight={fontWeight[700]}
        />
      </button>
      <ToastContainer />
    </>
  );
};

export default Toast;
