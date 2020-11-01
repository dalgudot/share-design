import Login from "../components/login/login";
import AuthService from "../service/auth_survice";

const authService = new AuthService();

const Test = () => {
  return (
    <>
      <Login authService={authService} />
    </>
  );
};

export default Test;
