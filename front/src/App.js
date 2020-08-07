import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";
import ShippingCost from "./components/ShippingCost/ShippingCost";
import Header from "./components/Header/Header";
import Registry from "./components/Authentication";
import Search from "./components/Articles/Search";
import Profile from "./components/profile/profile";
import Cart from "./components/ShippingCart/ShippingCart";

import "./style/App.scss";

function App() {
    return (
        <div className="App">
            <div id="anim"></div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/cart">
                        <Cart />
                    </Route>

                    <Route path="/shippingCost">
                        <ShippingCost />
                    </Route>

                    <Route path="/articles/search">
                        <Search />
                    </Route>

                    <Route path="/articles/:id">
                        <Article />
                    </Route>

                    <Route path="/articles">
                        <Articles />
                    </Route>

                    <Route path="/registry">
                        <Registry />
                    </Route>

                    <Route path="/profile">
                        <Profile />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
