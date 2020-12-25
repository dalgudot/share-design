const Login = ({ authService }: any) => {
  const onLogin = (event: any) => {
    authService.login(event.currentTarget.textContent);
  };

  const onLogout = () => {
    authService.logout();
  };

  return (
    <>
      <button onClick={onLogin}>
        <h1>구글로그인</h1>
      </button>
    </>
  );
};

export default Login;
