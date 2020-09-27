import { useSelector, shallowEqual, useDispatch } from "react-redux";

const useLanguageChange = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: "CHANGELANGUAGE",
    });
  return { lang, languageChange };
};

const LangChan = () => {
  const { lang, languageChange } = useLanguageChange();
  return (
    <>
      <h1>{lang}</h1>;<button onClick={languageChange}>언어 변환</button>
    </>
  );
};

export default LangChan;

export function getStaticProps() {
  return {
    props: {
      initialReduxState: {
        language: "ko",
      },
    },
  };
}
