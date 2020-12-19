import styled from 'styled-components';
import initFirebase from '../../utils/initFirebase';
import firebase from 'firebase/app';
import { useEffect } from 'react';

initFirebase();

const Writing = () => {
  return (
    <>
      <MultiLineTextField
        name="Visit Book"
        placeholder="10자 이상 부탁드릴게요 🙏"
        rows="10"
        cols="33"
        minlength="10"
        autoComplete="on"
      />
      <h1>쓰기</h1>
    </>
  );
};

export default Writing;

const MultiLineTextField = styled.textarea`
  resize: none;
  padding: 24px;

  :invalid {
    border: 2px dashed red;
  }

  :valid {
    border: 2px solid lime;
  }
`;
