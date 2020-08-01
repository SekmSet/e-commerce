import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import { useSelector } from "react-redux";
function App() {
  const [isAuth, setIsAuth] = useState(false); //Will be replaced by a method that checks if user is authenticated
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.loginSucces) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);
  return (
    <div className="App">
      {!isAuth && (
        <>
          <Login />
          <Register />
        </>
      )}
      {isAuth && (
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
