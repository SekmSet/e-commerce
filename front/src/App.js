import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ArticlesShow from "./components/Articles/Articles";
import PageArticleShow from "./components/PageArticle/pageArticle";
import ShippingCost from "./components/ShippingCost/ShippingCost";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />
          <Switch>

            <Route path="/shippingCost">
              <ShippingCost />
            </Route>

            <Route path="/PageArticleShow/:id" component={PageArticleShow}/>

            <Route path="/ArticlesShow">
              <ArticlesShow />
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
