import React from "react";
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
    registerUser({username, name, surname, email, password, phone}).then((data) => dispatch(data));
  };


  return (
      <div className="register_view">
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
              pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$"
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
  );
}

export default Register;
