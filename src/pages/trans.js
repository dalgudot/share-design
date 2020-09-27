import PropTypes from "prop-types";
import { i18n, Link, withTranslation } from "../../i18n";
import styled from "styled-components";

const Homepage = ({ t }) => (
  <CenterAlign>
    <h1>{t("lang")}</h1>
    <button
      type="button"
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "de" : "en")}
    >
      {t("description")}
    </button>
  </CenterAlign>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);

const CenterAlign = styled.section`
  width: 100vw;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 36px;
    font-size: 24px;
    font-weight: 100;
    color: var(--white);
    padding: 18px 36px;
    background-color: transparent;
    border: solid 1px var(--white);
  }
`;
