import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./components/Login/Login";
import ShippingCost from "./components/ShippingCost/ShippingCost";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      {/*{!user.loginSucces && (*/}
      {/*  <div>*/}
      {/*    <Login />*/}
      {/*    <Register />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{user.loginSucces && (*/}
        <Router>
          <Header />
          <Switch>

            <Route path="/shippingCost">
              <ShippingCost />
            </Route>

            <Route path="/registry">
              <Login />
              <Register />
            </Route>

          </Switch>
        </Router>
      {/*)}*/}
    </div>
  );
}

export default App;
