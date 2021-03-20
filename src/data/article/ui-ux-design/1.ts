export const uiUxDesign1 = () => {
  return {
    url: '/article/ui-ux-design/1',

    category: {
      k: 'UI/UX 디자인',
      e: 'UI/UX Design',
    },

    date: {
      k: '2021년 3월 28일',
      e: '28 MAR 2021',
    },

    dateTime: '2021-03-28',

    title: {
      k: '언어 전환 토글 버튼의 UI/UX 디자인은?',
      e: 'What is the UI/UX design of the language switch toggle button?',
    },

    summary: {
      k:
        '디자인 공유하기는 전 세계 사람들에게 UI/UX 디자인 경험을 공유하기 위한 공간이다. 내가 글을 쓸 수 있는 한국어와 영어 두 언어로 콘텐츠를 제공하고 있다. 영어가 익숙한 사용자가 한국어로 된 디자인 공유하기에 들어왔거나, 한국어가 익숙한...',
      e:
        'SHARE DESIGN is a space for sharing UI/UX design experience with people around the world. Contents are provided in both Korean and English, where I can write. In case a user familiar with English entered the SHARE DESIGN in Korean...',
    },

    langChangeButton: {
      k: 'View in English',
      e: '한글로 보기',
    },

    references: [
      {
        url:
          'https://developer.apple.com/design/human-interface-guidelines/ios/controls/switches/',
        title: {
          k: 'Human Interface Guidelines',
          e: 'Human Interface Guidelines',
        },
        content: {
          k:
            'A switch is a visual toggle between two mutually exclusive states — on and off.',
          e:
            'A switch is a visual toggle between two mutually exclusive states — on and off.',
        },
      },
      {
        url: 'https://material.io/components/radio-buttons',
        title: {
          k: 'Material Design',
          e: 'Material Design',
        },
        content: {
          k: 'Radio buttons allow users to select one option from a set.',
          e: 'Radio buttons allow users to select one option from a set.',
        },
      },
      {
        url: 'https://www.framer.com/motion/',
        title: {
          k: 'Framer Motion API',
          e: 'Framer Motion API',
        },
        content: {
          k:
            'A production-ready motion library for React. Utilize the power behind Framer...',
          e:
            'A production-ready motion library for React. Utilize the power behind Framer...',
        },
      },
      {
        url: 'https://styled-components.com/',
        title: {
          k: 'styled-components',
          e: 'styled-components',
        },
        content: {
          k:
            'Visual primitives for the component age. Use the best bits of ES6 and CSS...',
          e:
            'Visual primitives for the component age. Use the best bits of ES6 and CSS...',
        },
      },
    ],

    contents: [
      {
        k:
          '디자인 공유하기는 전 세계 사람들에게 UI/UX 디자인 경험을 공유하기 위한 디지털 프로덕트(Digital Product)다. 내가 글을 쓸 수 있는 한국어와 영어 두 언어로 콘텐츠를 제공하고 있다. 영어가 익숙한 사용자가 한국어로 된 디자인 공유하기에 들어왔거나, 한국어가 익숙한 사용자가 영어로 된 디자인 공유하기에 들어온 상황을 대비해 디자인 공유하기에서는 모든 화면의 상단 헤더(Header)에서 언어를 전환할 수 있는 토글 버튼을 제공하고 있다.',
        e:
          'SHARE DESIGN is a digital product to share UI/UX design experience with people around the world. Contents are provided in both Korean and English, where I can write. In case a user familiar with English entered the SHARE DESIGN in Korean, or a user familiar with Korean entered the SHARE DESIGN in English, SHARE DESIGN provides a toggle button that allows user to switch languages at the top header of all screens.',
      },
      {
        k:
          '\u00A0\u00A0\u00A0토글(Toggle) 버튼은 두 가지 상태 중 하나를 선택하는 데 쓰이는 버튼을 뜻한다. 디자인 공유하기에는 언어가 한국어인 상태와 영어인 상태가 있다. 사용자가 언어 전환 토글 버튼을 누르면, 언어가 한국어일 때는 영어로 상태가 바뀌고 영어일 때는 한국어로 상태가 바뀐다.',
        e:
          '\u00A0\u00A0\u00A0A toggle button is a button used to select one of two states. There are two types of SHARE DESIGN: English and Korean. When the user presses the language switch toggle button, the status changes to English when the language is Korean, and changes to Korean when the language is English.',
      },
      {
        k: '/images/ui-ux-design/001/img__01__ko.png',
        e: '/images/ui-ux-design/001/img__01__en.png',
      },
      {
        k:
          '디자인 공유하기에서는 모든 UI 화면 상단 헤더(Header) 컴포넌트의 오른쪽에 언어를 전환할 수 있는 토글 버튼을 제공하고 있다(2021년 3월 기준). 사용자가 접속한 환경이 모바일인지, 태블릿인지, 데스크톱인지에 따라 헤더 컴포넌트의 모습이 바뀐다.',
        e:
          'SHARE DESIGN provides a toggle button to switch languages on the right side of the header component at the top of all UI screens(as of March 2021). The appearance of the header component changes depending on whether the user connected environment is mobile, tablet, or desktop.',
      },
      {
        k: '사용자 중심 글쓰기(UX Writing)를 고려한 디자인',
        e: 'Design in consideration of user-centered writing(UX Writing)',
      },
      {
        k:
          "최초의 언어 전환 토글 버튼은 아래와 같았다. 핵심은 버튼 문구의 사용자 중심 글쓰기(UX Writing)였다. 디자인 공유하기가 한국어인 상태일 때 버튼 문구는 'View in English'이고, 버튼을 누르면 언어가 영어로 바뀐다. 영어인 상태일 때 버튼 문구는 '한글로 보기'이고, 버튼을 누르면 언어가 한국어로 바뀐다. 버튼을 눌렀을 때 UI가 어떻게 바뀌는지 명확히 알 수 있도록 버튼 문구를 디자인했다. 또한, 버튼 문구를 버튼을 눌렀을 때 바뀌게 되는 언어로 보여줘 해당 언어가 필요한 사용자가 버튼의 기능을 쉽게 알아챌 수 있도록 했다.",
        e:
          "The first language switch toggle button was as follows. The key was user-centered writing(UX Writing) of button text. When SHARE DESIGN is in Korean, the button text is 'View in English', and when you press the button, the language changes to English. When SHARE DESIGN is in English, the button text is '한글로 보기(View in Korean)', and when you press the button, the language changes to Korean. The button text has been designed so that users can clearly see how the UI changes when the button is pressed. In addition, the wording of the button is displayed in the language that changes when the button is pressed, so that users who need the language can easily recognize the function of the button.",
      },
      {
        k:
          '최초의 언어 전환 토글 버튼은 사용자 중심 글쓰기(UX Writing)를 신경 써서 디자인했다. 이 버튼은 동작한다.',
        e:
          'The first language switch toggle button was designed with care for user-centered writing(UX Writing). This button works.',
      },
      {
        k:
          '난 이 버튼처럼 사용자의 행동에 반응하는 UI(User Interface, 사용자 인터페이스) 요소의 문구에는 사용자의 행동에 UI가 어떤 반응을 보일지 알려주는 문구를 쓰는 게 좋은 UX(User eXperience, 사용자 경험)를 만드는 사용자 중심 글쓰기(UX Writing)라 생각한다.',
        e:
          "I think that writing a text that tells how the UI(User Interface) will react to the user's actions is a user-centered writing(UX Writing) that makes a good UX(User eXperience) in the case of the text of the UI element that responds to the user's actions like this button.",
      },
      {
        k:
          "\u00A0\u00A0\u00A0만약 한국어 상태인 디자인 공유하기의 토글 버튼의 문구가 'View in English'가 아닌 현재 상태인 '한국어'라면 어떨까? 사용자는 저 버튼을 눌렀을 때 UI가 어떤 반응을 보일지 알 수가 없다. 버튼을 눌러본 뒤에야 이 버튼이 언어를 전환하는 버튼이고, 버튼의 문구는 현재 언어를 나타내고 있다는 사실을 알게 된다. 이런 버튼은 사용자에게 불필요한 고민을 하게 할뿐만 아니라, 버튼이 어떤 역할을 하는지 사용자가 동작시켜봐야 알 수 있기 때문에 좋지 않은 UX를 만든다.",
        e:
          "\u00A0\u00A0\u00A0What if the text of the toggle button of SHARE DESIGN in Korean is not 'View in English', but 'Korean', which is the current state? The user has no way of knowing how the UI will react when that button is pressed. It is only after user press the button that user know that this button is a button to switch languages, and the text on the button indicates the current language. Such a button not only causes unnecessary trouble to the user, but also makes a bad UX because the user can only know what role the button does by operating it.",
      },
      {
        k: '/images/ui-ux-design/001/img__02__ko.png',
        e: '/images/ui-ux-design/001/img__02__en.png',
      },
      {
        k:
          '사용자의 행동에 반응하는 UI 요소의 문구는 사용자의 행동에 UI가 어떤 반응을 보일지 알려주는 문구를 쓰는 게 좋은 UX를 만드는 사용자 중심 글쓰기(UX Writing)라 생각한다.',
        e:
          "I think that writing a text that tells how the UI will react to the user's actions is a user-centered writing(UX Writing) that makes a good UX in the case of the text of the UI element that responds to the user's actions",
      },

      {
        k:
          '하지만 최초의 디자인은 모바일 환경에서 조형적 완성도를 해쳤다. 면적을 많이 차지해 상단 헤더 컴포넌트의 균형감을 떨어뜨렸다. 또한 넓은 면적이 시선을 끌어 헤더 아래쪽에 있는 콘텐츠로 시선이 가는 걸 방해했다.',
        e:
          'However, the first design hurt the visual completeness in mobile environment. It occupies a lot of space, making the top header component out of balance. In addition, the large area attracted attention and hindered the gaze from going to the content under the header.',
      },

      {
        k: '/images/ui-ux-design/001/img__03__ko.png',
        e: '/images/ui-ux-design/001/img__03__en.png',
      },
      {
        k:
          '최초의 언어 전환 토글 버튼의 넓은 면적이 사용자의 시선을 끌어 헤더 아래쪽에 있는 콘텐츠로 시선이 가는 걸 방해한다고 판단했다.',
        e:
          "I judgeed that the large area of the first language switch toggle button grabs the user's attention and hinders the gaze from going to the content under the header.",
      },
      {
        k: '최종 언어 전환 토글 버튼 디자인은?',
        e: 'What is the final design of language switch toggle button?',
      },
      {
        k:
          '최종 디자인은 아래와 같다. 토글 버튼의 왼쪽에는 전 세계 사람들과 디자인 경험을 공유한다는 의미를 담아 지구 모양 아이콘을 그려서 배치했다. 이 아이콘은 버튼의 기능이 언어 전환이라는 걸 직관적으로 알려주기도 한다.',
        e:
          "The final design is as follows. On the left side of the toggle button, a earth-shaped icon was drawn and placed, meaning that I share my UI/UX Design Experience with people around the world. This icon also intuitively informs the user that the button's function is to switch languages.",
      },
      {
        k: '언어 전환 토글 버튼의 최종 디자인. 이 버튼은 동작한다.',
        e:
          'The final design of the language switch toggle button. This button works.',
      },
      {
        k:
          "아이콘 오른쪽 영역은 한국어를 뜻하는 영어 단어 'korean'의 앞쪽 두 알파벳 'ko'와 영어를 뜻하는 영어 단어 'english'의 앞쪽 두 알파벳 'en'을 각 언어의 상징으로 써서 디자인했다. 활성화된 현재 언어 상태는 구분선 왼쪽에 흰색(#E0E0EA)으로 배치했다. 버튼을 눌렀을 때 전환될 언어 상태는 구분선 오른쪽에 비활성화된 상태를 의미하는 회색(#68686C)으로 배치했다. 다시 말해 구분선 왼쪽에는 현재 언어 상태, 구분선 오른쪽에는 버튼을 누르면 바뀔 언어 상태를 배치해 버튼을 눌렀을 때 어떤 언어로 바뀔지 사용자가 직관적으로 알 수 있도록 디자인했다.",
        e:
          "I designed the area to the right of the icon by using the first two letters 'ko' of the English word 'korean' meaning Korean and the first two letters 'en' of the English word 'english' meaning English as symbols for each language. The active language state is placed in white(#E0E0EA) to the left of the divider line. The language state that will be switched when the button is pressed is placed in gray(#68686C), which means inactive state, to the right of the divider line. In other words, the current language state is placed on the left side of the divider line, and the language state that will change when the button is pressed is placed on the right side of the divider line, so that users can intuitively know which language will be changed when the button is pressed.",
      },
      {
        k: '언어 전환 토글 버튼의 모션 디자인은?',
        e: 'What is the motion design of the language switch toggle button?',
      },

      {
        k:
          "사용자가 이 언어 전환 토글 버튼을 눌렀을 때 사용자에게 언어가 바뀐다는 '느낌'을 주며 인터랙션(interaction)하기 위해 'ko'와 'en'이 서로 교차되면서 색이 각 상태에 맞게 바뀌도록 모션을 디자인했다.",
        e:
          "In order to interact with user and give the user a 'feel' that the language changes when the user presses this language switch toggle button, I designed the motion so that 'ko' and 'en' cross each other and the color changes according to each state.",
      },

      {
        k: '/images/ui-ux-design/001/img__04__ko.png',
        e: '/images/ui-ux-design/001/img__04__en.png',
      },
      {
        k:
          '이 모션은 Framer motion API로 개발했다. gray2는 #E0E0EA, gray5는 #68686C, spring은 Framer motion API의 기본 bezier curve를 의미한다.',
        e:
          'This motion was developed with the Framer motion API. Gray2 is #E0E0EA, gray5 is #68686C, and spring is the basic bezier curve of Framer motion API.',
      },
      {
        k:
          '그런데 모션을 추가하면서 문제가 하나 생겼다. 모바일에서는 내가 의도한 대로 모션이 동작했지만, 태블릿과 데스크톱에서 모션을 실행하면 언어 전환 토글 버튼의 간격이 아래처럼 이상해졌다.',
        e:
          'However, there was a problem while adding motion. On mobile, the motion worked as I intended, but when I ran the motion on the tablet and desktop, the spacing of the language switch toggle button became weird as shown below.',
      },

      {
        k: '/images/ui-ux-design/001/img__05__ko.png',
        e: '/images/ui-ux-design/001/img__05__en.png',
      },
      {
        k:
          '가로 길이가 768px 이상인 기기에서 언어 전환 토글 버튼의 모션이 동작하면 두 상태 중 한 상태는 비정상적인 모습이 되는 문제가 발생했다.',
        e:
          'When the motion of the language switch toggle button was activated on a device with a width of 768px or more, one of the two states became abnormal.',
      },

      {
        k:
          "이는 디자인 공유하기가 반응형 웹이라 발생하는 문제였다. 사용자 기기의 가로 길이가 768px 미만이라면 언어 전환 토글 버튼의 텍스트인 'ko'와 'en'의 폰트 크기가 18px이고, 기기의 가로 길이가 768px 이상이라면 'ko'와 'en'의 폰트 크기가 21px이라 'ko'와 'en' 텍스트의 가로 길이가 기기의 가로 길이에 따라 달라져서 레이아웃이 틀어진 것이다. 'ko'와' en'의 텍스트 크기가 18px일 때와 21px일 때 둘의 가로 길이 차이는 4px로, 사용자 기기의 가로 길이가 768px 이상일 때에는 768px 미만일 때의 x 좌표의 움직임보다 4px 더 움직이면 정확한 위치로 이동한다.",
        e:
          "This was a problem that occurred because SHARE DESIGN is a responsive web. If the user device's width is less than 768px, the font size of 'ko' and 'en', the text of the language switch button, is 18px, and if the device's width is 768px or more, the font size of 'ko' and 'en' is 21px. This is because the horizontal length of the text 'ko' and 'en' is different depending on the width of the device, so the layout is wrong. When the text size of 'ko' and 'en' is 18px and 21px, the difference in width is 4px. When the width of the user's device is 768px or more, it moves to the correct position if it moves 4px more than the movement of the x-coordinate when it is less than 768px.",
      },

      {
        k: '/images/ui-ux-design/001/img__06__ko.png',
        e: '/images/ui-ux-design/001/img__06__en.png',
      },
      {
        k:
          "가로 길이가 768px 미만인 기기에서 'ko'와 'en'의 폰트 크기는 18px이고, 768px 이상인 기기에서는 'ko'와 'en'의 폰트 크기가 21px이라 768px 이상인 기기에서는 'ko', 'en'의 가로 길이가 길어진다. 따라서 ko와 en이 이동하는 위치에 오차가 생기게 되고, 오차만큼 'ko'와 'en'을 더 움직이면 의도한 대로 모션이 작동한다.",
        e:
          "In devices with a width of less than 768px, the font size of 'ko' and 'en' is 18px, and in devices with a width of 768px or more, the font size of 'ko' and 'en' is 21px. So, on devices that are 768px or more, the width of 'ko' and 'en' becomes longer. Therefore, there is an error in the position where 'ko' and 'en' move, and if you move 'ko' and 'en' more than the error, the motion operates as intended.",
      },
      {
        k: '마치며',
        e: 'Epilogue',
      },
      {
        k:
          "기획부터 디자인, 웹 개발, 앱 개발, 콘텐츠 제작, 번역까지 모든 일을 혼자서 해내고 싶었기에 디자인 공유하기 프로젝트의 첫 콘텐츠인 이 글, '언어 전환 토글 버튼의 UI/UX 디자인은?'을 배포하기까지 참 오랜 시간이 걸렸습니다. 이제 시작입니다. 꾸준히 새로운 UI/UX 디자인에 도전하며 디자인 공유하기를 꾸며볼 생각입니다. 전 세계의 많은 디자이너가 공유해주신 경험들이 제게 큰 도움이 됐듯이, 제 경험이 누군가에게 좋은 영감이 되기를 바랍니다.",
        e:
          "It took a long time to publish this article, 'What is the UI/UX design of the language switch toggle button?'. This is because I wanted to do everything from planning to design, web development, app development, content creation, and translation by myself. Now is the beginning. I will continue to challenge new UI/UX designs and decorate SHARE DESIGN. As the experiences shared by many designers around the world have helped me a lot, I hope that my experience will be a good inspiration for someone.",
      },
    ],
  };
};
