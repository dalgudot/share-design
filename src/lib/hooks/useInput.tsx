import { useState } from 'react';

export const useInput = (initialValue: string, validator: Function) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 아래는 오른쪽 코드와 같은 표현임 const value = e.target.value
    const {
      target: { value },
    } = e;

    let willUpdate = true;
    // validator는 Function | undifined이기 때문에 아래 조건 필요
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    willUpdate && setValue(value);
  };

  return { value, onChange };
};

// validator
// 길이 제한
const maxLength = (value: string, max: number) => {
  value.length <= max;
};

// 포함하고 싶지 않은 단어
const notIncludeWords = (value: string, words: string) => {
  !value.includes(words);
};
