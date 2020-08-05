import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";
import ShippingCost from "./components/ShippingCost/ShippingCost";
import Header from "./components/Header/Header";
import Search from "./components/Articles/Search";
import Registry from "./components/Authentication"
import "./style/App.scss";

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
            <Registry />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
