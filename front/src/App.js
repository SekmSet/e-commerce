import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      {!user.loginSucces && (
        <div>
          <Login />
          <Register />
        </div>
      )}
      {user.loginSucces && (
        <Router>
          <Header />
          <Switch>
            <Route></Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
