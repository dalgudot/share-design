export const productDesign1 = () => {
  return {
    url: '/article/product-design/1',

    category: {
      k: '프로덕트 디자인',
      e: 'PRODUCT DESIGN',
    },

    date: '2021.09.22',

    dateTime: '2021-09-22',

    title: {
      k: '좋은 UX를 만드는 UI 버튼의 인터랙션 디자인은?',
      e: 'What is the interaction design of the UI button for good UX?',
    },

    hashTags: {
      k: '#인터랙션디자인 #버튼',
      e: '#InteractionDesign #Button',
    },

    references: [
      {
        url: 'https://www.framer.com/docs/',
        title: 'Framer Motion API',
        content:
          'Complete documentation of the Motion animation library and Framer’s code features.',
      },
    ],

    contents: [
      {
        key: 'PLarge',
        content: {
          k: "최근 디자인 공유하기(SHARE DESIGN) 프로젝트의 첫 번째 프로덕트인 '팔레트 공유하기(SHARE PALETTE)'를 배포했다. 이미지를 업로드하면 이미지에서 6개의 색을 추출해 색상 팔레트를 만들어주는 디지털 프로덕트다. 🎨",
          e: '',
        },
      },
      {
        key: 'img',
        content: {
          k: '/images/product/share-palette/share_palette_thumbnail_ko.png',
          e: '/images/product/share-palette/share_palette_thumbnail_en.png',
        },
        // caption: '',
        alt: 'Photo by Rodion Kutsaev on Unsplash',
      },
      {
        key: 'PLarge',
        content: {
          k: '미리 기획해 놓은 기능들을 하나씩 추가해 나가며 프로덕트를 발전시킬 계획이라 2021년 9월 22일 현재 팔레트 공유하기는 대단히 단순한 프로덕트다. 팔레트 공유하기는 3가지 크기의 버튼으로 사용자와 인터랙션(Interaction)한다. 3가지 크기의 버튼으로 사용자와 소통한다는 뜻이다. 아래는 이미지를 업로드하기 전후의 팔레트 공유하기의 모습이다.',
          e: '',
        },
      },
      {
        key: 'img',
        content: {
          k: '/images/article/product/001/product_design_01_ko.png',
          e: '/images/article/product/001/product_design_01_en.png',
        },
        caption: {
          k: "마우스 포인터를 올려두거나 손가락으로 터치하는 것과 같은 사용자의 물리적 행동에 반응하는 UI 요소인 버튼만 꼭지점을 둥글게 디자인하고, 다른 요소들은 꼭지점을 모두 직각으로 디자인해 시각적으로 구분했다. 이미지를 업로드하면 버튼명은 '이미지 업로드'에서 '새 이미지 업로드'로 바뀐다.",
          e: '',
        },
        alt: {
          k: "마우스 포인터를 올려두거나 손가락으로 터치하는 것과 같은 사용자의 물리적 행동에 반응하는 UI 요소인 버튼만 꼭지점을 둥글게 디자인하고, 다른 요소들은 꼭지점을 모두 직각으로 디자인해 시각적으로 구분했다. 이미지를 업로드하면 '이미지 업로드' 버튼명은 '새 이미지 업로드'로 바뀐다.",
          e: '',
        },
      },
      {
        key: 'PLarge',
        content: {
          k: "마우스 포인터로 사용자와 인터랙션하는 데스크톱 UI에서 버튼의 인터랙션은 총 4가지 상태로 구분할 수 있다. 첫 번째는 사용자의 눈동자 움직임(시각)과 인터랙션하는 '기본 상태'다. 사용자는 버튼과 다른 UI 요소를 시각적으로 구분해 버튼을 발견한다. 두 번째는 '마우스 포인터를 올린 상태(Hover)', 세 번째는 버튼을 '누른 상태(Pressed 또는 Active)', 네 번째는 디자이너가 정한 어떤 조건을 충족하지 않아 사용자가 버튼을 눌러도 반응하지 않는 '사용 불가 상태(Disabled)'다.",
          e: '',
        },
      },

      {
        key: 'ExampleComponent',
        component_key: '1',
        caption: { k: `기본 상태`, e: 'Default State' },
      },
      {
        key: 'ExampleComponent',
        component_key: '2',
        caption: { k: '마우스 포인터를 올린 상태', e: 'Hover State' },
      },
      {
        key: 'ExampleComponent',
        component_key: '3',
        caption: { k: '누른 상태', e: 'Pressed State' },
      },
      {
        key: 'ExampleComponent',
        component_key: '4',
        // caption: { k: '사용 불가 상태', e: 'Disabled State' },
      },

      {
        key: 'PLarge',
        content: {
          k: "\u00A0\u00A0\u00A0위에서 '호버 상태'는 변화가 없어보이지만 '기본 상태'의 1.05배만큼 커진 상태다. 모바일에서는 마우스 포인터가 아닌 손가락으로 UI를 조작하기 때문에 '호버 상태'는 있을 수 없다. 따라서 모바일에서는 기본 상태, 누른 상태, 사용 불가 상태 3가지 상태로 인터랙션을 디자인한다. 현재 디자인 공유하기에서는 사용자가 버튼을 쓰지 못하도록 해야 하는 경우는 사용자가 댓글을 쓸 때밖에 없기 때문에 '사용 불가 상태'는 각 아티클의 '댓글 남기기' 화면에서만 확인할 수 있다.",
          e: 'Write a response',
        },
      },

      {
        key: 'H2Title',
        content: {
          k: '디지털 UI의 버튼을 물리적인 버튼을 누르는 것처럼 느끼도록',
          e: '',
        },
      },

      {
        key: 'PLarge',
        content: {
          k: "4가지 중 특히 중요하게 생각한 건 '누른 상태'다. 데스크톱과 모바일에서 모두 쓰이는 상태이고, 사용자가 이 버튼의 기능을 쓰고 싶다는 의사를 명확히 밝힌 것이기 때문이다.",
          e: '',
        },
      },

      {
        key: 'PLarge',
        content: {
          k: '\u00A0\u00A0\u00A0난 사용자가 컴퓨터 키보드를 누를 때 누르는 걸 느낄 수 있는 것처럼, 디자인 공유하기에서 버튼을 눌렀을 때에도 비슷한 느낌을 받을 수 있도록 하고 싶었다. UI 화면 상에서 버튼이 물리적으로 눌리는 건 아니지만, 마치 눌리는 것처럼 모션을 디자인해 물리적인 버튼을 누르는 것과 같은 사용자 경험(UX)을 만들고 싶었다. 나는 이런 섬세한 인터랙션 디자인이 모이고 모여 좋은 사용감을 만들고, 사용자에게 좋은 사용자 경험(UX)을 줄 수 있다고 믿는다.',
          e: `I wanted to make sure that when a user presses a button on SHARE DESIGN, they feel similar to pressing a computer keyboard. Altough it's not real sense, I would like to make a User Experience(UX) like pressing a physical button by designing the motion as if it was pressed. In my opinion, I believe that this delicate interaction design make a good usability and give users a good User Experience(UX).`,
        },
      },
      {
        key: 'img',
        content:
          '/images/article/product/001/glenn-carstens-peters-unsplash.jpg',
        caption: '',
        alt: '',
      },

      {
        key: 'PLarge',
        content: {
          k: '책상 위에 책상 위로 튀어나오지 않은 평평한 버튼이 있다고 상상해보자. 그 버튼을 누르면 책상 내부로 버튼이 쑥 들어가며 작동한다. 이때 버튼에는 그림자가 생겨 누르기 전보다 약간 어두워질 것이고, 사용자의 눈과의 거리가 조금 더 생겼기 때문에 누르기 전보다 작게 보일 것이다. 이런 시각적 변화를 디지털 프로덕트의 UI에 적용하면 사용자가 디지털 UI의 버튼을 물리적인 버튼을 누르는 것처럼 느낄 수 있지 않을까?',
          e: '',
        },
      },
      {
        key: 'PLarge',
        content: {
          k: '\u00A0\u00A0\u00A0이를 구현하기 위해 이용한 시각적 요소는 크기와 투명도다. 사용자가 버튼을 누를 때 크기는 조금 작아지고, 투명도를 조절해 색은 바뀌는 모션을 추가한 것이다. 위에서 상상한 상황에서 버튼 색은 누르기 전보다 눌렀을 때 어두워지지만, 디자인 공유하기는 다크 모드와 라이트 모드를 모두 대응해야 하기 때문에 투명도를 낮춰 색이 약해지도록 해서 어두워지는 게 아닌 색이 변하는 걸 보여주는 식으로 디자인했다. 일반적으로 버튼 색이 기본 상태보다 밝아지며 사용자의 눈에 더 잘 띄도록 하는 디자인을 많은 프로덕트에서 찾아볼 수 있다.',
          e: '',
        },
      },

      {
        key: 'PLarge',
        content: {
          k: '\u00A0\u00A0\u00A0데스크톱에서는 호버 상태에서 버튼의 크기가 살짝 커지도록 디자인했기 때문에 버튼을 누를 때 버튼의 크기 변화가 모바일보다 크다. 아래 버튼을 통해 직접 동작시켜볼 수 있으며, 버튼을 누르면 토스트 메시지를 통해 사용자가 버튼을 눌러 하고 싶었던 일이 잘 완료됐다는 걸 알려주며 인터랙션한다. 예를 들면 팔레트 공유하기에서 팔레트를 복사하면 팔레트가 잘 복사됐다는 걸 사용자에게 알려준다.',
          e: '',
        },
      },

      // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
      {
        key: 'ExampleComponent',
        component_key: '5',
      },

      {
        key: 'H2Title',
        content: {
          k: '프레이머 모션 API로 버튼 인터랙션 구현',
          e: 'Implementing Interaction of button with Framer Motion API',
        },
      },

      {
        key: 'PLarge',
        content: {
          k: "아래는 '팔레트 공유하기'에서 실제로 쓰고 있는 버튼의 코드다. 프레이머 모션 API(Framer Motion API)를 활용했다. 디자인 공유하기에서는 언어는 Typescript, 주요 라이브러리는 React, styled-component, Framer Motion, 프레임워크는 Next.js를 쓰고 있다.",
          e: "Below is the code of the real button used in 'SHARE PALETTE'. In SHARE DESIGN, the programing language is Typescript, the main library is React, styled-component, Framer Motion, and the framework is Next.js.",
        },
      },

      {
        key: 'ExampleComponent',
        component_key: '6',
        content: `// extract-colors.tsx 
// React Component
...
<CopyToClipboard
  text={organizedPaletteString}
  onCopy={() => showToast(textCopyPaletteToast)}
>
  <MotionBtnPaletteCopy
    variants={buttonVariants}
    whileHover="whileHover"
    whileTap="whileTap"
  >
    <PMedium
      text={textbtnCopyPalette}
      color="gray2"
      weight={700}
    />
  </MotionBtnPaletteCopy>
</CopyToClipboard>
...`,
      },

      {
        key: 'ExampleComponent',
        component_key: '7',
        content: `// extract-colors.tsx 
// styled-components
const MotionBtnPaletteCopy = styled(motion.button)\`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: \${({ theme }) => theme.gray7};
  padding: 18px 28px;

  border-radius: 23px;  
  margin-top: 36px;

  @media all and (max-width: \${mediaBreakPoint.first}) {
    border-radius: 21px;
    margin-top: 28px;
}
\`;`,
      },

      {
        key: 'ExampleComponent',
        component_key: '8',
        content: `// variants.ts
// Framer Motion variants      
export const buttonVariants = {
  whileHover: {
    scale: 1.05,
  },

  whileTap: {
    scale: 0.93,
    opacity: 0.7,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
  },
};`,
      },

      {
        key: 'H2Title',
        content: {
          k: '마치며',
          e: 'Epilogue',
        },
      },
      {
        key: 'PLarge',
        content: {
          k: '이번에 팔레트 공유하기 버튼의 인터랙션을 디자인하면서 디자인 공유하기의 모든 버튼에 같은 인터랙션을 적용했습니다. 살아있는 프로덕트 같은 느낌이 들어 상당히 만족스럽습니다.',
          e: '',
        },
      },

      {
        key: 'PLarge',
        content: {
          k: '\u00A0\u00A0\u00A0팔레트 공유하기는 아직 단순한 프로덕트이고 거의 같은 프로덕트들도 찾아보면 여럿 있지만, 팔레트 공유하기로 추출한 6개의 색 외에 새로운 색을 팔레트에 추가하는 기능, Unsplash에서 무작위로 이미지를 가져와 색상 팔레트를 생성하는 기능, 사람들과 내가 만든 팔레트를 공유할 수 있는 기능 등과 같은 미리 기획해둔 아이디어들을 모두 구현하면 디자이너들이 실무나 개인 작업에서 꽤 유용하게 쓸 수 있는 프로덕트가 될 수 있지 않을까 싶습니다.',
          e: '',
        },
      },

      {
        key: 'PLarge',
        content: {
          k: '\u00A0\u00A0\u00A0팔레트 공유하기(SHARE PALETTE)에 추가하면 좋을 것 같은 기능이나, 디자인 작업을 하시다가 있으면 좋겠다고 생각했던 프로덕트가 있으시다면 댓글로 남겨주세요! 🙏',
          e: '',
        },
      },

      {
        key: 'ExampleComponent',
        component_key: '9',
      },
    ],
  };
};
