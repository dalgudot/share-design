import { useSelector, useDispatch } from "react-redux";

export const useLanguageChange = () => {
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const languageChange = () =>
    dispatch({
      type: "CHANGELANGUAGE",
    });
  return { lang, languageChange };
};
