import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

function Login({ toggle }) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ username, password })
        .then((data) => dispatch(data))
        .then((() => {
          history.push('/');
        }))
        .catch((v) => {
          setError(v.request.response.message);
        });
  };

  return (
    <div className="login-view" id="login-view">

      {/* LEFT SIDE COMPONENT */}
      <div className="login-left">

        {/* COMPONENT CENTER RECTANGLE */}
        <div className="login-center">

          {/* PINK SQUARE */}
          <div className="side-box"></div>
          {/* FORM BLOCK */}
          <div className="login-form">

            {error && (
                <div  className="error">
                  {error}
                </div>
            )}


            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="submit">
              <button className="login-btn" onClick={handleLogin}>
                LOGIN
              </button>
            </div>

          </div>
          {/* END FORM */}

        </div>
        {/* END BLOCK CENTER */}

      </div>
      {/* END LEFT SIDE */}


      {/* SWIPE BLOCK RIGHT */}
      <div className="login-right">

        {/* BUTTON SWIPE */}
        <div className="button-swipe" onClick={() => toggle("register-view", "login-view")}>
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z" />
          </svg>
        </div>

        {/* TEXT SWIPE */}
        <div className="text-swipe">REGISTER</div>
      </div>
      {/* END SWIPE BLOCK */}

    </div>
  );
}

export default Login;