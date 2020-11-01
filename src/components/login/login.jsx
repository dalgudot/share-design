const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent);
  };

  const onLogout = () => {
    authService.logout();
  };
  return (
    <section>
      <section>
        <h1>
          로그인
          <ul>
            <li>
              <button onClick={onLogin}>Google</button>
            </li>
            <li>
              <button onClick={onLogin}>Github</button>
            </li>
            <li>
              <button onClick={onLogout}>로그아웃</button>
            </li>
          </ul>
        </h1>
      </section>
    </section>
  );
};

export default Login;
