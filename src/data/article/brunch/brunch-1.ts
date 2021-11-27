import { ListType } from '../../../components/pages-components/index/list';

export const brunch1 = (): ListType => {
  return {
    type: 'brunch',

    url: 'https://brunch.co.kr/@dalgudot/74',

    category: {
      k: '프로덕트 디자인',
      e: 'PRODUCT DESIGN',
    },

    date: '2019.02.21',

    dateTime: '2019-02-21',

    title: {
      k: '회원가입을 쉽게 만드는 UI/UX 디자인은?',
      e: 'What is the UI/UX design to make sign-up easy?',
    },

    hashTags: {
      k: '#회원가입 #UI/UX디자인',
      e: '#SignUp #UIUXDesign',
    },
  };
};
