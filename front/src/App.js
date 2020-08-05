import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";
import ShippingCost from "./components/ShippingCost/ShippingCost";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Search from "./components/Articles/Search";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>

            <Route path="/shippingCost">
              <ShippingCost />
            </Route>

            <Route path="/articles/:id">
              <Article />
            </Route>

            <Route path="/articles">
              <Articles />
            </Route>


            <Route path="/articles/search">
              <Search />
            </Route>

            <Route path="/registry">
              <Login />
              <Register />
            </Route>

          </Switch>
        </Router>
      </div>
  );
}

export default App;
