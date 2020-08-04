import React, { useState } from "react";
import { registerUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser({ username, name, surname, email, password, phone }).then((data) => dispatch(data));
  };

  return (
    <div className="register_view">

      {/* LEFT SIDE COMPONENT */}
      <div className="register-left">

        {/* COMPONENT CENTER RECTANGLE */}
        <div className="register-center">


          {/* BLACK SQUARE */}
          <div className="side-box-register"></div>

          {/* FORM BLOCK */}
          <div className="register-form">
            <div className="flex-name">
              <div className="username">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

            </div>

            <div className="surname">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="submit">
              <button className="register-btn" onClick={handleRegister}>
                REGISTER
              </button>
            </div>

          </div>
          {/* END FORM */}

        </div>
        {/* END BLOCK CENTER */}

      </div>
      {/* END LEFT SIDE */}


      {/* SWIPE BLOCK RIGHT */}
      <div className="register-right">

        {/* BUTTON SWIPE */}
        <div className="button-swipe-register">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z" />
          </svg>
        </div>

        {/* TEXT SWIPE */}
        <div className="text-swipe-register">LOGIN</div>
      </div>
      {/* END SWIPE BLOCK */}


    </div>
  );
}

export default Register;
