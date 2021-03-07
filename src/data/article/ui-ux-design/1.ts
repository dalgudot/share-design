export const uiUxDesign = () => {
  return {
    url: '/article/ui-ux-design/1',

    category: {
      k: 'UI/UX 디자인',
      e: 'UI/UX Design',
    },

    date: {
      k: '2021년 3월 14일',
      e: '14 MAR 2021',
    },

    title: {
      k: '언어 전환 토글 버튼의 UI/UX 디자인은?',
      e: 'What is the UI/UX design of the language switch toggle button?',
    },

    summary: {
      k:
        '디자인 공유하기는 전 세계 사람들에게 UI/UX 디자인 경험을 공유하기 위한 공간이다. 내가 글을 쓸 수 있는 한국어와 영어 두 언어로 콘텐츠를 제공하고 있다. 영어가 익숙한 사용자가 한국어로 된 디자인 공유하기에 들어왔거나, 한국어가...',
      e:
        'SHARE DESIGN is a space for sharing UI/UX design experiences with people around the world. Contents are provided in both Korean and English, where I can write. In case a user who is familiar with English has entered to share a design in Korean...',
    },

    langChangeButton: {
      k: 'View in English',
      e: '한글로 보기',
    },

    langChangeButtonBadCase: {
      k: '한국어',
      e: 'English',
    },

    contents: [
      {
        k:
          '디자인 공유하기는 전 세계 사람들에게 UI/UX 디자인 경험을 공유하기 위한 공간이다. 내가 글을 쓸 수 있는 한국어와 영어 두 언어로 콘텐츠를 제공하고 있다. 영어가 익숙한 사용자가 한국어로 된 디자인 공유하기에 들어왔거나, 한국어가 익숙한 사용자가 영어로 된 디자인 공유하기에 들어온 상황을 대비해 디자인 공유하기에서는 모든 화면의 상단 헤더(Header) 컴포넌트에서 언어를 전환할 수 있는 토글 버튼을 제공하고 있다.',
        e:
          'SHARE DESIGN is a space for sharing UI/UX design experiences with people around the world. Contents are provided in both Korean and English, where I can write. In case a user who is familiar with English has entered to share a design in Korean, or a user who is familiar with Korean has entered to share a design in English, in the case of sharing design, you can switch languages in the header component at the top of all screens. It provides a toggle button that can be used.',
      },
      {
        k: '/images/ui-ux-design/001/img__01__ko.png',
        e: '/images/ui-ux-design/001/img__01__en.png',
      },
      {
        k:
          '디자인 공유하기에서는 모든 화면의 상단 헤더(Header) 컴포넌트의 오른쪽에서 언어를 전환할 수 있는 토글 버튼을 제공하고 있다. 사용자가 접속한 환경이 모바일인지, 태블릿인지, 데스크톱인지에 따라 헤더 컴포넌트의 모습이 바뀐다.',
        e:
          'In SHARE DESIGN, a toggle button to switch languages is provided on the right side of the header component at the top of all screens. The appearance of the header component changes depending on whether the user connected environment is mobile, tablet, or desktop.',
      },
      {
        k:
          '상단 헤더(Header) 컴포넌트는 사용자가 접속한 환경이 모바일인지, 태블릿인지, 데스크톱인지에 따라 모습이 바뀐다.',
        e:
          'The top header component changes appearance depending on whether the user connected environment is mobile, tablet, or desktop.',
      },
      {
        k:
          '토글(Toggle) 버튼은 두 가지 상태 중 하나를 선택하는 데 쓰이는 버튼을 뜻한다. 디자인 공유하기에는 언어가 한국어인 상태와 영어인 상태가 있다. 사용자가 언어 전환 토글 버튼을 누르면 언어가 한국어일 때는 영어로 바뀌고, 영어일 때는 한국어로 바뀐다. ',
        e:
          'Toggle button is a button used to select one of two states. There are two types of design sharing: Korean and English. When the user presses the language switch toggle button, the language changes to English when the language is Korean, and changes to Korean when the language is English.',
      },
      {
        k:
          "최초의 언어 전환 토글 버튼은 아래와 같았다. 핵심은 버튼 텍스트의 사용자 중심 글쓰기(UX Writing)였다. 디자인 공유하기가 한국어인 상태일 때에는 'View in English'라는 문구로 돼 있으며 버튼을 누르면 언어가 영어로 바뀌며, 영어인 상태일 때에는 '한글로 보기'라는 문구로 돼 있고 버튼을 누르면 언어가 한국어로 바뀐다. 버튼의 텍스트가 버튼을 누르면 바뀌게 되는 언어로 돼 있어 해당 언어가 필요한 사용자가 쉽게 인지할 수 있도록 디자인한 게 특징이다.",
        e:
          "The first language switch toggle button was as follows. The key was UX Writing, the user-centered writing of button text. When design sharing is in Korean, the phrase'View in English' is displayed. When the button is pressed, the language is changed to English, and when the button is pressed, the language is displayed in Korean. Changes. The text of the button is in a language that changes when the button is pressed, so it is designed to be easily recognized by users who need the language.",
      },
      {
        k: '이 버튼은 동작한다',
        e: 'This button works',
      },
      {
        k:
          "난 이 버튼처럼 사용자가 한 행동에 반응하는 UI(User Interface) 요소는 UI가 어떤 반응을 보일지 알려주는 게 좋은 사용자 경험(UX, User eXperience)을 만든다고 생각한다. 만약 한국어 상태인 디자인 공유하기의 토글 버튼이 아래 버튼처럼 텍스트가 현재 상태인 '한국어'라면 어떨까? 사용자는 저 버튼을 누르면 UI가 무슨 반응을 보일지 알 수가 없다. 버튼을 눌러봐야 이 버튼이 다른 언어로 바꾸는 버튼이고, 버튼의 텍스트는 현재 상태를 나타내고 있다는 걸 알 수 있다. 이런 버튼은 사용자에게 불필요한 고민을 하게 해 좋지 않은 UX를 만든다.",
        e:
          "I think that UI (User Interface) elements that respond to actions made by the user like this button make a good user experience (UX, User eXperience) to tell how the UI will react. What if the toggle button of Share Design in Korean is'Korean' where the text is in the current state like the button below? The user has no way of knowing what the UI will react to when they press that button. When you press the button, you know that it's a button that switches to a different language, and the text on the button indicates the current state. These buttons make users worry unnecessary and create a bad UX.",
      },
      {
        k:
          '사용자가 버튼을 동작시켜야 버튼의 역할을 알 수 있는 버튼 텍스트는 좋지 않은 UX를 만든다.',
        e:
          "The button text that the user must operate the button to know the button's role makes a bad UX.",
      },

      {
        k:
          '하지만 이 버튼은 화면의 조형적인 완성도를 해쳤기 때문에 디자인을 바꿨다. 데스크톱 화면보다는 모바일 화면에서 조형적 완성도를 해쳤다. 버튼 텍스트 치고는 길이가 길기 때문에 언어 전환 버튼이 화면의 면적을 꽤 많이 차지해 화면의 균형감이 떨어졌다. 게다가 디자인 공유하기의 모든 화면 상단에 있는 헤더 오른쪽 영역에 버튼이 있기 때문에 헤더 아래쪽에 있는 콘텐츠 내용으로 시선이 가는 걸 방해했다.',
        e:
          "However, this button changed the design because it spoiled the formative completion of the screen. On the mobile screen rather than the desktop screen, the formative completion was undermined. Since the length of the button text is long, the language switch button occupies a considerable amount of the screen, and the balance of the screen is poor. What's more, there is a button in the area to the right of the header at the top of every screen in Share Design, which hinders the gaze from getting to the content content at the bottom of the header.",
      },
      {
        k: '/images/ui-ux-design/001/img__02__ko.png',
        e: '/images/ui-ux-design/001/img__02__en.png',
      },
      {
        k: '기존 언어 전환 토글 버튼 디자인은 시각적 잡음을 만든다고 판단했다.',
        e:
          'I thought the existing language switch toggle button design made visual noise.',
      },
      {
        k: '기존 언어 전환 토글 버튼 디자인은 시각적 잡음을 만든다고 판단했다.',
        e:
          'I thought the existing language switch toggle button design made visual noise.',
      },
      {
        k:
          '여러 시행착오를 거친 최종 디자인은 현재 이 화면의 상단에 있는 헤더 컴포넌트의 오른쪽에 있는 토글 버튼이다. 토글 버튼의 왼쪽에는 전 세계에 디자인 경험을 공유한다는 의미와 언어 전환을 할 수 있다는 의미를 담은 지구 모양 아이콘을 그려 넣었다. 토글 버튼의 오른쪽에는 한국어를 뜻하는 영어 단어 korean의 앞쪽 두 알파벳 ko와 영어를 뜻하는 영어 단어 english의 앞쪽 두 알파벳 en을 각 언어의 상징으로 써서 현재 언어 상태는 왼쪽에 흰색(#E0E0EA)으로 활성화된 상태로 보여주고, 오른쪽에는 회색(#68686C)으로 비활성화된 상태 및 버튼을 눌렀을 때 어떤 상태로 바뀌는지 사용자가 알 수 있도록 디자인했다. ',
        e:
          'The final design, after several trials and errors, is currently a toggle button to the right of the header component at the top of this screen. On the left side of the toggle button, a globe-shaped icon is drawn that means that you can share your design experience with the world and that you can switch languages. On the right side of the toggle button, the first two letters ko of the English word korean meaning Korean and the first two letters en of the English word english meaning English are used as symbols for each language, and the current language status is activated as white (#E0E0EA) on the left. It is designed to show the state in which it is turned off, and to the right in gray (#68686C) to let the user know the deactivated state and what state it changes to when the button is pressed.',
      },
      {
        k:
          "사용자가 이 언어 전환 토글 버튼을 눌렀을 때 언어가 바뀐다는 '느낌'을 주며 사용자와 인터랙션(interaction)하기 위해 ko와 en이 서로 교차되면서 색이 각 상태에 맞게 바뀌도록 모션을 디자인했다. 개발자에게 이 모션 디자인 가이드를 전달하면 아래와 같이 전달할 수 있다.",
        e:
          "The motion is designed so that the color changes according to each state as ko and en cross each other to give the user a 'feel' that the language changes when the user presses this language switch toggle button. If you deliver this motion design guide to the developer, you can deliver it as follows.",
      },
      {
        k: '모션 디자인 가이드 이미지',
        e: '/images/ui-ux-design/001/img__02__en.png',
      },
      {
        k: '글',
        e: '',
      },
      {
        k: '문제가 생긴 화면 이미지',
        e: '/images/ui-ux-design/001/img__02__en.png',
      },
      {
        k: '글',
        e: '',
      },
      {
        k: '수정된 모션 디자인 가이드 이미지',
        e: '/images/ui-ux-design/001/img__02__en.png',
      },
      {
        k: '마치며',
        e: 'Epilogue',
      },
      {
        k:
          "기획부터 디자인, 개발, 콘텐츠 제작, 번역까지 모든 일을 혼자서 해내고 싶었기에 디자인 공유하기 프로젝트의 첫 콘텐츠인 이 글, '언어 전환 토글 버튼의 UI/UX 디자인은?'을 배포하기까지 참 오랜 시간이 걸렸습니다. 이제 시작입니다. 꾸준히 새로운 UI/UX 디자인에 도전하며 디자인 공유하기를 꾸며볼 생각입니다. 전 세계의 많은 디자이너가 공유해주신 경험들이 제게 큰 도움이 됐듯이, 제 경험이 누군가에게 좋은 영감이 되기를 바랍니다.(끝)",
        e:
          "I wanted to do everything from planning to design, development, content creation, and translation by myself, so it took a long time to distribute this article, the first content of the project,'What is the UI/UX design of the language switch toggle button?' It took this. Now is the beginning. I plan to continue to challenge new UI/UX designs and share designs. Just as the experiences shared by many designers around the world have helped me a lot, I hope that my experience will be a good inspiration for someone.(End)",
      },
    ],
  };
};
