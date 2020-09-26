import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../../i18n";

const Homepage = ({ t }) => {
  return (
    <>
      <h1>{t("test")}</h1>

      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko")
        }
      >
        {t("test")}
      </button>
    </>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
